/// <reference path="../../../../typings/tsd.d.ts" />

/**
 *  Fix for 3rd party type definition file.
 */
declare module angular.ui {
  interface IUrlRouterService {
    listen(): void;
  }
}

module <%= prompts.prefix %>.core.router {
  'use strict';

  angular
    .module('<%= prompts.prefix %>.core.router.Router', [])
    .run(AppRouter);

  AppRouter.$inject = [
    '$q',
    '$rootScope',
    '$urlRouter',
    util.ID.LoggerFactory,
    '$state',
    ID.RouterService,
    ID.APP_ROUTER_PRIVATE_ROUTES
  ];

  function AppRouter(
    $q: ng.IQService,
    $rootScope: ng.IRootScopeService,
    $urlRouter: ng.ui.IUrlRouterService,
    logger: util.ILoggerFactory,
    $state: ng.ui.IStateService,
    routerService: IRouterService,
    privateRoutes: string[]) {
    var log = logger('AppRouter');
    log.info('start');

    $rootScope.$on('$locationChangeSuccess', onLocationChange);

    $urlRouter.listen();

    function onLocationChange(event, toUrl, fromUrl) {
      log.info('onLocationChange', { toUrl, fromUrl });

      // Halt state change from even starting
      event.preventDefault();

      routerService.initialize()
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

      var isPrivate = privateRoutes.some(r => doesUrlMatchPattern(r, toUrl));

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
