/**
 * App Core
 * @namespace Configs
 */
(function () {
  'use strict';

  /**
   * @namespace AppCore
   * @desc Defines the AngularJS Modules and configurates them
   * @memberOf Configs
   */
  angular
    .module('app.core', [
      'ngSanitize', 
      'ngMessages', 
      'ngRoute',

    ])
    .constant('pathConstant', {
      SERVICE:    'app/common/services/',
      DIRECTIVE:  'app/common/directives/',
      FILTERS:    'app/common/filters/'
    })
    .config(RouteConfig);
    .config(LogConfig);
    .config(HttpConfig);
    .config(CompileConfig);


  /**
   * @name RouteConfig
   * @desc Defines the default route
   * @memberOf Configs.AppCore
   */
  function RouteConfig($routeProvider) {
    $routeProvider.otherwise('/home');
  }

  /**
   * @name LogConfig
   * @desc Enable debug level messages
   * @memberOf Configs.AppCore
   */
  function LogConfig($logProvider) {
    if ($logProvider.debugEnabled) {
      $logProvider.debugEnabled(true);
    }
  }

  /**
   * @name HttpConfig
   * @desc Allows the framework to stor ehe sails cookie from the backend and disable IE ajax request caching
   * @memberOf Configs.AppCore
   */
  function HttpConfig($httpProvider) {
    $httpProvider.defaults.withCredentials = true;
    if ($httpProvider.defaults.headers.get) {
      $httpProvider.defaults.headers.get['If-Modified-Since'] = '0';
    }
  }

  /**
   * @name CompileConfig
   * @desc Tools like Protractor and Batarang need this information to run, but you can disable this in production for a significant performance boost with
   * @memberOf Configs.AppCore
   */
  function CompileConfig($compileProvider) {
    $compileProvider.debugInfoEnabled(false);
  }


}());