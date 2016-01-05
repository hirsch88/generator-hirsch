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
    public prop: string;
    public asyncProp: ng.IPromise<string[]>;

    public static $inject = [];
    constructor() {
      this.prop = '';

      this.activate();
    }

    public method = (param: string) => {
      return param;
    };

    public action = () => {
      // TODO: perform some action
    };

    private activate = () => {
      // TODO: call some service to asynchronously return data
      // this.asyncProp = this.someService.getData();
    };
  }

  angular
    .module(`${NAMESPACE}.<%= classedName %>`, [
      'ui.router.state'
    ])
    .config(stateConfig)
    .controller(ID.<%= classedName %>Controller, <%= classedName %>Controller);
}
