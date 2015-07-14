(function () {
  'use strict';

  angular
    .module('<%= prompts.prefix %>.core.router.Layer', [])
    .factory('AppRouterLayer', AppRouterLayer);

  function AppRouterLayer() {
    var Layer = function Layer(fn, route) {
      this.handle = fn;
      this.route = route || '';
    };

    Layer.prototype.handle = function (start, destination, next, done) {
      this.handle(start, destination, next, done);
    };

    Layer.prototype.hasRoute = function () {
      return this.route && this.route !== '';
    };

    Layer.prototype.matchesState = function (stateName) {
      return stateName.indexOf(this.route) === 0;
    };

    return Layer;
  }

}());
