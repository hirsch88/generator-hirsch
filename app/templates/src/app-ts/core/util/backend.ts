/// <reference path="../../../../typings/tsd.d.ts" />

module <%= prompts.prefix %>.core.util {
  'use strict';

  export interface IBackend {
    url: string;
    get<T>(url: string, config?: ng.IRequestShortcutConfig): ng.IPromise<T>;
    delete<T>(url: string, config?: ng.IRequestShortcutConfig): ng.IPromise<T>;
    post<T>(url: string, data: any, config?: ng.IRequestShortcutConfig): ng.IPromise<T>;
    put<T>(url: string, data: any, config?: ng.IRequestShortcutConfig): ng.IPromise<T>;
    withConfig(config: IBackendConfig): IBackend;
  }

  export interface IBackendConfig {
    baseUrl?: string;
  }

  class Backend implements IBackend {
    static $inject = ['$http', config.ID.AppConfig];
    constructor(private $http: ng.IHttpService, private appConfig: config.IAppConfig) {
    }

    get = <T>(url: string, config?: ng.IRequestShortcutConfig) => this.unwrap(this.$http.get(this.prefix(url), this.headers(config)));
    delete = <T>(url: string, config?: ng.IRequestShortcutConfig) => this.unwrap(this.$http.delete(this.prefix(url), this.headers(config)));
    post = <T>(url: string, data, config?: ng.IRequestShortcutConfig) => this.unwrap(this.$http.post(this.prefix(url), data, this.headers(config)));
    put = <T>(url: string, data, config?: ng.IRequestShortcutConfig) => this.unwrap(this.$http.put(this.prefix(url), data, this.headers(config)));

    withConfig = (config: IBackendConfig) => new ConfiguredBackend(this, config);

    get url() { return `${this.appConfig.backendUrl}`; }

    private prefix = (url: string) => `${this.appConfig.backendUrl}${url}`;
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

  class ConfiguredBackend implements IBackend {

    constructor(private backend: IBackend, private config: IBackendConfig) { }

    get = <T>(url: string, config?: ng.IRequestShortcutConfig) => this.backend.get(this.prefix(url), config);
    delete = <T>(url: string, config?: ng.IRequestShortcutConfig) => this.backend.delete(this.prefix(url), config);
    post = <T>(url: string, data, config?: ng.IRequestShortcutConfig) => this.backend.post(this.prefix(url), data, config);
    put = <T>(url: string, data, config?: ng.IRequestShortcutConfig) => this.backend.put(this.prefix(url), data, config);

    // TODO: combine configs
    withConfig = (config: IBackendConfig) => new ConfiguredBackend(this, config);

    get url() { return `${this.backend.url}${this.config.baseUrl}`; }

    private prefix = (url: string) => `${this.config.baseUrl}${url}`;
  }

  angular
    .module(ID.Backend, [
      config.ID.AppConfig
    ])
    .service(ID.Backend, Backend);
}
