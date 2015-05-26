/// <reference path="../../../typings/tsd.d.ts" />

/**
 * Defines the AngularJS Modules and configures them
 */
module App.Core {
  'use strict';

  /**
   * Defines some paths of the application
   */
  export class PathConstants {
    static ID = 'PathConstant';

    /**
     * Common service path
     */
    SERVICE = 'app/common/services/';

    /**
     * Common directive/components path
     */
    DIRECTIVE = 'app/common/directives/';

    /**
     * Common filters path
     */
    FILTERS = 'app/common/filters/';

    /**
     * Common templates path
     */
    TEMPLATES = 'app/common/templates/';
  }

  /**
   * Enable debug level messages
   */
  var LogConfig = ($logProvider: angular.ILogProvider) => {
    if ($logProvider.debugEnabled) {
      $logProvider.debugEnabled(true);
    }
  }

  /**
   * Allows the framework to store the sails cookie from the backend and disable IE ajax request caching
   */
  var HttpConfig = ($httpProvider: angular.IHttpProvider) => {
    $httpProvider.defaults.withCredentials = true;
    if ($httpProvider.defaults.headers['get']) {
      $httpProvider.defaults.headers['get']['If-Modified-Since'] = '0';
    }
  }

  /**
   * Tools like Protractor and Batarang need this information to run, but you can disable
   * this in production for a significant performance boost with
   */
  var CompileConfig = ($compileProvider: angular.ICompileProvider) => {
    $compileProvider.debugInfoEnabled(false);
  }

  angular
    .module('core', [
      'ngSanitize',
      'ngMessages'
    ])
    .constant(PathConstants.ID, new PathConstants())
    .config(LogConfig)
    .config(HttpConfig)
    .config(CompileConfig);
}