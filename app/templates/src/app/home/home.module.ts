/// <reference path="../../../typings/tsd.d.ts"/>

/**
 * @namespace home
 *
 * @description
 * Startview
 */
(function () {
  'use strict';

  angular
    .module('home', [
      'common.services.member',

      'home.views.home'
    ]);


})();
