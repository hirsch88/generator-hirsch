/// <reference path="../../../../<%= typingNesting %>typings/tsd.d.ts"/>

namespace <%= prefix %>.<%= module %>.<%= $namespace %> {
  'use strict';

  const stateConfig = ($stateProvider: ng.ui.IStateProvider) => {
    $stateProvider
      .state('root.<%= module %><%= classedName %>', {
        url: '/<%= url %>',
        views: {
          'content': {
            templateUrl: '<%= templateUrl %>',
            controller: ID.<%= classedName %>Controller,
            controllerAs: 'vm'
          }
        }
      });
  };

  stateConfig.$inject = ['$stateProvider'];

  export class <%= classedName %>Controller {
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
    .module(`${Namespace}.<%= classedName %>`, [
      'ui.router.state'  
    ])
    .config(stateConfig)
    .controller(ID.<%= classedName %>Controller, <%= classedName %>Controller);
}
