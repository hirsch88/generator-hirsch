/// <reference path="../../../../typings/tsd.d.ts" />

namespace <%= prompts.prefix %>.core.router {

  export interface IRouterService {
    /**
     * Flag indicating whether the routing pipeline is currently active.
     */
    isNavigating: boolean;
    startPipeline(preventDef: Function, toState: ng.ui.IState, toParams: any, fromState: ng.ui.IState, fromParams: any): ng.IPromise<IRouterMiddlewareContext>;

    /**
     * Add a middleware to the routing pipeline. Middlewares are executed in
     * the order of registration. If the state parameter is used, the middleware
     * will only be processed by the pipeline if the target state of the 
     * navigation is either a child state of or equal to the given state (depending
     * on the given matching mode, defaults to include children). Only absolute 
     * state names are supported, i.e. no wildcards or other patterns are allowed.
     */
    addMiddleware(middleware: IRouterMiddleware, name: string, state?: string, stateMatchingMode?: StateMatchingMode): IRouterService;
  }

  /**
   * A router middleware is a function that is executed as part of a pipeline.
   * The middleware can perform exactly one of the following actions when executed
   * (in addition to any logic the middleware itself contains):
   *  1) Call the next middleware in the pipeline
   *  2) Redirect to another state, thereby restarting the pipeline
   *  3) Cancel the pipeline
   * 
   * The middleware can also pass information to other middlewares that are executed
   * after it by modifying the context object. Note that all objects in the context
   * are mutable, but only the "toParams" object should be modified by the middleware.
   */
  export interface IRouterMiddleware {
    (actions: IRouterMiddlewareActions, context: IRouterMiddlewareContext): ng.IPromise<IRouterMiddlewareContext>;
  }

  export interface IRouterMiddlewareActions {
    /**
     * Execute the next middleware in the pipeline.
     */
    next(): ng.IPromise<IRouterMiddlewareContext>;

    /**
     * Redirect to the given state, restarting the pipeline.
     */
    redirect(to: string, params?: any): ng.IPromise<IRouterMiddlewareContext>;

    /**
     * Cancel the pipeline.
     */
    cancel(): ng.IPromise<IRouterMiddlewareContext>;
  }

  export interface IRouterMiddlewareContext {
    /**
     * The target state of the routing pipeline.
     */
    toState: ng.ui.IState;

    /**
     * The parameters for the target state. This object can be used by middlewares to 
     * pass additional information to other middlewares or to the controller of the 
     * target state.
     */
    toParams: any;

    /**
     * The state that was active when the routing pipeline was started.
     */
    fromState: ng.ui.IState;
    fromParams: any;
  }

  export enum StateMatchingMode {
    Exact,
    IncludeChildren
  }

  interface IMiddlewareContainer {
    name: string;
    middleware: IRouterMiddleware;
    state: string;
    stateMatchingMode: StateMatchingMode;
  }

  class RouterService implements IRouterService {
    private log: util.ILogger;
    private middlewares: IMiddlewareContainer[] = [];
    private sync = false;
    private current: { state: ng.ui.IState; params: any } = { state: {}, params: {} };
    private lastPipelineId = 0;

    isNavigating: boolean;

    static $inject = ['$state', '$q', util.ID.LoggerFactory];

    constructor(
      private $state: ng.ui.IStateService,
      private $q: ng.IQService,
      loggerFactory: util.ILoggerFactory
    ) {
      this.log = loggerFactory(this);
    }

    startPipeline = (preventDefault: Function, toState: ng.ui.IState, toParams: any, fromState: ng.ui.IState, fromParams: any) => {
      // if we are in the process of finishing pipeline processing, don't do anything
      if (this.sync) {
        return this.$q.reject('router is syncing');
      }

      this.lastPipelineId += 1;
      return this.startPipelineInternal(preventDefault, toState, toParams, fromState, fromParams, this.lastPipelineId);
    }

    private startPipelineInternal = (
      preventDefault: Function,
      toState: ng.ui.IState,
      toParams: any,
      fromState: ng.ui.IState,
      fromParams: any,
      pipelineId: number
    ) => {
      this.log.debug(`Starting routing pipeline [ID: ${pipelineId}; to: ${toState.name}; from: ${fromState.name}]...`);
      this.isNavigating = true;

      preventDefault();

      // by calling $state.go with notify set to false, we update the URL
      // in the browser address bar without triggering navigation. This is
      // necessary, since otherwise the preventDefault() call above would
      // cause the old URL to be displayed
      this.$state.go(toState.name, {}, { notify: false });
      var context = { toState, toParams, fromState, fromParams };

      var redirect = (middlewareName: string) => (to: string, params: any = {}): ng.IPromise<IRouterMiddlewareContext> => {
        this.log.debug(`Middleware '${middlewareName}' redirected to '${to}'!`);

        // this check is slightly different from $state.is(), since it 
        // takes into account all params instead of only the ones defined
        // in the params definition of the state
        if (to.indexOf(this.current.state.name) === 0 && angular.equals(this.current.params, params)) {
          // if we got redirected to the last active state, we need to restore 
          // its URL
          this.$state.go(to, params, { notify: false });
          return this.endPipeline(pipelineId, this.current.state, params).then(() => this.$q.reject('pipeline ended in source state'));
        } else {
          return this.startPipelineInternal(() => { ; }, this.$state.get(to), params, fromState, fromParams, pipelineId);
        }
      };

      var cancel = (middlewareName: string) => (): ng.IPromise<IRouterMiddlewareContext> => {
        this.log.debug(`Middleware '${middlewareName}' canceled navigation!`);

        // if navigation is canceled, we need to restore the URL of the 
        // original state
        this.$state.go(fromState.name, fromParams, { notify: false });
        return this.endPipeline(pipelineId, fromState, fromParams).then(() => this.$q.reject('canceled'));
      };

      var next = (remaining: IMiddlewareContainer[]) => (): ng.IPromise<IRouterMiddlewareContext> => {
        if (remaining.length === 0) {
          var isInitialRequest = fromState.name === '';

          // before we transition to the final state, we quickly return to the original
          // state, but without triggering any navigation; however, on initial page load 
          // there is no previous state to return to, so skip the restore
          var restore = () => this.$state.go(fromState.name, fromParams, { notify: false });
          var go = () => this.$state.go(context.toState.name, context.toParams);

          this.sync = true;
          return (isInitialRequest ? go() : restore().then(go))
            .then(() => this.endPipeline(pipelineId, context.toState, context.toParams))
            .finally(() => this.sync = false)
            .then(() => context);
        }

        var container = remaining.splice(0, 1)[0];
        var executeMiddleware =
          container.stateMatchingMode === StateMatchingMode.Exact
            ? toState.name === container.state
            : toState.includes(container.state);

        if (executeMiddleware) {
          this.log.debug(`Executing middleware '${container.name}'...`);

          var guardActive = false;
          var guard = (fn: Function) => (...rest: any[]) => {
            if (guardActive) {
              return this.$q.reject(new Error(`Middleware ${container.name} is trying to execute more than one action!`));
            }

            guardActive = true;

            if (pipelineId !== this.lastPipelineId) {
              return this.cancelPipeline(pipelineId);
            }

            return fn.apply(null, rest);
          };

          var actions = {
            next: guard(next(remaining)),
            cancel: guard(cancel(container.name)),
            redirect: guard(redirect(container.name))
          };

          return container.middleware(actions, context).then(() => {
            if (!guardActive) {
              return this.$q.reject(new Error(`Middleware ${container.name} did not execute any action!`));
            }

            return this.$q.when();
          });
        } else {
          this.log.debug(`Skipping middleware '${container.name}'...`);
          return next(remaining)();
        }
      };

      var clone = this.middlewares.slice(0);
      return next(clone)();
    };

    addMiddleware = (
      middleware: IRouterMiddleware,
      name: string,
      state: string = '',
      stateMatchingMode = StateMatchingMode.IncludeChildren
    ) => {
      this.middlewares.push({ middleware, state, name, stateMatchingMode });
      return this;
    };

    private endPipeline = (pipelineId: number, state: ng.ui.IState, params: any) => {
      this.log.debug(`Finished routing pipeline [ID: ${pipelineId}] in state '${state.name}'!`);
      this.isNavigating = false;
      this.current = { state, params };
      return this.$q.when();
    };

    private cancelPipeline = (pipelineId: number) => {
      this.log.debug(`Canceled routing pipeline [ID: ${pipelineId}]!`);
      this.isNavigating = false;
      return this.$q.when();
    };
  }

  angular
    .module(ID.RouterService, [
      'ui.router',
      'ui.router.router',
      'ui.router.state',

      util.ID.LoggerFactory
    ])
    .service(ID.RouterService, RouterService);
}
