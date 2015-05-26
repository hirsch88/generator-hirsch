/// <reference path="../../../../typings/tsd.d.ts"/>

(function () {
  'use strict';

  /**
   * @memberOf layout
   * @namespace layout.public
   *
   */
  angular
    .module('layout.views.public', [])
    .config(StateConfig);


  function StateConfig($stateProvider: angular.ui.IStateProvider) {
    $stateProvider
      .state('public', {
        views: {
          'root': {
            templateUrl: 'app/layout/views/public.html'
          }
        }

      });
  }


}());
