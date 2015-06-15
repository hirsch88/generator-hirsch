var app = (function (app) {
  'use strict';

  angular
    .module(app.ID, [

      // AngularJS Libs
      'ngSanitize',
      'ngMessages',

      // Third-Party Libs
      'ui.router',
      'pascalprecht.translate',

      // Configs, middleware, run...
      app.path('core'),

      // Common components, services, filters...

      // App modules with business logic
      app.path('layout'),
      app.path('home')

    ]);

  return app;

}(new Module('<%= prompts.prefix %>')));
