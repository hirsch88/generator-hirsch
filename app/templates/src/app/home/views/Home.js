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
    .config(HomeRouteConfig)
    .controller('HomeController', HomeController);

  /**
   * @memberOf home.home
   * @name HomeRouteConfig
   *
   * @param $routeProvider
   * @constructor
   */
  function HomeRouteConfig($routeProvider) {
    $routeProvider
      .when('/home', {
        navigationKey: 'home',
        templateUrl:   'app/home/views/home.html',
        controller:    'HomeController',
        controllerAs:  'home'
      });
  }

  /**
   * @memberOf home.home
   * @name HomeController
   *
   * @param members {Object}
   * @constructor
   */
  function HomeController(members, appUtil) {
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
