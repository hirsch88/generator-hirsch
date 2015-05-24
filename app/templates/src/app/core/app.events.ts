/// <reference path="../../../typings/tsd.d.ts"/>

declare module App.Core.Events {
}

/**
 * Event bus. Use this class to register events and trigger them from anywhere
 * All events must have name, but if there is no name give by the callback function name
 * we use the name anonymous for the callback function.
 */
module App.Events {
  'use strict';

  export interface IEventCallback {
    (eventObj): void;
  }

  export interface IEventCallbackRegistration {
    name: string;
    func: IEventCallback;
  }

  export interface IEventCallbacks {
    [event: string]: IEventCallbackRegistration[]
  }

  export class AppEvents {
    private eventCallbacks: IEventCallbacks;

    constructor() {
      this.eventCallbacks = {};
    }

    list() {
      return this.eventCallbacks;
    }

    on = (event: string, callback: IEventCallback) => {
      var callbacks = this.eventCallbacks[event] || (this.eventCallbacks[event] = []);
      var name = AppUtil.getFunctionName(callback, 'anonymous');
      var index = _.findIndex(callbacks, { name: name });

      if (index === -1) {
        callbacks.push({
          name: name,
          func: callback
        });
      } else {
        callbacks[index].func = callback;
      }
    }

    off = (event: string, callback: IEventCallback) => {
      var callbacks = this.eventCallbacks[event];
      if (_.isUndefined(callbacks)) {
        return;
      }

      var name = AppUtil.getFunctionName(callback, 'anonymous');
      var index = _.findIndex(callbacks, { name: name });
      if (index >= 0) {
        callbacks.splice(index, 1);
      }

      if (callbacks.length === 0) {
        delete this.eventCallbacks[event];
      }
    }

    trigger = (event: string, eventObject: any) => {
      var callbacks = this.eventCallbacks[event];
      if (_.isArray(callbacks)) {
        for (var i = 0; i < callbacks.length; i++) {
          callbacks[i].func(eventObject);
        }
      }
    }
  }

  export const ID = {
    AppEvents: 'AppEvents'
  };

  angular.module('app.events', []).service(ID.AppEvents, AppEvents);
}