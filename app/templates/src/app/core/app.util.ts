/// <reference path="../../../typings/tsd.d.ts" />

declare var AppUtil: App.Util.AppUtil;

module App.Util {
  'use strict';

  /**
   * This Object has some necessary information and methods. Configuration Object
   * It is also global, so we can use this outside of the AngularJS Framework
   */
  export class AppUtil {
    title = 'admin';
    server = {
      local: 'http://localhost:1337/api/',
      prod: 'http://localhost:1337/api/'
    };

    /**
     *  Returns the backend url for the right environemnt.
     *  To get the environment, we anlyse the url from our borwser.
     */
    getServerUrl = () => {
      switch (window.location.hostname) {
        case 'localhost':
          return this.server.local;
        default:
          return this.server.prod;
      }
    };

    getEnvironment = () => {
      switch (window.location.hostname) {
        case 'localhost':
          return 'dev';
        default:
          return 'prod';
      }
    };

    /**
     * Builds the path to the view templates
     *
     * @example AppUtil.buildTemplateUrl('foo') // -> 'app/views/foo'
     */
    buildTemplateUrl = (url: string): string => {
      return 'app/views/' + url;
    };

    /**
     * Joins the array to url path
     *
     * @example AppUtil.joinPath(['events','abos']) // -> 'events/abos'
     */
    joinPath = (segments: string[]): string => {
      return segments.join('/');
    };

    /**
     * Returns the name of a class/function
     */
    getFunctionName = (object: Function | FunctionConstructor, defaultName?: string): string => {
      var nameFromToStringRegex = /^function\s?([^\s(]*)/;
      var result = '';

      if (typeof object === 'function') {
        result = object['name'] || object.toString().match(nameFromToStringRegex)[1];
      } else if (typeof object.constructor === 'function') {
        result = this.getFunctionName(object.constructor, defaultName);
      }

      return result || defaultName;
    };
  }

  // TODO: convert to Angular service
  window['AppUtil'] = new AppUtil();
}