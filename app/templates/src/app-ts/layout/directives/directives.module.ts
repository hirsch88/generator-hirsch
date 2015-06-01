/// <reference path="../../../../typings/tsd.d.ts" />

module <%= prompts.prefix %>.layout.directives {
  'use strict';

  angular
    .module('<%= prompts.prefix %>.layout.directives', [
      '<%= prompts.prefix %>.layout.directives.Header'
    ]);
}
