/**
 * @memberOf home
 * @namespace home
 *
 * @description
 * Startview
 */
(function () {
  'use strict';

  angular
    .module('home')
    .config(StateConfig)
    .controller('HomeController', HomeController);

  function StateConfig($stateProvider) {
    $stateProvider
      .state('admin.home', {
        url:           '/home',
        session:       true,
        navigationKey: 'home',
        views:         {
          'content': {
            templateUrl:  'app/home/views/home.html',
            controller:   'HomeController',
            controllerAs: 'home'
          }
        }

      });
  }

  /**
   * @memberOf home.home
   * @name HomeController
   *
   * @param members {Object}
   * @constructor
   */
  function HomeController(members) {
    var vm = this;
    vm.title = appUtil.title;

    vm.list = [];
    members.get()
      .then(function (result) {
        vm.list = result;
      });

    vm.buildFullName = members.getFullName;

  }

}());
