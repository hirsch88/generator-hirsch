/// <reference path="../../../../typings/tsd.d.ts" />

module <%= prompts.prefix %>.core.util {
  'use strict';

  angular
    .module('<%= prompts.prefix %>.core.util', [
      '<%= prompts.prefix %>.core.util.Logger',
      '<%= prompts.prefix %>.core.util.Events',
      '<%= prompts.prefix %>.core.util.Util'
    ]);

  export var ID = {
    AppUtil: '<%= prompts.prefix %>.core.util.Util',
    AppEvents: '<%= prompts.prefix %>.core.util.Events',
    LoggerFactory: '<%= prompts.prefix %>.core.util.Logger'
  };
}
