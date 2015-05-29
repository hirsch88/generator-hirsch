(function () {
  'use strict';

  angular
    .module('<%= prompts.prefix %>.core.router.RouterService', [])
    .factory('AppRouterService', RouterService);

  function RouterService() {

    var _initialized = false;

    var service = {
      hasInitialized: getInit,
      initialized:    initialized
    };

    return service;

    ////////////////////////////////////////////////

    function getInit() {
      return _initialized;
    }

    function initialized() {
      _initialized = true;
    }

  }


}());
