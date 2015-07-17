/// <reference path="../../../../typings/tsd.d.ts"/>

/**
 *  Extension for 3rd party type definition file.
 */
declare module angular.ui {
  interface IState {
    includes?(name: string): void;
  }
}

module <%= prompts.prefix %>.core.router {

  // this variable is to prevent an issue with the default routes;
  // if the initial request to the application is for an invalid route
  // the default route rule triggers multiple times (once during a state
  // transition). This causes the actual state transition to be superseded.
  // By capturing a variable inside the module scope, we can make the
  // default route handler ignore invalid route requests during routing
  var stateChangeCountingSemaphore = 0;
  var checkSemaphore = (fn: () => string) => stateChangeCountingSemaphore > 0 ? undefined : fn();

  var routerConfig = ($urlRouterProvider: ng.ui.IUrlRouterProvider, $stateProvider: ng.ui.IStateProvider) => {
    $urlRouterProvider.otherwise(() => checkSemaphore(() => `/home`));

    // We decorate the 'includes' to extract all states that would match
    // a $state.includes() test for each state, and extend the state
    // object with a function that can be used to check whether a given
    // state is included in the list. This is then used inside the router
    // pipeline to check whether a given middleware is applicable for a
    // routing request
    $stateProvider.decorator('includes', (state, parent): any => {
      var result = parent(state);
      var includeNames = Object.keys(result);

      // state is actually a wrapper object, so we unwrap it
      state = state['self'];

      state.includes = name => includeNames.some(s => s === name);

      return result;
    });
  };

  routerConfig.$inject = ['$urlRouterProvider', '$stateProvider'];

  var run = ($rootScope: ng.IRootScopeService, routerService: IRouterService) => {
    $rootScope.$on('$stateChangeStart', (evt, ...rest: any[]) => {
      stateChangeCountingSemaphore += 1;
      rest.unshift(evt.preventDefault.bind(evt));
      routerService.startPipeline.apply(null, rest).finally(() => stateChangeCountingSemaphore -= 1);
    });
  };

  run.$inject = ['$rootScope', ID.RouterService];

  angular
    .module(`${Namespace}.RouterConfig`, [])
    .config(routerConfig)
    .run(run);
}
