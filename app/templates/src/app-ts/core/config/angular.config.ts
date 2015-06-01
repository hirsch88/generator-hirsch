/// <reference path="../../../../typings/tsd.d.ts" />

/**
 * Defines the AngularJS Modules and configures them
 */
module <%= prompts.prefix %>.core.config {
  'use strict';

  /**
   * Enable debug level messages
   */
  var LogConfig = ($logProvider: ng.ILogProvider) => {
    if ($logProvider.debugEnabled) {
      $logProvider.debugEnabled(true);
    }
  };

  /**
   * Allows the framework to store the sails cookie from the backend and disable IE ajax request caching
   */
  var HttpConfig = ($httpProvider: ng.IHttpProvider) => {
    $httpProvider.defaults.withCredentials = true;
    if ($httpProvider.defaults.headers['get']) {
      $httpProvider.defaults.headers['get']['If-Modified-Since'] = '0';
    }
  };

  /**
   * Tools like Protractor and Batarang need this information to run, but you can disable
   * this in production for a significant performance boost with
   */
  var CompileConfig = ($compileProvider: ng.ICompileProvider) => {
    $compileProvider.debugInfoEnabled(false);
  };

  angular
    .module('<%= prompts.prefix %>.core.config.Angular', [])
    .config(LogConfig)
    .config(HttpConfig)
    .config(CompileConfig);
}
