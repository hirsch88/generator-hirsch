/// <reference path="../../../../typings/tsd.d.ts"/>

module <%= prefix %>.<%= module %>.views {
  'use strict';

  var stateConfig = ($stateProvider: ng.ui.IStateProvider) => {
    $stateProvider
      .state('admin.<%= module %><%= classedName %>', {
        url: '/<%= url %>',
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
    asyncProp: ng.IPromise<string[]>;
    method(param: string): string;
    action(): void;
  }

  class <%= classedName %>Controller implements I<%= classedName %>Controller {
    prop: string;
    asyncProp: ng.IPromise<string[]>;
  
    static $inject = [];
    constructor() {
      this.prop = '';

      this.activate();
    }

    method = (param: string) => {
      return param;
    };

    action = () => {
      // TODO: perform some action
    };

    private activate = () => {
      // TODO: call some service to asynchronously return data
      // this.asyncProp = this.someService.getData();
    };
  }

  angular
    .module(`${Namespace}.<%= classedName %>`, [])
    .config(stateConfig)
    .controller(ID.<%= classedName %>Controller, <%= classedName %>Controller);
}
