/// <reference path="../../../typings/tsd.d.ts" />

module <%= prompts.prefix %>.home {
  'use strict';

  angular
    .module('<%= prompts.prefix %>.home', [
      '<%= prompts.prefix %>.home.views'
    ]);
}
