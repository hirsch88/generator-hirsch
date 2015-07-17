/// <reference path="../../../../typings/tsd.d.ts" />

module <%= prompts.prefix %>.core.util {
  'use strict';

  export interface IBackend {
    url: string;
    get<T>(url: string, config?: ng.IRequestShortcutConfig): ng.IPromise<T>;
    delete<T>(url: string, config?: ng.IRequestShortcutConfig): ng.IPromise<T>;
    post<T>(url: string, data: any, config?: ng.IRequestShortcutConfig): ng.IPromise<T>;
    put<T>(url: string, data: any, config?: ng.IRequestShortcutConfig): ng.IPromise<T>;
  }

  class Backend implements IBackend {
    static $inject = ['$http', constants.ID.AppConfig];
    constructor(private $http: ng.IHttpService, private appConfig: constants.IAppConfig) {
    }

    get = <T>(url: string, config?: ng.IRequestShortcutConfig) => this.unwrap(this.$http.get(this.prefix(url), this.headers(config)));
    delete = <T>(url: string, config?: ng.IRequestShortcutConfig) => this.unwrap(this.$http.delete(this.prefix(url), this.headers(config)));
    post = <T>(url: string, data, config?: ng.IRequestShortcutConfig) => this.unwrap(this.$http.post(this.prefix(url), data, this.headers(config)));
    put = <T>(url: string, data, config?: ng.IRequestShortcutConfig) => this.unwrap(this.$http.put(this.prefix(url), data, this.headers(config)));

    get url() { return `${this.appConfig.BASE_URL}`; }

    private prefix = (url: string) => `${this.appConfig.BASE_URL}${url}`;
    private headers = (config?: ng.IRequestShortcutConfig) => {
      config = config || {};
      config.headers = config.headers || {};
      config.headers.Accept = 'application/json';
      return config;
    };

    private unwrap<TResponse>(p: ng.IHttpPromise<TResponse>) {
      return p.then(resp => resp.data);
    }
  }

  angular
    .module(ID.Backend, [
      constants.Namespace
    ])
    .service(ID.Backend, Backend);
}
