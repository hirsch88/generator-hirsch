/// <reference path="../../../../typings/tsd.d.ts"/>

module <%= prompts.prefix %>.core.config {
  'use strict';

  angular
    .module('<%= prompts.prefix %>.core.config')
    .run(AppRun);

  AppRun.$inject = ['$rootScope', util.ID.LoggerFactory, '$state', '$stateParams'];
  function AppRun(
    $rootScope: ng.IRootScopeService,
    logger: util.ILoggerFactory,
    $state: ng.ui.IStateService,
    $stateParams: ng.ui.IStateParamsService) {
    var log = logger('AppRun');
    log.info('running app');

    $rootScope['$state'] = $state;
    $rootScope['$stateParams'] = $stateParams;
    $rootScope.$on('$stateChangeError', log.error.bind(log));
  }
}
