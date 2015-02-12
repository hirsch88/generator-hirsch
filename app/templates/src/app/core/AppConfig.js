(function (window) {
  'use strict';

  /**
   * AppConfig
   * @description
   *
   * @type {{appTitle: string, getServerUrl: Function}}
   */
  var AppConfig = {
    title: '<%= appTitle %>',

    getServerUrl: function () {
      return 'http://localhost:1338/api/'
    },

    buildTemplateUrl: function (url) {
      return 'app/routes/' + url;
    }

  };

  window.AppConfig = AppConfig;

  angular
    .module('app.config', [])
    .value('$appConfig', AppConfig)

}(window));
