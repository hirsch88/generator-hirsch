(function() {
  'use strict';

  angular.module('c3.core.configs.Promise', [
      'c3.core.constants.Global'
    ])
    .run(PromiseConfig);

  function PromiseConfig($rootScope, $bluebird) {
    $bluebird.setScheduler(function(cb) {
      $rootScope.$evalAsync(cb);
    });
  }

}());