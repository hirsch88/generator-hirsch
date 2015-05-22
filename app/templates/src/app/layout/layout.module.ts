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
      'common.directive.header',

      'layout.admin',
      'layout.public'
    ]);


})();
