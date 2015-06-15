app.core.config.Angular = (function (module) {
  'use strict';

  angular
    .module(module.ID, [])
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
  function LogConfig($logProvider) {
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
  function HttpConfig($httpProvider) {
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
  function CompileConfig($compileProvider) {
    $compileProvider.debugInfoEnabled(false);
  }

  return module;

}(app.core.config.add('Angular')));
