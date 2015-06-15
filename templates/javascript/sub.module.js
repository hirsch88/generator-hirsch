app.<%= module %>.<%= dirName %> = (function (module) {
  'use strict';

  angular
    .module(module.ID, [<% for (var i = 0, l = components.length; i < l; i++) { %>
      module.path('<%= components[i] %>'),<% } %>
      module.path('<%= classedName %>')
    ]);

  return module;

})(app.<%= module %>.add('<%= dirName %>'));
