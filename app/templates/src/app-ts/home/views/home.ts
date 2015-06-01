/// <reference path="../../../../typings/tsd.d.ts"/>

module <%= prompts.prefix %>.home.views {
  'use strict';

  angular
    .module('<%= prompts.prefix %>.home.views.Home', [])
    .config(StateConfig);

  function StateConfig($stateProvider: ng.ui.IStateProvider) {
    $stateProvider
      .state('admin.home', {
        url:           '/home',
        session:       true,
        navigationKey: 'home',
        views:         {
          'content': {
            templateUrl:  'app/home/views/home.html',
            controller: HomeController,
            controllerAs: 'home'
          }
        }
      });
  }

  interface IHomeViewModel {
    title: string;
  }

  class HomeController implements IHomeViewModel {
    title = 'Hirsch says hi!';

    static $inject = [];
    constructor() {
      this.activate();
    }

    activate = () => {
      // run initialization logic
    };
  }
}
