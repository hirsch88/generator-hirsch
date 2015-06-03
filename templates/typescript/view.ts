/// <reference path="../../../../typings/tsd.d.ts"/>

module <%= prefix %>.<%= module %>.views {
  'use strict';
  
  var off;
  var onEnter = (events: core.util.IAppEvents) => {
    off = events.on('someEvent', evtObj => {
      // TODO: handle event
    });
  };

  onEnter.$inject = [core.util.ID.AppEvents];

  var onExit = () => {
    off();
  };

  var stateConfig = ($stateProvider: ng.ui.IStateProvider) => {
    $stateProvider
      .state('admin.<%= module %><%= classedName %>', {
        url: '/<%= url %>',
        session: true,
        navigationKey: '<%= module %>',
        views: {
          'content': {
            templateUrl: '<%= templateUrl %>',
            controller: ID.<%= classedName %>Controller,
            controllerAs: '<%= cameledName %>'
          }
        },
        onEnter: onEnter,
        onExit: onExit
      });
  };

  stateConfig.$inject = ['$stateProvider'];

  export interface I<%= classedName %>Controller {
    prop: string;
    asyncProp: string[];
    method: (param: string) => string;
    action: () => void;
  }

  class <%= classedName %>Controller implements I<%= classedName %>Controller {
    prop: string;
    asyncProp: string[];

    static $inject = [];
    constructor() {
      this.prop = '';
      this.asyncProp = [];

      this.activate();
    }

    method = (param: string) => {
      return param;
    };

    action = () => {
      // TODO: perform some action
    };

    activate = () => {
      // TODO: call some service to asynchronously return data
      // this.someService.getData().then(data => this.asyncProp = data);
    };
  }

  angular
    .module('<%= prefix %>.<%= module %>.views.<%= classedName %>', [])
    .config(stateConfig)
    .controller(ID.<%= classedName %>Controller, <%= classedName %>Controller);
}
