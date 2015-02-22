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
        templateUrl:   'app/home/views/Home.html',
        controller:    'HomeController',
        controllerAs:  'home'
      });
  }

  /**
   * @memberOf home.home
   * @name HomeController
   *
   * @param MemberService {Object}
   * @constructor
   */
  function HomeController(MemberService, AppUtil) {
    var vm = this;
    vm.title = AppUtil.title;

    vm.list = [];
    MemberService.get()
      .then(function (result) {
        vm.list = result;
      });

    vm.buildFullName = MemberService.getFullName;

  }

}());
