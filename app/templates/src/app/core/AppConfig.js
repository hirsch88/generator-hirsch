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

    server: {
      local: 'http://localhost:1338/api/',
      dev:   'http://localhost:1338/api/',
      test:  'http://localhost:1338/api/',
      prod:  'http://localhost:1338/api/'
    },

    getServerUrl: function () {
      switch (window.location.hostname) {
        case 'localhost':
          return this.server.local;
          break;
        case 'dev.<%= appTitle %>':
          return this.server.dev;
          break;
        case 'test.<%= appTitle %>':
          return this.server.test;
          break;
        default:
          return this.server.prod;
      }
    },

    buildTemplateUrl: function (url) {
      return 'app/views/' + url;
    }

  };

  window.AppConfig = AppConfig;

  angular
    .module('app.config', [])
    .value('$appConfig', AppConfig)

}(window));
