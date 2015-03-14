/**
 * gulpApp
 * @namespace app
 *
 * @description
 *
 *
 * @author Gery Hirschfeld <gery.hirschfeld@w3tec.ch>
 * @date March, 2015
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
