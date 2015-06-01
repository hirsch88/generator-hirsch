/// <reference path="../../../../typings/tsd.d.ts" />

/**
 *  Fix for 3rd party type definition file.
 */
declare module angular.ui {
  interface IUrlRouterService {
    listen(): void;
  }
}

module <%= prompts.prefix %>.core.routing {
  'use strict';

  export class AppRouterService {
    private initializing = false;
    private initialized = false;
    private deferredInit: ng.IDeferred<any>;
    private log: util.Logger;

    static $inject = ['$q', util.ID.LoggerFactory];
    constructor($q: ng.IQService, loggerFactory: util.ILoggerFactory) {
      this.log = loggerFactory('AppRouterService');
      this.deferredInit = $q.defer();
      this.deferredInit.promise.then(() => this.initialized = true);
    }

    get isInitialized() {
      return this.initialized;
    }

    /**
     * Here we will load some initial data for the application like the active event, but
     * only at the first run.
     */
    initialize(): ng.IPromise<any> {
      if (this.initializing || this.initialized) {
        return this.deferredInit.promise;
      }

      this.initializing = true;

      // TODO: load initial data
      this.log.info('loadInitialData');
      this.deferredInit.resolve();

      return this.deferredInit.promise;
    }
  }

  angular
    .module('<%= prompts.prefix %>.core.routing')
    .constant(ID.APP_ROUTER_PRIVATE_ROUTES, getSecuredRoutes())
    .config(RouterConfig)
    .service(ID.AppRouterService, AppRouterService)
    .run(AppRouter);

  function getSecuredRoutes() {
    return [
      '/private/*'
    ];
  }

  function RouterConfig($urlRouterProvider: ng.ui.IUrlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
  }

  AppRouter.$inject = [
    '$q',
    '$rootScope',
    '$urlRouter',
    util.ID.LoggerFactory,
    '$state',
    ID.AppRouterService,
    ID.APP_ROUTER_PRIVATE_ROUTES
  ];

  function AppRouter(
    $q: ng.IQService,
    $rootScope: ng.IRootScopeService,
    $urlRouter: ng.ui.IUrlRouterService,
    logger: util.ILoggerFactory,
    $state: ng.ui.IStateService,
    appRouterService: AppRouterService,
    appRouterPrivateRoutes: string[]) {
    var log = logger('AppRouter');
    log.info('start');

    $rootScope.$on('$locationChangeSuccess', onLocationChange);

    $urlRouter.listen();

    function onLocationChange(event, toUrl, fromUrl) {
      log.info('onLocationChange', { toUrl, fromUrl });

      // Halt state change from even starting
      event.preventDefault();

      appRouterService.initialize()
        .then(() => ensurePrivateRoute(toUrl))
        .then(() => hasValidSession())
        .catch(err => {
          log.warn('catch', err);
          if (err.redirct) {
            log.info('redirect to login');
            $state.go('authLogin');
          }

          if (err.sync) {
            log.info('Browser sync');
            $urlRouter.sync();
          }
        });
    }

    function ensurePrivateRoute(toUrl: string) {
      var deferred = $q.defer<void>();
      toUrl = parseRoute(toUrl);

      var isPrivate = appRouterPrivateRoutes.some(r => doesUrlMatchPattern(r, toUrl));

      if (isPrivate) {
        deferred.resolve();
      } else {
        deferred.reject({
          sync: true
        });
      }

      return deferred.promise;
    }

    function hasValidSession() {
      var deferred = $q.defer<void>();

      // TODO: Check if the user has a valid session
      if (true) {
        deferred.resolve();
      } else {
        deferred.reject({
          session: true,
          redirct: true
        });
      }

      return deferred.promise;
    }

    function parseRoute(route: string) {
      return route.split('#')[1] || route || '';
    }

    function doesUrlMatchPattern(pattern: string, route: string) {
      var exp = new RegExp(pattern);
      return exp.test(route);
    }
  }
}
