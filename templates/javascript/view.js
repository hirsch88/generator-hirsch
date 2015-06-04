(function () {
  'use strict';

  angular
    .module('<%= prefix %>.<%= module %>.views.<%= classedName %>', [])
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
            templateUrl:  '<%= templateUrl %>',
            controller:   '<%= prefix %><%= classedName %>Controller',
            controllerAs: '<%= prefix %><%= classedName %>'
          }
        }
      });
  }

  function <%= classedName %>Controller() {
    var vm = this;

    // code goes here...

  }

})();
