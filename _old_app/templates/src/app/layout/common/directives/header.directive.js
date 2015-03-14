/**
 * @namespace layout
 */
(function () {
  'use strict';

  angular
    .module( 'common.directive.header', [] )
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
      templateUrl: 'app/layout/common/directives/header.directive.html',
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
  function HeaderController(appUtil) {
    var vm = this;
    vm.title = appUtil.title;
  }

}());
