/// <reference path="../../../../typings/tsd.d.ts"/>

module <%= prefix %>.<%= module %>.views {
  'use strict';

  function StateConfig($stateProvider: ng.ui.IStateProvider) {
    $stateProvider
      .state('admin.<%= module %><%= classedName %>', {
        url:           '/<%= url %>',
        session:       true,
        navigationKey: '<%= module %>',
        views:         {
          'content': {
            templateUrl:  '<%= templateUrl %>',
            controller:   ID.<%= classedName %>Controller,
            controllerAs: '<%= cameledName %>'
          }
        }
      });
  }

  interface I<%= classedName %>ViewModel {
    prop: string;
    asyncProp: string[];
    method: () => string;
  }

  class <%= classedName %>Controller implements I<%= classedName %>ViewModel {
    prop: string;
    asyncProp: string[];

    static $inject = [];
    constructor() {
      this.prop = '';

      this.activate();
    }

    method = () => {
      return '';
    };

    activate = () => {
      // TODO: call some service to asynchronously return data
      // this.someService.getData().then(data => this.asyncProp = data);
    };
  }

  angular
    .module('<%= prefix %>.<%= module %>.views.<%= classedName %>', [])
    .config(StateConfig)
    .controller(ID.<%= classedName %>Controller, <%= classedName %>Controller);
}
