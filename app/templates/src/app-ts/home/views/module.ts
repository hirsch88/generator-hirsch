/// <reference path="../../../../typings/tsd.d.ts" />

module <%= prompts.prefix %>.home.views {
  'use strict';

  angular
    .module('<%= prompts.prefix %>.home.views', [
      '<%= prompts.prefix %>.home.views.Home'
    ]);
}