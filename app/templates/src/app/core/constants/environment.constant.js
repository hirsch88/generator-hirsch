app.core.constants.Environment = (function (module) {
  'use strict';

  angular
    .module(module.ID, [])
    .constant('<%= prompts.prefix %>Environment', {
      dev:  'http://localhost:1337/api/',
      test: 'http://localhost:1337/api/',
      prod: 'http://localhost:1337/api/',

      getServerUrl: function () {
        return this[this.getCurrent()];
      },

      getCurrent: function () {
        switch (window.location.hostname) {
          case 'localhost':
            return 'dev';
          default:
            return 'prod';
        }
      }

    });

  return module;

})(app.core.constants.add('Environment'));
