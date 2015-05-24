/// <reference path="../../../typings/tsd.d.ts"/>

/**
 * @memberOf app
 * @namespace app.core
 *
 * @requires ngSanitize
 * @requires ngMessages
 * @requires ngRoute
 *
 * @description
 * Defines the AngularJS Modules and configures them
 *
 */
(function () {
  'use strict';

  angular
    .module('app.core', [
      'ngSanitize',
      'ngMessages'
    ])

  /**
   * @constant
   * @memberOf app.core
   * @name pathConstant
   * @type {Object}
   *
   * @description
   * Defines some paths of the application
   *
   * @property {String} SERVICE - Common service path
   * @property {String} DIRECTIVE - Common directive/components path
   * @property {String} FILTERS - Common filter path
   */
    .constant('pathConstant', {
      SERVICE:   'app/common/services/',
      DIRECTIVE: 'app/common/directives/',
      FILTERS:   'app/common/filters/',
      TEMPLATES: 'app/common/templates/'
    })
    .config(LogConfig)
    .config(HttpConfig)
    .config(CompileConfig);

  /**
   * @memberOf app.core
   * @name LogConfig
   *
   * @description
   * Enable debug level messages
   *
   * @constructor
   */
  function LogConfig($logProvider: angular.ILogProvider) {
    if ($logProvider.debugEnabled) {
      $logProvider.debugEnabled(true);
    }
  }

  /**
   * @memberOf app.core
   * @name HttpConfig
   *
   * @description
   * Allows the framework to stor ehe sails cookie from the backend and disable IE ajax request caching
   *
   * @constructor
   */
  function HttpConfig($httpProvider: angular.IHttpProvider) {
    $httpProvider.defaults.withCredentials = true;
    if ($httpProvider.defaults.headers['get']) {
      $httpProvider.defaults.headers['get']['If-Modified-Since'] = '0';
    }
  }

  /**
   * @memberOf app.core
   * @name CompileConfig
   *
   * @description
   * Tools like Protractor and Batarang need this information to run, but you can disable
   * this in production for a significant performance boost with
   *
   * @constructor
   */
  function CompileConfig($compileProvider: angular.ICompileProvider) {
    $compileProvider.debugInfoEnabled(false);
  }


}());
