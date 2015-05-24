/// <reference path="../../../typings/tsd.d.ts"/>

module App.Logger {
  'use strict';

  export interface ILoggerFactory {
    /**
     * Get the logger for the given name.
     */
    (name: string): Logger;
  }

  export class Logger {
    constructor(private $log: angular.ILogService, private appUtil: Util.AppUtil, public name: string) {
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

    private log(type: string, text: string | Object | any[], object?: any) {
      if (this.appUtil.getEnvironment() !== 'prod') {

        if (_.isObject(text) || _.isArray(text)) {
          object = text;
          text = undefined;
        }

        text = text || '';

        if (_.isBoolean(object)) {
          object = (object) ? 'YES' : 'NO';
        }

        object = object || '';

        const arrow = (text !== '' || object !== '') ? '=> ' : '';
        this.$log[type]('[' + getTimestamp() + ' - ' + this.name + '] ' + arrow + text, object);
      }
    }
  }

  export const ID = {
    LoggerFactory: 'loggerService'
  }

  angular
    .module('app.logger', [])
    .factory(ID.LoggerFactory, loggerService);
  
  loggerService.$inject = ['$log', Util.AppUtil.ID];
  function loggerService($log: angular.ILogService, appUtil: Util.AppUtil): ILoggerFactory {
    return name => new Logger($log, appUtil, name);
  }

  function getTimestamp() {
    return moment().format('HH:mm:ss.ms');
  }
}