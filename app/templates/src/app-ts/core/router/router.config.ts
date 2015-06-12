﻿/// <reference path="../../../../typings/tsd.d.ts"/>

module <%= prompts.prefix %>.core.router {

  var routerConfig = ($urlRouterProvider: ng.ui.IUrlRouterProvider) => {
    $urlRouterProvider.otherwise('/home');
  };

  routerConfig.$inject = ['$urlRouterProvider'];

  angular
    .module(`${Namespace}.RouterConfig`, [])
    .config(routerConfig);
}
