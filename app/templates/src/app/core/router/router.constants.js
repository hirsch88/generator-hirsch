(function () {
  'use strict';

  angular
    .module('<%= prompts.prefix %>.core.router.RouterConstants', [])
    .constant('APP_ROUTER_PRIVATE_ROUTES', getSecuredRoutes());


  function getSecuredRoutes() {
    return [
      '/private/*'
    ];
  }

}());
