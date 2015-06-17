app.core.config.ThirdPary = (function (module) {
  'use strict';

  angular
    .module(module.ID, [
      app.core.constants.Config.ID
    ])
    .config(TranslateConfig)
    .config(UiRouterConfig);

  function TranslateConfig($translateProvider, appConfig) {
    $translateProvider.useStaticFilesLoader({
      prefix: './assets/i18n/',
      suffix: '.json'
    });
    //$translateProvider.preferredLanguage('en');
    $translateProvider.preferredLanguage(appConfig.LANGUAGE);
  }

  function UiRouterConfig($urlRouterProvider){
    // when there is an empty route, redirect to /index
    $urlRouterProvider.when('', '/home');
    $urlRouterProvider.otherwise('/home');

  }

  return {ID: module};

}(app.core.config.add('ThirdParty')));
