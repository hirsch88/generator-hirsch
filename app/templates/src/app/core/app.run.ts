/// <reference path="../../../typings/tsd.d.ts"/>

(function () {
  'use strict';

  angular
    .module('core.run', [])
    .run(AppRun);

  function AppRun($rootScope: angular.IRootScopeService, logger: App.Logger.ILoggerFactory, $state: angular.ui.IStateService, $stateParams: angular.ui.IStateParamsService) {
    var log = logger('AppRun');
    log.info('running app');

    $rootScope['$state'] = $state;
    $rootScope['$stateParams'] = $stateParams;
  }

  AppRun.$inject = ['$rootScope', App.Logger.ID.LoggerFactory, '$state', '$stateParams'];
}());
