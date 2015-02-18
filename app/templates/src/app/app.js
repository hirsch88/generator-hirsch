/**
 * <%= appTitle %>
 * @namespace App
 * @name <%= appName %>
 * @desc <%= description %>
 * @author <%= author %>
 * @date <%= date %>
 */
(function () {
  'use strict';

  angular
    .module('app', [

      // Config and core module
      'app.util',
      'app.core',
      'app.config',

      // Layout components
      'layout.header',

      // App modules with business logic
      '<%= appName %>.home'

    ]);

}());