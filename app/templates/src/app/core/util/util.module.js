(function () {
  'use strict';

  angular
    .module('<%= prompts.prefix %>.core.util', [
      '<%= prompts.prefix %>.core.util.Logger',
      '<%= prompts.prefix %>.core.util.Events',
      '<%= prompts.prefix %>.core.util.Util'
    ]);

}());

