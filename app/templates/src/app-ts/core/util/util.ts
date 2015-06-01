/// <reference path="../../../../typings/tsd.d.ts" />

module <%= prompts.prefix %>.core.util {
  'use strict';

  export interface IAppUtil {
    /**
     * The title of the app.
     */
    title: string;
    server: { local: string; prod: string; };

    /**
     *  Returns the backend url for the right environemnt.
     *  To get the environment, we anlyse the url from our borwser.
     */
    getServerUrl: () => string;

    /**
     * Returns which environment the app is currently running in.
     */
    getEnvironment: () => string;

    /**
     * Builds the path to the view templates
     *
     * @example AppUtil.buildTemplateUrl('foo') // -> 'app/views/foo'
     */
    buildTemplateUrl: (url: string) => string;

    /**
     * Joins the array to url path
     *
     * @example AppUtil.joinPath(['events','abos']) // -> 'events/abos'
     */
    joinPath: (segments: string[]) => string;
  }

  /**
   * This Object has some necessary information and methods. Configuration Object
   * It is also global, so we can use this outside of the AngularJS Framework
   */
  class AppUtil implements IAppUtil {
    title = 'admin';
    server = {
      local: 'http://localhost:1337/api/',
      prod: 'http://localhost:1337/api/'
    };

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

    buildTemplateUrl = (url: string): string => {
      return 'app/views/' + url;
    };

    joinPath = (segments: string[]): string => {
      return segments.join('/');
    };
  }

  angular.module('<%= prompts.prefix %>.core.util.Util', []).service(ID.AppUtil, AppUtil);
}
