/// <reference path="../../../../typings/tsd.d.ts" />

module <%= prompts.prefix %>.core.config {
  'use strict';

  var translateConfig = ($translateProvider: ng.translate.ITranslateProvider) => {
    $translateProvider.useStaticFilesLoader({
      prefix: './assets/i18n/',
      suffix: '.json'
    });

    $translateProvider.preferredLanguage('en');
  };

  translateConfig.$inject = ['$translateProvider'];

  angular
    .module(`${Namespace}.ThirdParty`, [
      'pascalprecht.translate'
    ])
    .config(translateConfig);
}
