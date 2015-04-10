(function () {
  'use strict';

  angular
    .module('app.run', [])
    .run(AppRun);


  function AppRun($rootScope, logger, $state, $stateParams) {
    var log = logger('AppRun');

    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;


  }


}());
