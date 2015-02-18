/**
 * Home View
 * @namespace View
 */
(function () {
  'use strict';

  /**
   * @namespace Home
   * @desc Startview
   * @memberOf View
   */
  angular.module('<%= appName %>.home', [])
    .config(HomeRouteConfig)
    .controller('<%= appSign %>HomeController', HomeController);

  
  function HomeRouteConfig($routeProvider) {
    $routeProvider
      .when('/home', {
        navigationKey: 'home',
        templateUrl:   AppUtil.buildTemplateUrl('home/Home.html'),
        controller:    '<%= appSign %>HomeController',
        controllerAs:  'home'
      });
  }

  function HomeController() {
    var home = this;
    home.title = '<%= appTitle %>';
  }

}());
