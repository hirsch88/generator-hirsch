(function () {
  'use strict';

  angular
    .module('<%= prompts.prefix %>.core', [
      '<%= prompts.prefix %>.core.constants',
      '<%= prompts.prefix %>.core.configs',
      '<%= prompts.prefix %>.core.utils',
      '<%= prompts.prefix %>.core.router'
    ]);

})();
