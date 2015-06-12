/// <reference path="../../../../typings/tsd.d.ts" />

module <%= prompts.prefix %>.layout.directives {
  'use strict';

  export var Namespace = '<%= prompts.prefix %>.layout.directives';

  angular
    .module(Namespace, [
      `${Namespace}.Header`
    ]);
}
