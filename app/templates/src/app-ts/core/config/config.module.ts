/// <reference path="../../../../typings/tsd.d.ts" />

module <%= prompts.prefix %>.core.config {
  'use strict';

  export var Namespace = '<%= prompts.prefix %>.core.config';

  export var ID = {
    AppConfig: `${Namespace}.ConfigJSON`
  };

  angular
    .module(Namespace, [
      `${Namespace}.Angular`,
      `${Namespace}.ThirdParty`,
      ID.AppConfig
    ]);
}
