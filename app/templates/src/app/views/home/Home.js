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
      'common.service.member'
    ])
    .config(HomeRouteConfig)
    .controller('HomeController', HomeController);

  /**
   * @memberOf home
   * @name HomeRouteConfig
   *
   * @param $routeProvider
   * @constructor
   */
  function HomeRouteConfig($routeProvider) {
    $routeProvider
      .when('/home', {
        navigationKey: 'home',
        templateUrl:   AppUtil.buildTemplateUrl('home/home.html'),
        controller:    'HomeController',
        controllerAs:  'home'
      });
  }

  /**
   * @memberOf home
   * @name HomeController
   *
   * @param MemberService {Object}
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
