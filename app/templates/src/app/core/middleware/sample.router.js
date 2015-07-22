(function () {
  'use strict';

  angular
    .module('<%= prompts.prefix %>.core.middleware.Sample', [
      '<%= prompts.prefix %>.core.utils.Logger'
    ])
    .run(function (appRouter, Logger) {
      var log = new Logger('<%= prompts.prefix %>.core.middleware.Sample');

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

}());
