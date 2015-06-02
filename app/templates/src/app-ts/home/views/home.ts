/// <reference path="../../../../typings/tsd.d.ts"/>

module <%= prompts.prefix %>.home.views {
  'use strict';

  function StateConfig($stateProvider: ng.ui.IStateProvider) {
    $stateProvider
      .state('admin.home', {
        url:           '/home',
        session:       true,
        navigationKey: 'home',
        views:         {
          'content': {
            templateUrl:  'app/home/views/home.html',
            controller:   ID.HomeController,
            controllerAs: 'home'
          }
        },
        onEnter: onEnter,
        onExit: onExit
      });
  }

  var off;
  onEnter.$inject = [core.util.ID.AppEvents];
  function onEnter(events) {
    off = events.on('someEvent', evtObj => {
      // TODO: handle event
    });
  }

  function onExit() {
    off();
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

    private activate = () => {
      // run initialization logic
    };
  }

  angular
    .module('<%= prompts.prefix %>.home.views.Home', [])
    .config(StateConfig)
    .controller(ID.HomeController, HomeController);
}
