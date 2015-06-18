(function () {
  'use strict';

  angular
    .module('<%= prompts.prefix %>.core.router.Destination', [])
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

}());
