/// <reference path="../../../../typings/tsd.d.ts"/>

module <%= prompts.prefix %>.core.router {

  var getSecuredRoutes = () => [
    '/private/*'
  ];

  angular
    .module('<%= prompts.prefix %>.core.router.RouterConstants', [])
    .constant(ID.APP_ROUTER_PRIVATE_ROUTES, getSecuredRoutes());
}
