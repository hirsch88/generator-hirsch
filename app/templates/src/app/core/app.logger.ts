/// <reference path="../../../typings/tsd.d.ts"/>

declare module App.Core.Logger {
  interface ILoggerService {
    (name: string): ILogger;
  }

  interface ILogger {
    info(text: string | Object | any[], object: any): void;
    warn(text: string | Object | any[], object: any): void;
    error(text: string | Object | any[], object: any): void;
  }
}

(function () {
  'use strict';

  angular
    .module('app.logger', [])
    .factory('logger', loggerService);

  /**
   * @name logger
   */
  function loggerService($log: angular.ILogService) {

    function Logger(name) {
      this.name = name;
    }

    Logger.prototype.info = function (text: string | Object | any[], object: any) {
      this._log('info', text, object);
    };

    Logger.prototype.warn = function (text: string | Object | any[], object: any) {
      this._log('warn', text, object);
    };

    Logger.prototype.error = function (text: string | Object | any[], object: any) {
      this._log('error', text, object);
    };

    Logger.prototype._log = function (type: string, text: string | Object | any[], object: any) {
      if (AppUtil.getEnvironment() !== 'prod') {

        object = (_.isObject(text) || _.isArray(text))
          ? text
          : object;

        text = (_.isObject(text) || _.isArray(text))
          ? undefined
          : text;

        text = text || '';

        if (_.isBoolean(object)) {
          object = (object) ? 'YES' : 'NO';
        }

        object = object || '';

        var arrow = (text !== '' || object !== '') ? '=> ' : '';
        $log[type]('[' + getTimestamp() + ' - ' + this.name + '] ' + arrow + text, object);
      }
    };

    ////////////////////////////////////

    return function (name) {
      return new Logger(name);
    };

    function getTimestamp() {
      return moment().format('HH:mm:ss.ms');
    }
  }
}());
