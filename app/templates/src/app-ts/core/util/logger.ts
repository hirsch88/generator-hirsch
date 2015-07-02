/// <reference path="../../../../typings/tsd.d.ts"/>

module <%= prompts.prefix %>.core.util {
  'use strict';

  var loggerService = ($log, _, moment, appConfig): ILoggerFactory => {
    return name => new Logger($log, _, moment, appConfig, name);
  };

  loggerService.$inject = ['$log', constants.ID.lodash, constants.ID.moment, constants.ID.AppConfig];

  export interface ILoggerFactory {
    /**
     * Get the logger for the given name.
     */
    (name: string): Logger;
  }

  // TODO: rewrite as angular decorator on top of $log
  export class Logger {
    constructor(
      private $log: angular.ILogService,
      private _: _.LoDashStatic,
      private moment: moment.MomentStatic,
      private config: constants.IAppConfig,
      public name: string) {
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
      if (this.config.environment !== 'production') {

        if (this._.isObject(text) || this._.isArray(text)) {
          object = text;
          text = undefined;
        }

        text = text || '';

        if (this._.isBoolean(object)) {
          object = (object) ? 'YES' : 'NO';
        }

        object = object || '';

        var arrow = (text !== '' || object !== '') ? '=> ' : '';
        this.$log[type]('[' + this.moment().format('HH:mm:ss.ms') + ' - ' + this.name + '] ' + arrow + text, object);
      }
    }
  }

  angular
    .module(ID.LoggerFactory, [])
    .factory(ID.LoggerFactory, loggerService);
}
