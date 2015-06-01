/// <reference path="../../../../typings/tsd.d.ts"/>

module <%= prompts.prefix %>.layout.views {
  'use strict';

  angular
    .module('<%= prompts.prefix %>.layout.views', [
    '<%= prompts.prefix %>.layout.views.Admin',
    '<%= prompts.prefix %>.layout.views.Public'
  ]);
}
