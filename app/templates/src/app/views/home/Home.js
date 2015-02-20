/**
 * @namespace <%= appName %>
 */
(function () {
  'use strict';

  /**
   * @memberOf <%= appName %>
   * @namespace <%= appName %>.home
   *
   * @description
   * Startview
   */
  angular
    .module('<%= appName %>.home', [
      'common.service.member'
    ])
    .config(HomeRouteConfig)
    .controller('HomeController', HomeController);

  /**
   * @memberOf <%= appName %>.home
   * @name HomeRouteConfig
   *
   * @param $routeProvider
   * @constructor
   */
  function HomeRouteConfig($routeProvider) {
    $routeProvider
      .when('/home', {
        navigationKey: 'home',
        templateUrl:   AppUtil.buildTemplateUrl('home/Home.html'),
        controller:    'HomeController',
        controllerAs:  'home'
      });
  }

  /**
   * @memberOf <%= appName %>.home
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
