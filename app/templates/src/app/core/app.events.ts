/// <reference path="../../../typings/tsd.d.ts"/>

interface IEventCallback {
  (eventObj): void;
}

type EventCallbackArray = Array<{ name: string; func: IEventCallback; }>;

/**
 * @memberOf app
 * @namespace app.events
 *
 * @description
 * Event bus. Use this class to register events and trigger them from anywhere
 * All events must have name, but if there is no name give by the callback function name
 * we use the name anonymous for the callback function.
 *
 */
(function (window) {
  'use strict';

  /**
   * @global
   * @name AppEvents
   * @see app.events
   */
  function AppEvents() {
    this.eventCallbacks = {};
  }

  AppEvents.prototype.list = function () {
    return this.eventCallbacks;
  };

  /**
   * @name on
   * @param event
   * @param callback
   */
  AppEvents.prototype.on = function (event: string, callback: IEventCallback) {
    var callbacks = <EventCallbackArray>this.eventCallbacks[event] || (this.eventCallbacks[event] = []);
    var name = AppUtil.getFunctionName(callback) || 'anonymous';
    var index = _.findIndex(callbacks, { name: name });

    if (index === -1) {
      callbacks.push({
        name: name,
        func: callback
      });
    } else {
      callbacks[index].func = callback;
    }
  };

  /**
   * @name off
   * @param event
   * @param callback
   */
  AppEvents.prototype.off = function (event: string, callback: IEventCallback) {
    var callbacks = <EventCallbackArray>this.eventCallbacks[event];
    if (_.isUndefined(callbacks)) {
      return;
    }

    var name = AppUtil.getFunctionName(callback) || 'anonymous';
    var index = _.findIndex(callbacks, { name: name });
    if (index >= 0) {
      callbacks.splice(index, 1);
    }

    if (callbacks.length === 0) {
      delete this.eventCallbacks[event];
    }
  };

  /**
   * @name trigger
   * @param event
   * @param eventObject
   */
  AppEvents.prototype.trigger = function (event: string, eventObject) {
    var callbacks = <EventCallbackArray>this.eventCallbacks[event];
    if (_.isArray(callbacks)) {
      for (var i = 0; i < callbacks.length; i++) {
        callbacks[i].func(eventObject);
      }
    }
  };

  ///////////////////////////////////////////

  window.AppEvents = new AppEvents();

}(window));
