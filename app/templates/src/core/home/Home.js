(function(){
    'use strict';

    angular.module('<%= appName %>.home',[])
    	.config(HomeRouteConfig)
    	.controller('$<%= appSign %>HomeController',HomeController);

	/**
   	 * @ngdoc config
   	 * @name HomeRouteConfig
   	 * @param $routeProvider
   	 */
	function HomeRouteConfig($routeProvider){
		$routeProvider
	      .when('/home', {
	        navigationKey: 'home',
	        templateUrl  : '<%= coreDir %>/home/Home.html',
	        controller   : '$<%= appSign %>HomeController',
	        controllerAs : 'home'
	      });
	}

    /**
     * @ngdoc controller
     * @name HomeController
     * @param 
     */
	function HomeController(){
		var home = this;
		home.title = '<%= appTitle %>';
	}

}());