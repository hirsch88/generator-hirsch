/// <reference path="../../../../typings/tsd.d.ts" />

module <%= prompts.prefix %>.core.constants {
  'use strict';

  export var Namespace = '<%= prompts.prefix %>.core.constants';

  angular
    .module(Namespace, [
      `${Namespace}.Global`
    ]);

  export var ID = {
    lodash: `${Namespace}.lodash`,
    moment: `${Namespace }.moment`
  };
}
