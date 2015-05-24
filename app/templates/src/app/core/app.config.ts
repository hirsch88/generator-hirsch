/// <reference path="../../../typings/tsd.d.ts" />

/**
 * 3rd Party Modules configurations
 */
module App.Config {
  'use strict';

  angular
    .module('app.config', [
      'pascalprecht.translate'
    ])
    .config(TranslateConfig);

  /**
   * This configs the translation module and sets the default language
   */
  function TranslateConfig($translateProvider: angular.translate.ITranslateProvider) {
    $translateProvider.useStaticFilesLoader({
      prefix: './assets/i18n/',
      suffix: '.json'
    });

    $translateProvider.preferredLanguage('en');
  }
}