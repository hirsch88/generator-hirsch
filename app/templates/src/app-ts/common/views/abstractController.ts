/// <reference path="../../../../typings/tsd.d.ts"/>

module <%= prompts.prefix %>.common.views {
  export class AbstractController {
    constructor($state: ng.ui.IStateService) {
      $state.current.onExit = this.dispose.bind(this);
    }

    protected dispose() {
      // nothing to do here
    }
  }
}
