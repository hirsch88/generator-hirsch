/// <reference path="../../../typings/tsd.d.ts"/>

/**
 * Event bus. Use this class to register events and trigger them from anywhere.
 */
module App.Events {
  'use strict';

  export interface IEventCallback {
    (eventObj): void;
  }

  export class AppEvents {
    private eventCallbacks: { [event: string]: IEventCallback[] };

    static ID = 'AppEvents';
    constructor() {
      this.eventCallbacks = {};
    }

    list = () => {
      return this.eventCallbacks;
    }

    /**
     * Register a callback for the given events. Returns
     * a disposal function that unregisters the callback
     * when called.
     */
    on = (event: string, callback: IEventCallback) => {
      var callbacks = this.eventCallbacks[event] || (this.eventCallbacks[event] = []);
      callbacks.push(callback);

      return () => {
        var idx = callbacks.indexOf(callback);
        if (idx >= 0) {
          callbacks.splice(idx, 1);
        }

        if (callbacks.length === 0) {
          delete this.eventCallbacks[event];
        }

        return idx >= 0;
      };
    }

    trigger = (event: string, eventObject: any) => {
      var callbacks = this.eventCallbacks[event] || [];
      callbacks.forEach(cb => cb(eventObject));
    }
  }

  angular.module('app.events', []).service(AppEvents.ID, AppEvents);
}