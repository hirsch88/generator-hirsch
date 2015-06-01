/// <reference path="../../../../typings/tsd.d.ts" />

/**
 * 3rd Party Modules configurations
 */
module <%= prompts.prefix %>.core.config {
  'use strict';

  /**
   * This configs the translation module and sets the default language
   */
  var TranslateConfig = ($translateProvider: ng.translate.ITranslateProvider) => {
    $translateProvider.useStaticFilesLoader({
      prefix: './assets/i18n/',
      suffix: '.json'
    });

    $translateProvider.preferredLanguage('en');
  };

  angular
    .module('<%= prompts.prefix %>.core.config')
    .config(TranslateConfig);
}
