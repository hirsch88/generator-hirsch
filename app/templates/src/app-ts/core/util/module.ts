/// <reference path="../../../../typings/tsd.d.ts" />

module <%= prompts.prefix %>.core.util {
  'use strict';

  angular
    .module('<%= prompts.prefix %>.core.util', []);

  export var ID = {
    AppUtil: '<%= prompts.prefix %>.core.util.AppUtil',
    AppEvents: '<%= prompts.prefix %>.core.util.AppEvents',
    LoggerFactory: '<%= prompts.prefix %>.core.util.LoggerFactory'
  };
}
