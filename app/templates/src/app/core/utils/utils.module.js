app.core.util = (function (module) {
  'use strict';

  angular
    .module(module.ID, [
      module.path('Logger')
    ]);

  return module;

}(app.core.add('utils')));

