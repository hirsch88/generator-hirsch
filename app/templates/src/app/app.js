(function () {
  'use strict';

  angular
    .module('<%= prompts.prefix %>', [

      // AngularJS Libs
      'ngSanitize',
      'ngMessages',

      // Third-Party Libs
      'pascalprecht.translate',

      // Config and core module
      '<%= prompts.prefix %>.core',
      '<%= prompts.prefix %>.config',
      '<%= prompts.prefix %>.logger',
      '<%= prompts.prefix %>.router',
      '<%= prompts.prefix %>.run',

      // Layout components
      '<%= prompts.prefix %>.layout',

      '<%= prompts.prefix %>.common.service.member',

      // App modules with business logic
      '<%= prompts.prefix %>.home'


    ]);

}());
