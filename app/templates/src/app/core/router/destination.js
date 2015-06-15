app.core.router.Destination = (function (module) {
  'use strict';

  angular
    .module(module.ID, [])
    .factory('AppRouterDestination', AppRouterDestination);

  function AppRouterDestination($state) {
    var Destination = function Destination(state, params) {
      this.state = state;
      this.params = params;
    };

    Destination.prototype.go = function (stateName) {
      $state.go(stateName, {}, {
        location: 'replace'
      });
    };

    return Destination;

  }

  return module;

}(app.core.router.add('Destination')));
