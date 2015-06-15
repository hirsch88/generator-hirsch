app.layout.views = (function (module) {
  'use strict';

  angular
    .module(module.ID, [
      module.path('Public'),
      module.path('Admin')
    ]);

  return module;

})(app.layout.add('views'));
