/// <reference path="../../../typings/tsd.d.ts"/>

/**
 * @namespace layout
 *
 * @description
 * This collects all navigations, headers and footers outside of the main view
 */
(function () {
  'use strict';

  angular
    .module('layout', [
      'layout.directives.header',

      'layout.views.admin',
      'layout.views.public'
    ]);


})();
