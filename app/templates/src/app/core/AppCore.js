(function () {
  'use strict';

  angular
    .module('app.core', [

      // Angular modules
      'ngSanitize', // sanitizes html bindings
      'ngMessages', // validation messages
      'ngRoute',

      // 3rd Party Modules
      'pascalprecht.translate' // translations


    ])
    .constant('$pathConstant', {
      TEMP:       'app/common/templates/',
      SERVICE:    'app/common/services/',
      DIRECTIVE:  'app/common/directives/',
      FILTERS:    'app/common/filters/',
      DECORATORS: 'app/common/decorators/'
    })
    .config(Configure);


  /**
   * Configure AngularJS
   * @description
   * Custom angular configs
   *
   * @param $logProvider
   * @param $routeProvider
   * @param $translateProvider
   * @param $compileProvider
   * @param $httpProvider
   * @constructor
   */
  function Configure($logProvider, $routeProvider, $translateProvider, $compileProvider, $httpProvider) {
    //
    if ($logProvider.debugEnabled) {
      $logProvider.debugEnabled(true);
    }

    // Default route
    $routeProvider.otherwise('/home');

    // Allows the framework to stor ehe sails cookie from the backend
    $httpProvider.defaults.withCredentials = true;
    //disable IE ajax request caching
    if ($httpProvider.defaults.headers.get) {
      $httpProvider.defaults.headers.get['If-Modified-Since'] = '0';
    }

    // Translation Config
    $translateProvider.useStaticFilesLoader({
      prefix: './assets/i18n/',
      suffix: '.json'
    });
    $translateProvider.preferredLanguage('en');

    // Tools like Protractor and Batarang need this information to run, but you can disable this in production for a significant performance boost with:
    $compileProvider.debugInfoEnabled(false);

  }



}());
