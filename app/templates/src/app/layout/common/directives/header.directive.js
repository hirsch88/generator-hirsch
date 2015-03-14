/**
 * @namespace layout
 */
(function () {
  'use strict';

  angular
    .module( 'common.directive.header', [] )
    .directive( 'gaHeader', HeaderDirective );

  /**
   * @memberOf layout
   * @namespace gaHeader
   *
   * @description
   * Header element outside of the ngView area
   *
   * @example
   * <ga-header></ga-header>
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
    };
  }

  /**
   * @memberOf layout.gaHeader
   * @name HeaderController
   *
   * @constructor
   */
  function HeaderController() {
    var vm = this;
    vm.title = appUtil.title;
  }

}());
