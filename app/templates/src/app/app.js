(function () {
  'use strict';

  /**
   * ******************************************************************************************************
   *
   *  '<%= appName %>'
   *
   *  '<%= description %>'
   *
   *
   *  @author     <%= author %>
   *  @date       <%= date %>
   *
   * ******************************************************************************************************
   */
  angular
    .module('app', [

      // Config and core module
      'app.config',
      'app.core',

      // Layout components
      'layout.header',

      // App modules with business logic
      '<%= appName %>.home'

    ]);

}());
