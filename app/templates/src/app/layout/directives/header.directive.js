(function () {
  'use strict';

  angular
    .module('<%= prompts.prefix %>.layout.directives.Header', [])
    .directive('<%= prompts.prefix %>Header', HeaderDirective);

  function HeaderDirective() {
    return {
      restrict:         'EA',
      templateUrl:      util.templateUrl('<%= prompts.prefix %>.layout.directives.Header'),
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
  function HeaderController(Logger, appConfig) {
    var log = new Logger('<%= prompts.prefix %>.layout.directives.Header');
    var vm = this;
    vm.title = appConfig.ENVIRONMENT;
    // Your code goes here...

  }


}());
