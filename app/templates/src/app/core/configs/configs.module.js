(function () {
  'use strict';

  angular
    .module('<%= prompts.prefix %>.core.configs', [
      '<%= prompts.prefix %>.core.configs.Angular',
      '<%= prompts.prefix %>.core.configs.Translate',
      '<%= prompts.prefix %>.core.configs.Router',
      '<%= prompts.prefix %>.core.configs.Promise'
    ]);

})();
