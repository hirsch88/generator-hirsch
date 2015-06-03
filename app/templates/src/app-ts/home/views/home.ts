/// <reference path="../../../../typings/tsd.d.ts"/>

module <%= prompts.prefix %>.home.views {
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
      .state('admin.home', {
        url: '/home',
        session: true,
        navigationKey: 'home',
        views: {
          'content': {
            templateUrl: 'app/home/views/home.html',
            controller: ID.HomeController,
            controllerAs: 'home'
          }
        },
        onEnter: onEnter,
        onExit: onExit
      });
  };

  stateConfig.$inject = ['$stateProvider'];

  export interface IHomeViewModel {
    title: string;
  }

  class HomeController implements IHomeViewModel {
    title = 'Hirsch says hi!';

    static $inject = [];
    constructor() {
      this.activate();
    }

    private activate = () => {
      // run initialization logic
    };
  }

  angular
    .module('<%= prompts.prefix %>.home.views.Home', [])
    .config(stateConfig)
    .controller(ID.HomeController, HomeController);
}
