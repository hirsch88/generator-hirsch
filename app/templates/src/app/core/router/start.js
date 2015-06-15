app.core.router.Start = (function (module) {
  'use strict';

  angular
    .module(module.ID, [])
    .factory('AppRouterStart', AppRouterStart);

  function AppRouterStart() {
    var Start = function Start(state, params) {
      this.state = state;
      this.params = params;
    };

    return Start;

  }

  return module;

}(app.core.router.add('Start')));
