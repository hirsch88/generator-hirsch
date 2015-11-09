/// <reference path="../../../../typings/tsd.d.ts" />

namespace <%= prompts.prefix %>.layout.directives {
  'use strict';

  export var Namespace = '<%= prompts.prefix %>.layout.directives';

  angular
    .module(Namespace, [
      `${Namespace}.Header`
    ]);
}
