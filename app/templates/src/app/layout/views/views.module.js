(function () {
  'use strict';

  angular
    .module('<%= prompts.prefix %>.layout.views', [
      '<%= prompts.prefix %>.layout.views.Public',
      '<%= prompts.prefix %>.layout.views.Admin'
    ]);

})();
