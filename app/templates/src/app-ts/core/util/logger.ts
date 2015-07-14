/// <reference path="../../../../typings/tsd.d.ts"/>

/**
 * Extend global function interface with ES6 name property.
 */
interface Function {
  name?: string;
}

module <%= prompts.prefix %>.core.util {
  'use strict';

  export interface ILoggerFactory {
    /**
     * Get the logger for the given name.
     */
    (name: string): ILogger;

    /**
     * Get a logger for the given object. The name of the logger is inferred
     * from the name of the constructor function if it is supported by the
     * browser.
     */
    (obj: Object): ILogger;

    /**
     * Get a logger for the given function. The name of the logger is inferred
     * from the name of the function if it is supported by the browser.
     */
    (obj: Function): ILogger;
  }

  export interface ILogger {
    debug(text: string | Object | any[], object?: any);
    info(text: string | Object | any[], object?: any);
    warn(text: string | Object | any[], object?: any);
    error(text: string | Object | any[], object?: any);
  }

  export class Logger {
    constructor(
      private $log: angular.ILogService,
      private dateFormatter: (date: Date, format?: string) => string,
      private config: constants.IAppConfig,
      public name: string) {
    }

    debug(text: string | Object | any[], object?: any) {
      this.log('debug', text, object);
    }

    info(text: string | Object | any[], object?: any) {
      this.log('info', text, object);
    }

    warn(text: string | Object | any[], object?: any) {
      this.log('warn', text, object);
    }

    error(text: string | Object | any[], object?: any) {
      this.log('error', text, object);
    }

    private log = (type: string, text: string | Object | any[], object?: any) => {
      if (this.config.ENVIRONMENT !== 'prod') {

        if (angular.isObject(text) || angular.isArray(text)) {
          object = text;
          text = undefined;
        }

        text = text || '';
        
        if (object === true || object === false) {
          object = (object) ? 'YES' : 'NO';
        }

        object = object || '';

        var arrow = (text !== '' || object !== '') ? '=> ' : '';
        this.$log[type](`[${this.dateFormatter(new Date(), 'HH:mm:ss.sss')} - ${this.name}] ${arrow}${text}`, object);
      }
    };
  }

  var loggerService = ($log, $filter, appConfig: constants.IAppConfig): ILoggerFactory => (obj: string | Object | Function) => {
    var name: string;
    if (angular.isObject(obj) && obj.constructor && obj.constructor.name) {
      name = obj.constructor.name;
    } else if (angular.isFunction(obj) && (<Function>obj).name) {
      name = (<Function>obj).name;
    } else {
      name = <string>obj || '';
    }

    return new Logger($log, $filter('date'), appConfig, name);
  };

  loggerService.$inject = ['$log', '$filter'];

  angular
    .module(ID.LoggerFactory, [
      constants.Namespace
    ])
    .factory(ID.LoggerFactory, loggerService);
}
