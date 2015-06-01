/// <reference path="../../../../typings/tsd.d.ts" />

module <%= prompts.prefix %>.core.config {
  'use strict';

  angular
    .module('<%= prompts.prefix %>.core.config', [
    // angular modules
    'ngSanitize',
    'ngMessages',

    // third party modules
    'pascalprecht.translate'
    ]);
}
