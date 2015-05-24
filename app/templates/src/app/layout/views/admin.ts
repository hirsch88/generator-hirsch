/// <reference path="../../../../typings/tsd.d.ts"/>

(function () {
  'use strict';

  /**
   * @memberOf layout
   * @namespace layout.admin
   *
   */
  angular
    .module('layout.admin', [])
    .config(StateConfig);


  function StateConfig($stateProvider: angular.ui.IStateProvider) {
    $stateProvider
      .state('admin', {
        session: true,
        views:   {
          'root': {
            templateUrl: 'app/layout/views/admin.html'
          }
        }

      });
  }


}());
