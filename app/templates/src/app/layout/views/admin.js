(function () {
  'use strict';

  angular
    .module('<%= prompts.prefix %>.layout.views.Admin', [])
    .config(StateConfig);


  function StateConfig($stateProvider) {
    $stateProvider
      .state('admin', {
        session: true,
        views:   {
          'root': {
            templateUrl: 'app/layout/views/admin.html'
          }
        }

      });
  }


}());
