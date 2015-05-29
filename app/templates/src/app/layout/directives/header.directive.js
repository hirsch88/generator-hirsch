/**
 * @namespace layout
 */
(function () {
  'use strict';

  angular
    .module('<%= prompts.prefix %>.layout.directives')
    .directive('<%= prompts.prefix %>Header', HeaderDirective);

  function HeaderDirective() {
    return {
      restrict:         'EA',
      templateUrl:      'app/layout/directives/header.directive.html',
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

}());
