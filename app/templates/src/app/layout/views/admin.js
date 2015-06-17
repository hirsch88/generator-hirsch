(function () {
  'use strict';

  angular
    .module('<%= prompts.prefix %>.layout.views.Admin', [])
    .config(StateConfig);

  function StateConfig($stateProvider) {
    $stateProvider
      .state('admin', {
        views: {
          'root': {
            templateUrl: util.templateUrl('<%= prompts.prefix %>.layout.views.Admin')
          }
        }
      });
  }


}());
