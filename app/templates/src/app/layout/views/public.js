app.layout.views.Public = (function (module) {
  'use strict';

  angular
    .module(module.ID, [])
    .config(StateConfig);

  function StateConfig($stateProvider) {
    $stateProvider
      .state('public', {
        views: {
          'root': {
            templateUrl: module.templateUrl()
          }
        }
      });
  }

  return module;

}(app.layout.views.add('Public')));
