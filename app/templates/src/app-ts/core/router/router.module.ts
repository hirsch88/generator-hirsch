/// <reference path="../../../../typings/tsd.d.ts"/>

namespace <%= prompts.prefix %>.core.router {
  'use strict';

  export var Namespace = '<%= prompts.prefix %>.core.router';

  export var ID = {
    RouterService: `${Namespace}.RouterService`
  };

  angular
    .module(Namespace, [
      'ui.router',
      'ui.router.router',
      'ui.router.state',
      
      `${Namespace}.RouterConfig`,
      ID.RouterService
    ]);
}
