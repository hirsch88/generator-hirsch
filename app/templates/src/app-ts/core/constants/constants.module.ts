/// <reference path="../../../../typings/tsd.d.ts" />

module <%= prompts.prefix %>.core.constants {
  'use strict';

  angular
    .module('<%= prompts.prefix %>.core.constants', [
      '<%= prompts.prefix %>.core.constants.Global'
    ]);

  export var ID = {
    lodash: '<%= prompts.prefix %>.core.constants.lodash',
    moment: '<%= prompts.prefix %>.core.constants.moment'
  };
}
