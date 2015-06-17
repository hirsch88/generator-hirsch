(function () {
  'use strict';

  angular
    .module('<%= prompts.prefix %>.layout', [
      '<%= prompts.prefix %>.layout.directives',
      '<%= prompts.prefix %>.layout.views'
    ]);

})();
