/// <reference path="../../../../typings/tsd.d.ts"/>

/**
 * Event bus. Use this class to register events and trigger them from anywhere.
 */
namespace <%= prompts.prefix %>.core.util {
  'use strict';

  export interface IAppEvents {
    /**
     * Returns all registered event callbacks.
     */
    list(): { [event: string]: IEventCallback[] };

    /**
     * Register a callback for the given events. Returns
     * a disposal function that unregisters the callback
     * when called.
     */
    on(event: string, callback: IEventCallback): () => boolean;

    /**
     * Invoke all callbacks registered for the given event with
     * the given data. Returns the number of callbacks invoked.
     */
    trigger(event: string, eventObject?: any): number;
  }

  export interface IEventCallback {
    (eventObj?: any): void;
  }

  class AppEvents implements IAppEvents {
    private eventCallbacks: { [event: string]: IEventCallback[] };

    constructor() {
      this.eventCallbacks = {};
    }

    list = () => {
      return this.eventCallbacks;
    };

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
    };

    trigger = (event: string, eventObject?: any) => {
      var callbacks = this.eventCallbacks[event] || [];
      callbacks.forEach(cb => cb(eventObject));
      return callbacks.length;
    };
  }

  angular.module(ID.AppEvents, []).service(ID.AppEvents, AppEvents);
}
