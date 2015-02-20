/**
 * @namespace layout
 */
(function () {
  'use strict';

  angular
    .module( 'layout.header', [] )
    .directive( '<%= appSign %>Header', HeaderDirective );

  /**
   * @memberOf layout
   * @namespace <%= appSign %>Header
   *
   * @description
   * Header element outside of the ngView area
   *
   * @example
   * <<%= appSign %>-header></<%= appSign %>-header>
   *
   * @constructor
   */
  function HeaderDirective() {
    return {
      restrict: 'EA',
      templateUrl: 'app/layout/HeaderDirective.html',
      controller: HeaderController,
      controllerAs: 'header',
      bindToController: true // because the scope is isolated
    }
  }

  /**
   * @memberOf layout.<%= appSign %>Header
   * @name HeaderController
   *
   * @constructor
   */
  function HeaderController(AppUtil) {
    var vm = this;
    vm.title = AppUtil.title;
  }

}());
