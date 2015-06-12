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

  export interface IHeaderController {
    title: string;
  }

  class HeaderController implements IHeaderController {
    title: string;

    static $inject = [core.config.ID.AppConfig];
    constructor(config: core.config.IAppConfig) {
      this.title = config.title;
    }
  }

  angular
    .module(`${Namespace}.Header`, [])
    .directive('<%= prompts.prefix %>Header', () => new HeaderDirective());
}
