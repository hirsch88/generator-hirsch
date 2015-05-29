(function () {
  'use strict';

  angular
    .module('<%= prompts.prefix %>.core', [
      '<%= prompts.prefix %>.core.constants',
      '<%= prompts.prefix %>.core.config',
      '<%= prompts.prefix %>.core.router',
      '<%= prompts.prefix %>.core.util'
    ]);

}());

