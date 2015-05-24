/// <reference path="../../../typings/tsd.d.ts"/>

(function () {
  'use strict';

  angular
    .module('app.run', [])
    .run(AppRun);


  function AppRun($rootScope: angular.IRootScopeService, logger: App.Logger.ILoggerFactory, $state: angular.ui.IStateService, $stateParams: angular.ui.IStateParamsService) {
    var log = logger('AppRun');

    $rootScope['$state'] = $state;
    $rootScope['$stateParams'] = $stateParams;
  }

  AppRun.$inject = ['$rootScope', App.Logger.ID.LoggerFactory, '$state', '$stateParams'];
}());
