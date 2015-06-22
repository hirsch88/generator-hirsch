/// <reference path="../../../../typings/tsd.d.ts" />

module <%= prompts.prefix %>.core.util {
  'use strict';

  export var Namespace = '<%= prompts.prefix %>.core.util';

  export var ID = {
    AppEvents: `${Namespace}.Events`,
    LoggerFactory: `${Namespace}.Logger`,
    Backend: `${Namespace}.Backend`
  };

  angular
    .module(Namespace, [
      ID.AppEvents,
      ID.LoggerFactory,
      ID.Backend
    ]);
}
