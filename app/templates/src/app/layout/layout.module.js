app.layout = (function (module) {
  'use strict';

  angular
    .module(module.ID, [
      module.path('directives'),
      module.path('views')
    ]);

  return module;

})(app.add('layout'));
