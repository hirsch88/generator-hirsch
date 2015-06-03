/// <reference path="../../../../typings/tsd.d.ts" />

module <%= prompts.prefix %>.layout.directives {
  'use strict';

  /**
   * Header element outside of the ngView area
   */
  class HeaderDirective implements ng.IDirective {
    restrict = 'EA';
    templateUrl = 'app/layout/directives/header.directive.html';
    controller = HeaderController;
    controllerAs = 'header';
    bindToController = true; // because the scope is isolated
  }

  export interface IHeaderViewModel {
    title: string;
  }

  class HeaderController implements IHeaderViewModel {
    title: string;

    static $inject = [core.util.ID.AppUtil];
    constructor(appUtil: core.util.IAppUtil) {
      this.title = appUtil.title;
    }
  }

  angular
    .module('<%= prompts.prefix %>.layout.directives.Header', [])
    .directive('<%= prompts.prefix %>Header', () => new HeaderDirective());
}
