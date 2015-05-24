/// <reference path="../../../typings/tsd.d.ts" />

/**
 * Defines the AngularJS Modules and configures them
 */
module App.Core {
  'use strict';

  /**
   * Defines some paths of the application
   */
  export interface IPathConstant {
    /**
     * Common service path
     */
    SERVICE: string;

    /**
     * Common directive/components path
     */
    DIRECTIVE: string;

    /**
     * Common filters path
     */
    FILTERS: string;

    /**
     * Common templates path
     */
    TEMPLATES: string;
  }

  export const ID = {
    PathConstant: 'pathConstant'
  };

  angular
    .module('app.core', [
      'ngSanitize',
      'ngMessages'
    ])
    .constant(ID.PathConstant, {
      SERVICE: 'app/common/services/',
      DIRECTIVE: 'app/common/directives/',
      FILTERS: 'app/common/filters/',
      TEMPLATES: 'app/common/templates/'
    })
    .config(LogConfig)
    .config(HttpConfig)
    .config(CompileConfig);

  /**
   * Enable debug level messages
   */
  function LogConfig($logProvider: angular.ILogProvider) {
    if ($logProvider.debugEnabled) {
      $logProvider.debugEnabled(true);
    }
  }

  /**
   * Allows the framework to store the sails cookie from the backend and disable IE ajax request caching
   */
  function HttpConfig($httpProvider: angular.IHttpProvider) {
    $httpProvider.defaults.withCredentials = true;
    if ($httpProvider.defaults.headers['get']) {
      $httpProvider.defaults.headers['get']['If-Modified-Since'] = '0';
    }
  }

  /**
   * Tools like Protractor and Batarang need this information to run, but you can disable
   * this in production for a significant performance boost with
   */
  function CompileConfig($compileProvider: angular.ICompileProvider) {
    $compileProvider.debugInfoEnabled(false);
  }
}