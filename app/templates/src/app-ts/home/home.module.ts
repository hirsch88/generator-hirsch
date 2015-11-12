/// <reference path="../../../typings/tsd.d.ts" />

namespace <%= prompts.prefix %>.home {
  'use strict';

  export var Namespace = '<%= prompts.prefix %>.home';

  angular
    .module(Namespace, [
      `${Namespace}.views`
    ]);
}
