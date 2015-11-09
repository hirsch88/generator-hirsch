/// <reference path="../../../../typings/tsd.d.ts" />

namespace <%= prompts.prefix %>.core.router {
  'use strict';

  var run = ($q: ng.IQService, routerService: IRouterService, logger: util.ILoggerFactory) => {
    var log = logger('ErrorHandling middleware');

    var errorHandlingMiddleware: IRouterMiddleware = a => a.next().catch(err => {
      log.error(err);
      return $q.reject(err);
    });

    routerService.addMiddleware(errorHandlingMiddleware, 'errorHandling');
  };

  run.$inject = ['$q', ID.RouterService, util.ID.LoggerFactory];

  angular
    .module(`${Namespace}.RouterMiddlewareErrorHandling`, [
      util.ID.LoggerFactory
    ])
    .run(run);
}
