app.Router = (function (module) {
  'use strict';

  angular
    .module(module.ID, [])
    .run(function (appRouter) {

      appRouter.use(function (start, destination, next, done) {
        console.log('1. Middleware !!!', start, destination);
        next();
      });

      appRouter.use('public', function (start, destination, next, done) {
        console.log('3. Middleware on parent route!!!', start, destination);
        next();
        //or to stop and redirect use -> destination.go(public.home);
      });

    });

  return module;

}(app.add('Router')));
