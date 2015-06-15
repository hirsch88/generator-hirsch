app.home = (function (module) {
  'use strict';

  angular
    .module(module.ID, [
      module.path('views')
    ]);

  return module;

})(app.add('home'));
