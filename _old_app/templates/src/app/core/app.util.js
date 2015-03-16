/**
 * @memberOf app
 * @namespace app.util
 *
 * @description
 * This Object has some necessary information and methods. Configuration Object
 * It is also global, so we can use this outside of the AngularJS Framework
 *
 * @type {Object}
 * @property {String} title - How you call your application
 * @property {Object} server - Has all backend urls
 * @property {String} server.local - URL to connect to the local backend service
 * @property {String} server.prod - Shows the url to the productive service
 */
(function (window) {
  'use strict';

  /**
   * @global
   * @name AppUtil
   * @see app.util
   */
  var appUtil = {
    title: '<%= appName %>',
    server: {
      local: 'http://localhost:1338/api/',
      prod:  'http://localhost:1338/api/'
    },

    /**
     * @memberOf app.util
     * @method getServerUrl
     *
     * @description
     *  Returns the backend url for the right environemnt.
     *  To get the environment, we anlyse the url from our borwser.
     *
     * @example AppUtil.getServerUrl()
     *
     * @returns {String} Backend Url
     */
    getServerUrl: function () {
      switch (window.location.hostname) {
        case 'localhost':
          return this.server.local;
          break;
        case 'dev.<%= appName %>':
          return this.server.dev;
          break;
        case 'test.<%= appName %>':
          return this.server.test;
          break;
        default:
          return this.server.prod;
      }
    },

    /**
     * @memberOf app.util
     * @method buildTemplateUrl
     *
     * @description
     *  Builds the path to the view templates
     *
     * @example AppUtil.buildTemplateUrl('foo') // -> 'app/views/foo'
     *
     * @param url {String} Part of the path to the template/view
     * @returns {String} template url/path
     */
    buildTemplateUrl: function (url) {
      return '<%= viewDir %>/' + url;
    }

  };

  window.appUtil = appUtil;

}(window));
