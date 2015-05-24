/// <reference path="../../../typings/tsd.d.ts"/>

(function () {
  'use strict';

  angular
    .module('app.run', [])
    .run(AppRun);


  function AppRun($rootScope: angular.IRootScopeService, logger: App.Logger.ILoggerFactory, $state: angular.ui.IState, $stateParams: angular.ui.IStateParamsService) {
    var log = logger('AppRun');

    $rootScope['$state'] = $state;
    $rootScope['$stateParams'] = $stateParams;
  }
}());
