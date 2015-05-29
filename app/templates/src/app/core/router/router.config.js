(function () {
  'use strict';

  angular
    .module('<%= prompts.prefix %>.core.router.RouterConfig', [])
    .config(RouterConfig);


  function RouterConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
  }


}());
