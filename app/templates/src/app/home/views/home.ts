/// <reference path="../../../../typings/tsd.d.ts"/>

module App.Home {
  'use strict';

  angular
    .module('home.views.home',[

    ])
    .config(StateConfig);

  function StateConfig($stateProvider: angular.ui.IStateProvider) {
    $stateProvider
      .state('admin.home', {
        url:           '/home',
        session:       true,
        navigationKey: 'home',
        views:         {
          'content': {
            templateUrl:  'app/home/views/home.html',
            controller: HomeController,
            controllerAs: 'vm'
          }
        }
      });
  }

  class HomeController {
    private title: string;
    private buildFullName: (member: Common.Services.IMember) => string;
    private list: Common.Services.IMember[];

    static $inject = [Util.AppUtil.ID, Common.Services.MembersService.ID];
    constructor(appUtil: Util.AppUtil, private membersService: Common.Services.MembersService) {
      this.title = appUtil.title;
      this.buildFullName = this.membersService.getFullName;

      this.activate();
    }

    activate = () => {
      this.membersService.get().then(list => this.list = list);
    };
  }
}
