/// <reference path="../../../../typings/tsd.d.ts" />

namespace <%= prompts.prefix %>.core.config {
  'use strict';

  export var Namespace = '<%= prompts.prefix %>.core.config';

  angular
    .module(Namespace, [
      `${Namespace}.Angular`,
      `${Namespace}.ThirdParty`
    ]);
}
