/// <reference path="../../../../typings/tsd.d.ts"/>

module <%= prompts.prefix %>.core.router {

  export interface IRouterService {
    isInitialized: boolean;
    initialize(): ng.IPromise<any>;
  }

  class RouterService implements IRouterService {
    private initializing = false;
    private initialized = false;
    private deferredInit: ng.IDeferred<any>;
    private log: util.Logger;

    static $inject = ['$q', util.ID.LoggerFactory];
    constructor($q: ng.IQService, loggerFactory: util.ILoggerFactory) {
      this.log = loggerFactory('AppRouterService');
      this.deferredInit = $q.defer();
      this.deferredInit.promise.then(() => this.initialized = true);
    }

    get isInitialized() {
      return this.initialized;
    }

    /**
     * Here we will load some initial data for the application like the active event, but
     * only at the first run.
     */
    initialize = (): ng.IPromise<any> => {
      if (this.initializing || this.initialized) {
        return this.deferredInit.promise;
      }

      this.initializing = true;

      // TODO: load initial data
      this.log.info('loadInitialData');
      this.deferredInit.resolve();

      return this.deferredInit.promise;
    };
  }

  angular
    .module(ID.RouterService, [])
    .service(ID.RouterService, RouterService);
}
