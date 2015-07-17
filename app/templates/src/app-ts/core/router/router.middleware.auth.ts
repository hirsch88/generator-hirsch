/// <reference path="../../../../typings/tsd.d.ts" />

module <%= prompts.prefix %>.core.router {
  'use strict';

  var run = (logger: util.ILoggerFactory, $timeout: ng.ITimeoutService, routerService: IRouterService) => {
    var log = logger('Auth middleware');

    var authMiddleware: IRouterMiddleware = (actions, context) => {
      if (context.toState.data && context.toState.data.requiresSession) {
        // TODO: check if user has session
        return $timeout(() => { ; }, 1000).then(() => {
          log.debug('Redirecting to login page...');
          return actions.redirect('public.login');
        });
      } else {
        return actions.next();
      }
    };

    routerService.addMiddleware(authMiddleware, 'auth');
  };

  run.$inject = [util.ID.LoggerFactory, '$timeout', ID.RouterService];

  angular
    .module(`${Namespace}.RouterMiddlewareAuth`, [
      util.ID.LoggerFactory
    ])
    .run(run);
}
