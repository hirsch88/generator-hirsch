app.core.util = (function (module) {
  'use strict';

  angular
    .module(module.ID, [
      module.path('Logger'),
      module.path('Events')
    ]);

  return module;

}(app.core.add('utils')));

