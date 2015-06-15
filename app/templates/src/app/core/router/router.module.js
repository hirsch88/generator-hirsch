app.core.router = (function (module) {
  'use strict';

  angular
    .module(module.ID, [
      'ui.router',
      'ui.router.router',
      'ui.router.state',

      module.path('Start'),
      module.path('Destination'),
      module.path('Layer'),
      module.path('Router')
    ]);

  return module;

}(app.core.add('router')));
