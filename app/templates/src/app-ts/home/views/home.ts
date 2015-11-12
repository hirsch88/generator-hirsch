/// <reference path="../../../../typings/tsd.d.ts"/>

namespace <%= prompts.prefix %>.home.views {
  'use strict';

  var stateConfig = ($stateProvider: ng.ui.IStateProvider) => {
    $stateProvider
      .state('admin.home', {
        url: '/home',
        navigationKey: 'home',
        views: {
          'content': {
            templateUrl: 'app/home/views/home.html',
            controller: ID.HomeController,
            controllerAs: 'home'
          }
        }
      });
  };

  stateConfig.$inject = ['$stateProvider'];

  export interface IHomeController {
    title: string;
  }

  class HomeController implements IHomeController {
    private offs: Function[] = [];

    title = 'Hirsch says hi!';

    static $inject = ['$scope', core.util.ID.AppEvents];
    constructor($scope, events: core.util.IAppEvents) {
      this.offs.push(events.on('someEvent', this.onSomeEvent));

      $scope.$on('$destroy', () => this.dispose());

      this.activate();
    }

    private onSomeEvent = (eventObj: any) => {
      // TODO: handle event
    };

    private activate = () => {
      // run initialization logic
    };

    private dispose() {
      this.offs.forEach(off => off());
    }
  }

  angular
    .module(`${Namespace}.Home`, [])
    .config(stateConfig)
    .controller(ID.HomeController, HomeController);
}
