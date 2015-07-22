(function () {
  'use strict';

  angular
    .module('<%= prompts.prefix %>.core.configs.Translate', [
      '<%= prompts.prefix %>.core.constants.Config'
    ])
    .config(TranslateConfig);

  function TranslateConfig($translateProvider, appConfig) {
    $translateProvider.useStaticFilesLoader({
      prefix: './assets/i18n/',
      suffix: '.json'
    });
    $translateProvider.preferredLanguage(appConfig.LANGUAGE);
    $translateProvider.useSanitizeValueStrategy('sanitize');
  }


}());
