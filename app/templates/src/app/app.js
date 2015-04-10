/**
 * <%= prompts.appName %>
 * @namespace app
 *
 * @description
 * <%= prompts.description %>
 *
 * @author <%= prompts.author %>
 * @date <%= date %>
 * @version 0.0.0
 */
(function () {
  'use strict';

  angular
    .module('app', [

      // Config and core module
      'app.core',
      'app.config',
      'app.logger',
      'app.router',
      'app.run',

      // Layout components
      'layout',

      'common.service.member',

      // App modules with business logic
      'home'


    ]);

}());
