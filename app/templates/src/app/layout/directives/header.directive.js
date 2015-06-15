app.layout.directives.Header = (function (module) {
  'use strict';

  angular
    .module(module.ID, [])
    .directive('<%= prompts.prefix %>Header', HeaderDirective);

  function HeaderDirective() {
    return {
      restrict:         'EA',
      templateUrl:      module.templateUrl(),
      controller:       HeaderController,
      controllerAs:     'header',
      bindToController: true // because the scope is isolated
    };
  }

  /**
   * @memberOf layout.<%= prompts.prefix %>Header
   * @name HeaderController
   *
   * @constructor
   */
  function HeaderController() {
    var vm = this;

    // Your code goes here...

  }

  return module;

}(app.layout.directives.add('Header')));
