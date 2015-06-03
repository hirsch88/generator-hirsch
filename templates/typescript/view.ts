/// <reference path="../../../../typings/tsd.d.ts"/>

module <%= prefix %>.<%= module %>.views {
  'use strict';

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
        }
      });
  };

  stateConfig.$inject = ['$stateProvider'];

  export interface I<%= classedName %>Controller {
    prop: string;
    asyncProp: string[];
    method(param: string): string;
    action(): void;
  }

  class <%= classedName %>Controller extends common.views.AbstractController implements I<%= classedName %>Controller {
    private offs: Function[] = [];

    prop: string;
    asyncProp: string[];
  
    static $inject = ['$state', core.util.ID.AppEvents];
    constructor($state, events: core.util.IAppEvents) {
      super($state);

      this.prop = '';
      this.asyncProp = [];

      this.offs.push(events.on('someEvent', this.onSomeEvent));

      this.activate();
    }

    method = (param: string) => {
      return param;
    };

    action = () => {
      // TODO: perform some action
    };

    private onSomeEvent = (eventObj: any) => {
      // TODO: handle event
    };

    private activate = () => {
      // TODO: call some service to asynchronously return data
      // this.someService.getData().then(data => this.asyncProp = data);
    };

    protected dispose() {
      super.dispose();
      this.offs.forEach(off => off());
    }
  }

  angular
    .module('<%= prefix %>.<%= module %>.views.<%= classedName %>', [])
    .config(stateConfig)
    .controller(ID.<%= classedName %>Controller, <%= classedName %>Controller);
}
