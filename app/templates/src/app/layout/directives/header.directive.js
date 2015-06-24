(function () {
  'use strict';

  angular
    .module('<%= prompts.prefix %>.layout.directives.Header', [
      '<%= prompts.prefix %>.core.utils.Logger'
    ])
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
  function HeaderController(Logger) {
    var log = new Logger('app.layout.directives.Header');
    var vm = this;

    // Your code goes here...

  }


}());
