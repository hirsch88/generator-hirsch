(function () {
  'use strict';

  angular
    .module('<%= prompts.prefix %>.core.configs.Router', [])
    .config(UiRouterConfig);

  function UiRouterConfig($urlRouterProvider){
    // when there is an empty route, redirect to /index
    $urlRouterProvider.when('', '/home');
    $urlRouterProvider.otherwise('/home');
  }

}());
