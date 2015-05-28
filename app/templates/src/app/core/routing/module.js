(function () {
  'use strict';

  angular
    .module('<%= prompts.prefix %>.core.routing', [
      'ui.router',
      'ui.router.router',
      'ui.router.state'
    ]);

}());

