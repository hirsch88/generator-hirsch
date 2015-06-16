app.<%= module %>.views.<%= classedName %> = (function(module) {
  'use strict';

  angular
    .module(module.ID, [])
    .config(StateConfig)
    .controller('<%= prefix %><%= classedName %>Controller', <%= classedName %>Controller);

  function StateConfig($stateProvider) {
    $stateProvider
      .state('admin.<%= module %><%= classedName %>', {
        url:           '/<%= url %>',
        session:       true,
        navigationKey: '<%= module %>',
        views:         {
          'content': {
            templateUrl:  module.templateUrl(),
            controller:   '<%= prefix %><%= classedName %>Controller',
            controllerAs: '<%= prefix %><%= classedName %>'
          }
        }
      });
  }

  function <%= classedName %>Controller(Logger) {
    var log = new Logger('app.<%= module %>.views.<%= classedName %>');
    var vm = this;

    // code goes here...

  }

  return module;

}(app.<%= module %>.views.add('<%= classedName %>')));
