/// <reference path="../../../../typings/tsd.d.ts" />

module <%= prompts.prefix %>.core.config {
  'use strict';

  export interface IAppConfig {
    /**
     * The title of the app.
     */
    title: string;

    /**
     *  Returns the backend url for the right environemnt.
     *  To get the environment, we anlyse the url from our borwser.
     */
    backendUrl: string;

    /**
     * Returns which environment the app is currently running in.
     */
    environment: string;
  }

  angular.module(`${Namespace}.Config`, [])
    .constant(ID.AppConfig, {});
}
