/// <reference path="../../../../typings/tsd.d.ts"/>

namespace <%= prompts.prefix %>.layout.views {
  'use strict';

  export var Namespace = '<%= prompts.prefix %>.layout.views';

  angular
    .module(Namespace, [
      `${Namespace}.Admin`,
      `${Namespace}.Public`
    ]);
}
