(function () {
  'use strict';

  angular
    .module('<%= prompts.prefix %>.core.config.ThirdParty', [])
    .config(TranslateConfig);

  function TranslateConfig($translateProvider) {
    $translateProvider.useStaticFilesLoader({
      prefix: './assets/i18n/',
      suffix: '.json'
    });
    $translateProvider.preferredLanguage('en');

  }

}());
