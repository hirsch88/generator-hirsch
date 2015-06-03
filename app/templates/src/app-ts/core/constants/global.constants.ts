/// <reference path="../../../../typings/tsd.d.ts" />

module <%= prompts.prefix %>.core.constants {
  'use strict';

  angular
    .module('<%= prompts.prefix %>.core.constants.Global', [])
    .constant(ID.lodash, _)
    .constant(ID.moment, moment);

}
