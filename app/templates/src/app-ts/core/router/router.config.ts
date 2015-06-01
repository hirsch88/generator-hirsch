/// <reference path="../../../../typings/tsd.d.ts"/>

module <%= prompts.prefix %>.core.router {

  angular
    .module('<%= prompts.prefix %>.core.router.RouterConfig', [])
    .config(RouterConfig);

  function RouterConfig($urlRouterProvider: ng.ui.IUrlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
  }
}
