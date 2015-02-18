/**
 * Header Directive
 * @namespace Layout
 */
(function () {
    'use strict';

    angular
        .module( 'layout.header', [] )
        .directive( '<%= appSign %>Header', Header );

    /**
     * @name Header
     * @desc Header element outside of the ngView area
     * @memberOf Layout
     */
    function Header() {
        return {
        	restrict: 'EA',
        	templateUrl: 'app/layout/HeaderDirective.html',
        	controller: HeaderController,
        	controllerAs: 'header',
        	bindToController: true // because the scope is isolated
        }
    }

    function HeaderController() {
    	var vm = this;
    	vm.title = '<%= appTitle %>';
    }

}());