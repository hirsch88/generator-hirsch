/// <reference path="../../../typings/tsd.d.ts" />

/**
 * 3rd Party Modules configurations
 */
module App.Config {
  'use strict';

  /**
   * This configs the translation module and sets the default language
   */
  var TranslateConfig = ($translateProvider: angular.translate.ITranslateProvider) => {
    $translateProvider.useStaticFilesLoader({
      prefix: './assets/i18n/',
      suffix: '.json'
    });

    $translateProvider.preferredLanguage('en');
  }

  angular
    .module('core.config', [
      'pascalprecht.translate'
    ])
    .config(TranslateConfig);
}