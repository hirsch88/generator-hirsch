/// <reference path="../../../typings/tsd.d.ts" />

namespace <%= prompts.prefix %>.layout {
  'use strict';

  export var Namespace = '<%= prompts.prefix %>.layout';

  angular
    .module(Namespace, [
      `${Namespace}.directives`,
      `${Namespace}.views`
    ]);
}
