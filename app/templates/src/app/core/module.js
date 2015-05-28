(function () {
  'use strict';

  angular
    .module('<%= prompts.prefix %>.core', [
      '<%= prompts.prefix %>.core.config',
      '<%= prompts.prefix %>.core.routing',
      '<%= prompts.prefix %>.core.util'
    ]);

}());

