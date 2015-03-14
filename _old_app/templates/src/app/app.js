/**
 * <%= appName %>
 * @namespace app
 *
 * @description
 * <%= description %>
 *
 * @author <%= author %>
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

      // Layout components
      'layout',

      //'common.service.member',

      // App modules with business logic
      'home'


    ]);

}());
