app.core = (function (module) {
  'use strict';

  angular
    .module(module.ID, [
      module.path('constants'),
      module.path('configs'),
      module.path('utils'),
      module.path('router')
    ]);

  return module;

}(app.add('core')));
