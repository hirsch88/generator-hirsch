app.core.config = (function (module) {
  'use strict';

  angular
    .module(module.ID, [
      module.path('Angular'),
      module.path('ThirdParty')
    ]);

  return module;

}(app.core.add('configs')));
