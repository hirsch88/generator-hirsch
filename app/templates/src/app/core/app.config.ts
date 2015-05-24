/// <reference path="../../../typings/tsd.d.ts"/>

/**
 * @memberOf app
 * @namespace app.config
 *
 * @description
 * 3rd Party Modules configurations
 */
(function () {
  'use strict';

  angular
    .module('app.config', [
      'pascalprecht.translate'
    ])
    .config(TranslateConfig);

  /**
   * @memberOf app.config
   * @name TranslateConfig
   *
   * @description
   * This configs the transaltion module and sets the default language
   *
   * @constructor
   */
  function TranslateConfig($translateProvider: angular.translate.ITranslateProvider) {
    $translateProvider.useStaticFilesLoader({
      prefix: './assets/i18n/',
      suffix: '.json'
    });

    $translateProvider.preferredLanguage('en');
  }
}());
