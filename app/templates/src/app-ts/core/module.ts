/// <reference path="../../../typings/tsd.d.ts" />

module <%= prompts.prefix %>.core {
  'use strict';

  angular
    .module('<%= prompts.prefix %>.core', [
    '<%= prompts.prefix %>.core.config',
    '<%= prompts.prefix %>.core.routing',
    '<%= prompts.prefix %>.core.util'
  ]);
}
