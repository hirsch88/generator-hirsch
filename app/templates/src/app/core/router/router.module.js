(function () {
  'use strict';

  angular
    .module('<%= prompts.prefix %>.core.router', [
      'ui.router',
      'ui.router.router',
      'ui.router.state',
      '<%= prompts.prefix %>.core.router.Start',
      '<%= prompts.prefix %>.core.router.Destination',
      '<%= prompts.prefix %>.core.router.Layer',
      '<%= prompts.prefix %>.core.router.Router'
    ]);

})();
