app.layout.directives = (function (module) {
  'use strict';

  angular
    .module(module.ID, [
      module.path('Header')
    ]);

  return module;

})(app.layout.add('directives'));
