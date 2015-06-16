app.core.util.Logger = (function (module) {
  'use strict';

  angular
    .module(module.ID, [
      app.core.constants.Environment.ID
    ])
    .factory('Logger', LoggerService);

  function LoggerService($log, myEnvironment) {

    function Logger(name) {
      this.name = name;
    }

    Logger.prototype.info = function (text, object) {
      this._log('info', text, object);
    };

    Logger.prototype.warn = function (text, object) {
      this._log('warn', text, object);
    };

    Logger.prototype.error = function (text, object) {
      this._log('error', text, object);
    };

    Logger.prototype._log = function (type, text, object) {
      if (myEnvironment.getCurrent() !== 'prod') {

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

    return function (options) {
      return new Logger(options);
    };

    function getTimestamp() {
      return moment().format('HH:mm:ss.ms');
    }

  }

  return module;

}(app.core.util.add('Logger')));
