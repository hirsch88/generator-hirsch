/// <reference path="../../../typings/tsd.d.ts" />

<% if(prompts.description) { %>/**
 * <%= prompts.description %>
 */
<% } %>module <%= pkg.prefix %>.<%= meta.lowercaseName %> {
  'use strict';

  angular
    .module('<%= pkg.prefix %>.<%= meta.lowercaseName %>', [<% if(prompts.modules) { %>
      <%= prompts.modules %>
    <% } %>]);
}
