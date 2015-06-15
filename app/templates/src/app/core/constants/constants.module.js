app.core.constants = (function (module) {
  'use strict';

  angular
    .module(module.ID, [
      module.path('Environment'),
      module.path('Global')
    ]);

  return module;

}(app.core.add('constants')));
