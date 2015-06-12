/// <reference path="../../../../typings/tsd.d.ts" />

module <%= prompts.prefix %>.core.util {
  'use strict';

  export var Namespace = '<%= prompts.prefix %>.core.util';

  angular
    .module(Namespace, [
      `${Namespace}.Logger`,
      `${Namespace}.Events`
    ]);

  export var ID = {
    AppEvents: `${Namespace}.Events`,
    LoggerFactory: `${Namespace}.Logger`
  };
}
