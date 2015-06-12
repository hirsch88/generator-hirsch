/// <reference path="../../../../typings/tsd.d.ts"/>

module <%= prompts.prefix %>.home.views {
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

  class HomeController extends common.views.AbstractController implements IHomeController {
    private offs: Function[] = [];

    title = 'Hirsch says hi!';

    static $inject = ['$state', core.util.ID.AppEvents];
    constructor($state, events: core.util.IAppEvents) {
      super($state);

      this.offs.push(events.on('someEvent', this.onSomeEvent));

      this.activate();
    }

    private onSomeEvent = (eventObj: any) => {
      // TODO: handle event
    };

    private activate = () => {
      // run initialization logic
    };

    protected dispose() {
      super.dispose();
      this.offs.forEach(off => off());
    }
  }

  angular
    .module(`${Namespace}.Home`, [])
    .config(stateConfig)
    .controller(ID.HomeController, HomeController);
}
