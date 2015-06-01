/// <reference path="../../../../typings/tsd.d.ts" />

module <%= prompts.prefix %>.core.config {
  'use strict';

  var TranslateConfig = ($translateProvider: ng.translate.ITranslateProvider) => {
    $translateProvider.useStaticFilesLoader({
      prefix: './assets/i18n/',
      suffix: '.json'
    });

    $translateProvider.preferredLanguage('en');
  };

  angular
    .module('<%= prompts.prefix %>.core.config.ThirdParty', [])
    .config(TranslateConfig);
}
