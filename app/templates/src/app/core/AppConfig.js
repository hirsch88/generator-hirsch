/**
 * App Core
 * @namespace Configs
 */
(function () {
  'use strict';

  /**
   * @namespace AppConfig
   * @desc 3rd Party Modules configurations
   * @memberOf Configs
   */
  angular
    .module('app.config', [
      'pascalprecht.translate'
    ])
    .config(TranslateConfig);

  /**
   * @name TranslateConfig
   * @desc This configs the transaltion module and sets the default language 
   * @memberOf Configs.AppConfig
   */  
  function TranslateConfig($translateProvider) {
    $translateProvider.useStaticFilesLoader({
      prefix: './assets/i18n/',
      suffix: '.json'
    });
    $translateProvider.preferredLanguage('en');

  }


}());