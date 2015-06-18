(function () {
  'use strict';

  angular
    .module('<%= prompts.prefix %>.core.constants', [
      '<%= prompts.prefix %>.core.constants.Config',
      '<%= prompts.prefix %>.core.constants.Global'
    ]);

})();
