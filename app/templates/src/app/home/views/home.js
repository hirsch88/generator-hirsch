app.home.views.Home = (function (module) {
  'use strict';

  angular
    .module(module.ID, [
    ])
    .config(StateConfig)
    .controller('homeController', HomeController);

  function StateConfig($stateProvider) {
    $stateProvider
      .state('public.home', {
        url:           '/home',
        session:       true,
        navigationKey: 'home',
        views:         {
          'content': {
            templateUrl:  module.templateUrl(),
            controller:   'homeController',
            controllerAs: 'home'
          }
        }

      });
  }

  function HomeController() {
    var vm = this;
    vm.title = 'Hirsch says hi!';

    // Your code goes here...

  }

  return module;

}(app.home.views.add('Home')));
