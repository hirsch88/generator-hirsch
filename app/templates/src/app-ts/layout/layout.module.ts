/// <reference path="../../../typings/tsd.d.ts" />

module <%= prompts.prefix %>.layout {
  'use strict';

  angular
    .module('<%= prompts.prefix %>.layout', [
      '<%= prompts.prefix %>.layout.directives',
      '<%= prompts.prefix %>.layout.views'
    ]);
}
