/// <reference path="../../../typings/tsd.d.ts" />

module <%= prompts.prefix %>.home {
  'use strict';

  export var Namespace = '<%= prompts.prefix %>.home';

  angular
    .module(Namespace, [
      `${Namespace}.views`
    ]);
}
