/**
 * App Util
 * @namespace Configs
 */
(function (window) {
  'use strict';

  /**
   * @namespace AppUtil
   * @desc Configuration Object
   * @memberOf Configs
   */
  var AppUtil = {
    title: '<%= appTitle %>',

    server: {
      local: 'http://localhost:1338/api/',
      dev:   'http://localhost:1338/api/',
      test:  'http://localhost:1338/api/',
      prod:  'http://localhost:1338/api/'
    },

    /**
     * @name getServerUrl
     * @desc Returns the backend url for the right environemnt. 
     * To get the environment, we anlyse the url from our borwser.
     * @returns {String} Backend Url
     * @memberOf Configs.AppUtil
     */
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

    /**
     * @name buildTemplateUrl
     * @desc Builds the path to the view tempates
     * @returns {String} template url/path
     * @memberOf Configs.AppUtil
     */
    buildTemplateUrl: function (url) {
      return 'app/views/' + url;
    }

  };

  window.AppUtil = AppUtil;

  angular
    .module('app.util', [])
    .value('AppUtil', AppUtil)

}(window));
