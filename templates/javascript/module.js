app.<%= cameledName %> = (function (module) {
  'use strict';

  angular
    .module(module.ID, []);

  return module;

})(app.add('<%= cameledName %>'));
