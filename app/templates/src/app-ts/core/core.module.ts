/// <reference path="../../../typings/tsd.d.ts" />

module <%= prompts.prefix %>.core {
  'use strict';

  angular
    .module('<%= prompts.prefix %>.core', [
      '<%= prompts.prefix %>.core.constants',
      '<%= prompts.prefix %>.core.config',
      '<%= prompts.prefix %>.core.router',
      '<%= prompts.prefix %>.core.util'
    ]);
}
