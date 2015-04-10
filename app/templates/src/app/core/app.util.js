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
  var AppUtil = {
    title:  'admin',
    server: {
      local: 'http://localhost:1337/api/',
      prod:  'http://localhost:1337/api/'
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
        default:
          return this.server.prod;
      }
    },

    /**
     * @memberOf app.util
     * @method getEnvironment
     */
    getEnvironment: function () {
      switch (window.location.hostname) {
        case 'localhost':
          return 'dev';
        default:
          return 'prod';
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
      return 'app/views/' + url;
    },

    /**
     * @memberOf app.util
     * @method joinPath
     *
     * @description
     * Joins the array to url path
     *
     * @example AppUtil.joinPath(['events','abos']) // -> 'events/abos'
     *
     * @param array {Array} Part of the url
     * @returns {String} url
     */
    joinPath: function (array) {
      return array.join('/');
    }

  };

  window.AppUtil = AppUtil;

}(window));
