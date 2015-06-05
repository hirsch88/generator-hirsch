/// <reference path="../../../../typings/tsd.d.ts" />

module <%= prefix %>.<%= module %>.views {
  'use strict';

  angular
    .module('<%= prefix %>.<%= module %>.views', [
      'ui.router',
      'ui.router.router',
      'ui.router.state'<% for (var i = 0, l = components.length; i < l; i++) { %>,
      '<%= prefix %>.<%= module %>.views.<%= components[i] %>'<% } %>,
      '<%= prefix %>.<%= module %>.views.<%= classedName %>'
    ]);

  export var ID = {<% for (var i = 0, l = components.length; i < l; i++) { %>
    <%= components[i] %>Controller: '<%= prefix %>.<%= module %>.views.<%= components[i] %>Controller', <% } %>
    <%= classedName %>Controller: '<%= prefix %>.<%= module %>.views.<%= classedName %>Controller'
  };
}
