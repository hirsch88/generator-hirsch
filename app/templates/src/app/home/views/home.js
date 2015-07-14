(function () {
  'use strict';

  angular
    .module('<%= prompts.prefix %>.home.views.Home', [])
    .config(StateConfig)
    .controller('homeController', HomeController);

  function StateConfig($stateProvider) {
    $stateProvider
      .state('admin.home', {
        url:           '/home',
        session:       true,
        navigationKey: 'home',
        views:         {
          'content': {
            templateUrl:  util.templateUrl('<%= prompts.prefix %>.home.views.Home'),
            controller:   'homeController',
            controllerAs: 'home'
          }
        }

      });
  }

  function HomeController(Logger) {
    var log = new Logger('<%= prompts.prefix %>.home.views.Home');
    var vm = this;
    vm.title = 'Hirsch says hi!';

    // Your code goes here...

  }

}());
