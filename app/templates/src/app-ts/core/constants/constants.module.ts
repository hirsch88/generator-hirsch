/// <reference path="../../../../typings/tsd.d.ts" />

module <%= prompts.prefix %>.core.constants {
  'use strict';

  export var Namespace = '<%= prompts.prefix %>.core.constants';

  angular
    .module(Namespace, [
      `${Namespace}.Config`,
      `${Namespace}.Global`
    ]);

  export var ID = {
    AppConfig: `${Namespace}.Config`,
    lodash: `${Namespace}.lodash`,
    moment: `${Namespace}.moment`,
    jQuery: `${Namespace}.jQuery`
  };
}
