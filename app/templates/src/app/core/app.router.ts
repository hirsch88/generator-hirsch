/// <reference path="../../../typings/tsd.d.ts" />

/**
 *  Fix for 3rd party type definition file.
 */
declare module angular.ui {
  interface IUrlRouterService {
    listen(): void;
  }
}

module App.Router {
  'use strict';

  export class AppRouterService {
    private initializing = false;
    private initialized = false;
    private deferredInit: angular.IDeferred<any>;
    private log: Logger.Logger;

    static ID = 'AppRouterService';
    static $inject = ['$q', Logger.ID.LoggerFactory];
    constructor($q: angular.IQService, loggerFactory: Logger.ILoggerFactory) {
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
    initialize(): angular.IPromise<any> {
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

  export const ID = {
    APP_ROUTER_PRIVATE_ROUTES: 'APP_ROUTER_PRIVATE_ROUTES'
  };

  angular
    .module('app.router', [
      'ui.router',
      'ui.router.router',
      'ui.router.state'
    ])
    .constant(ID.APP_ROUTER_PRIVATE_ROUTES, getSecuredRoutes())
    .config(RouterConfig)
    .service(AppRouterService.ID, AppRouterService)
    .run(AppRouter);

  function getSecuredRoutes() {
    return [
      '/private/*'
    ];
  }

  function RouterConfig($urlRouterProvider: angular.ui.IUrlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
  }

  function AppRouter(
    $q: angular.IQService,
    $rootScope: angular.IRootScopeService,
    $urlRouter: angular.ui.IUrlRouterService,
    logger: Logger.ILoggerFactory,
    $state: angular.ui.IStateService,
    appRouterService: AppRouterService,
    appRouterPrivateRoutes: string[]) {
    const log = logger('AppRouter');
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
      const deferred = $q.defer<void>();
      toUrl = parseRoute(toUrl);

      const isPrivate = appRouterPrivateRoutes.some(r => doesUrlMatchPattern(r, toUrl));

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
      const exp = new RegExp(pattern);
      return exp.test(route);
    }
  }

  AppRouter.$inject = ['$q', '$rootScope', '$urlRouter', Logger.ID.LoggerFactory, '$state', AppRouterService.ID, ID.APP_ROUTER_PRIVATE_ROUTES];
}