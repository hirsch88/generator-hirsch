(function () {
  'use strict';

  angular
    .module('<%= prompts.prefix %>.home')
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
            templateUrl:  'app/home/views/home.html',
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

}());
