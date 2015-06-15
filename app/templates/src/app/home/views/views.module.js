app.home.views = (function (module) {
  'use strict';

  angular
    .module(module.ID, [
      module.path('Home')
    ]);

  return module;

})(app.home.add('views'));
