/// <reference path="../../../../typings/tsd.d.ts"/>

module <%= prompts.prefix %>.core.router {

  angular
    .module('<%= prompts.prefix %>.core.router', [
      'ui.router',
      'ui.router.router',
      'ui.router.state',

      '<%= prompts.prefix %>.core.router.RouterConstants',
      '<%= prompts.prefix %>.core.router.RouterConfig',
      '<%= prompts.prefix %>.core.router.RouterService',
      '<%= prompts.prefix %>.core.router.Router'
    ]);

  export var ID = {
    RouterService: '<%= prompts.prefix %>.core.routing.RouterService',
    APP_ROUTER_PRIVATE_ROUTES: '<%= prompts.prefix %>.core.routing.APP_ROUTER_PRIVATE_ROUTES'
  };
}
