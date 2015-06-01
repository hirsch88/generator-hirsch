/// <reference path="../../../../typings/tsd.d.ts" />

module <%= prompts.prefix %>.core.config {
  'use strict';

  angular
    .module('<%= prompts.prefix %>.core.config', [
      '<%= prompts.prefix %>.core.config.Angular',
      '<%= prompts.prefix %>.core.config.ThirdParty'
    ]);
}
