/// <reference path="../../typings/tsd.d.ts"/>

namespace <%= prompts.prefix %> {
  'use strict';

  angular
    .module('<%= prompts.prefix %>', [
      // AngularJS Libs
      'ngSanitize',
      'ngMessages',

      // Third-Party Libs
      'pascalprecht.translate',

      // Configs, middleware, run...
      '<%= prompts.prefix %>.core',

      // Common components, services, filters...

      // App modules with business logic
      '<%= prompts.prefix %>.layout',
      '<%= prompts.prefix %>.home'
    ]);
}
