/// <reference path="../../../../typings/tsd.d.ts"/>

module <%= prompts.prefix %>.core.router {
  'use strict';

  export var Namespace = '<%= prompts.prefix %>.core.router';

  export var ID = {
    RouterService: `${Namespace}.RouterService`,
    APP_ROUTER_PRIVATE_ROUTES: `${Namespace}.APP_ROUTER_PRIVATE_ROUTES`
  };

  angular
    .module(Namespace, [
      'ui.router',
      'ui.router.router',
      'ui.router.state',

      `${Namespace}.RouterConstants`,
      `${Namespace}.RouterConfig`,
      ID.RouterService,
      `${Namespace}.Router`
    ]);
}
