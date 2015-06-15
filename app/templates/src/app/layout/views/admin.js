app.layout.views.Admin = (function (module) {
  'use strict';

  angular
    .module(module.ID, [])
    .config(StateConfig);

  function StateConfig($stateProvider) {
    $stateProvider
      .state('admin', {
        session: true,
        views:   {
          'root': {
            templateUrl: module.templateUrl()
          }
        }

      });
  }

  return module;

}(app.layout.views.add('Admin')));
