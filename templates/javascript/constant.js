app.<%= module %>.constants.<%= classedName %> = (function (module) {
  'use strict';

  angular
    .module(module.ID, [])
    .constant('<%= prefix %><%= classedName %>', 'Your Contant goes here...' );

  return module;

})(app.<%= module %>.constants.add('<%= classedName %>'));
