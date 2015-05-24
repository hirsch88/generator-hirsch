/// <reference path="../../../../typings/tsd.d.ts" />

module App.Layout {
  'use strict';

  angular
    .module('common.directive.header', [])
    .directive('<%= prompts.prefix %>Header', () => new HeaderDirective());

  /**
   * Header element outside of the ngView area
   */
  export class HeaderDirective implements angular.IDirective {
    restrict = 'EA';
    templateUrl = 'app/layout/directives/header.directive.html';
    controller = HeaderController;
    controllerAs = 'header';
    bindToController = true; // because the scope is isolated
  }

  export class HeaderController {
    title: string;

    static $inject = [Util.AppUtil.ID];
    constructor(appUtil: Util.AppUtil) {
      this.title = appUtil.title;
    }
  }
}