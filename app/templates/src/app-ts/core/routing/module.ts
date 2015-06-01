/// <reference path="../../../../typings/tsd.d.ts"/>

module <%= prompts.prefix %>.core.routing {

  angular
    .module('<%= prompts.prefix %>.core.routing', [
      'ui.router',
      'ui.router.router',
      'ui.router.state'
    ]);

  export var ID = {
    AppRouterService: '<%= prompts.prefix %>.core.routing.AppRouterService',
    APP_ROUTER_PRIVATE_ROUTES: '<%= prompts.prefix %>.core.routing.APP_ROUTER_PRIVATE_ROUTES'
  };
}
