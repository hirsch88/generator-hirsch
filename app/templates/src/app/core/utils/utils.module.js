(function () {
  'use strict';

  angular
    .module('<%= prompts.prefix %>.core.utils', [
      '<%= prompts.prefix %>.core.utils.Logger',
      '<%= prompts.prefix %>.core.utils.Events'
    ]);

})();
