(function () {
  'use strict';

  angular
    .module('<%= prompts.prefix %>.core.router', [
      'ui.router',
      'ui.router.router',
      'ui.router.state',

      '<%= prompts.prefix %>.core.router.RouterConstants',
      '<%= prompts.prefix %>.core.router.RouterConfig',
      '<%= prompts.prefix %>.core.router.RouterService',
      '<%= prompts.prefix %>.core.router.Router'
    ])

}());
