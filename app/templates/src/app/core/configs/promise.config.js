(function() {
  'use strict';

  angular.module('<%= prompts.prefix %>.core.configs.Promise', [
      '<%= prompts.prefix %>.core.constants.Global'
    ])
    .run(PromiseConfig);

  function PromiseConfig($rootScope, $bluebird) {
    $bluebird.setScheduler(function(cb) {
      $rootScope.$evalAsync(cb);
    });
  }

}());