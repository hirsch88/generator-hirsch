(function () {
  'use strict';

  angular
    .module('<%= prompts.prefix %>.home.views.Home', [
      'my.core.utils.Logger'
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
            templateUrl:  util.templateUrl('<%= prompts.prefix %>.home.views.Home'),
            controller:   'homeController',
            controllerAs: 'home'
          }
        }

      });
  }

  function HomeController(Logger) {
    var log = new Logger('app.home.views.Home');
    var vm = this;
    vm.title = 'Hirsch says hi!';

    // Your code goes here...

  }

}());
