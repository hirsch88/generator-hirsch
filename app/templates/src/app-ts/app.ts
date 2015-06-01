/// <reference path="../../typings/tsd.d.ts"/>

module <%= prompts.prefix %> {
  'use strict';

  angular
    .module('<%= prompts.prefix %>', [

      // core module
      '<%= prompts.prefix %>.core',

      // Layout components
      '<%= prompts.prefix %>.layout',

      // Common components, services, filters...

      // App modules with business logic
      '<%= prompts.prefix %>.home'
    ]);
}
