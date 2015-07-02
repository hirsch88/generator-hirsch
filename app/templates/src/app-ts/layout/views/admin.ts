/// <reference path="../../../../typings/tsd.d.ts"/>

module <%= prompts.prefix %>.layout.views {
  'use strict';

  var stateConfig = ($stateProvider: ng.ui.IStateProvider) => {
    $stateProvider.state('admin', {
      abstract: true,
      views: {
        'root': {
          templateUrl: 'app/layout/views/admin.html'
        }
      }
    });
  };
  
  stateConfig.$inject = ['$stateProvider'];  

  angular
    .module(`${Namespace}.Admin`, [])
    .config(stateConfig);
}
