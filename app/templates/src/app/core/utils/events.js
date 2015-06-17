(function () {
  'use strict';

  angular
    .module('<%= prompts.prefix %>.core.utils.Events', [])
    .factory('events', EventsService);

  function EventsService() {
    var stack = {};

    return {
      on:        on,
      off:       off,
      broadcast: broadcast
    };
    /////////////////////////////////

    function on(eventKey, fn) {
      var callbacks = stack[eventKey] || (stack[eventKey] = []);
      callbacks.push(fn);
      return callbacks.indexOf(fn);
    }

    function off(eventKey, index) {
      try {
        if (eventKey && index) {
          stack[eventKey][index] = undefined;
        } else if (eventKey) {
          delete stack[eventKey];
        }
      } catch (err) {

      }
    }

    function broadcast(eventKey, options) {
      var callbacks = stack[eventKey];
      if (callbacks && callbacks.length > 0) {
        callbacks.forEach(function (fn) {
          if (typeof fn === 'function') {
            fn(options);
          }
        });
      }
    }

  }

}());
