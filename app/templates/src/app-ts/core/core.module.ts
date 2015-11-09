/// <reference path="../../../typings/tsd.d.ts" />

namespace <%= prompts.prefix %>.core {
  'use strict';

  export var Namespace = '<%= prompts.prefix %>.core';

  angular
    .module(Namespace, [
      `${Namespace}.constants`,
      `${Namespace}.config`,
      `${Namespace}.router`,
      `${Namespace}.util`
    ]);
}
