app.Router = (function (module) {
  'use strict';

  angular
    .module(module.ID, [])
    .run(function (appRouter, logger) {
      var log = new logger('app.Router');

      appRouter.use(function (start, destination, next, done) {
        log.info('1. Middleware !!!', start, destination);
        next();
      });

      appRouter.use('public', function (start, destination, next, done) {
        log.info('3. Middleware on parent route!!!', start, destination);
        next();
        //or to stop and redirect use -> destination.go(public.home);
      });

    });

  return module;

}(app.add('Router')));
