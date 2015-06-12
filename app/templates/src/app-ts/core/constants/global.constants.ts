/// <reference path="../../../../typings/tsd.d.ts" />

module <%= prompts.prefix %>.core.constants {
  'use strict';

  angular
    .module(`${Namespace}.Global`, [])
    .constant(ID.lodash, _)
    .constant(ID.moment, moment);

}
