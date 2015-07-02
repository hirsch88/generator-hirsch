/// <reference path="../../../../typings/tsd.d.ts" />

module <%= prompts.prefix %>.home.views {
  'use strict';

  export var Namespace = '<%= prompts.prefix %>.home.views';

  angular
    .module(Namespace, [
      `${Namespace}.Home`
    ]);

  export var ID = {
    HomeController: `${Namespace}.HomeController`
  };
}
