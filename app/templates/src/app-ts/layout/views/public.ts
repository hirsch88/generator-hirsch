/// <reference path="../../../../typings/tsd.d.ts"/>

module <%= prompts.prefix %>.layout.views {
  'use strict';

  var stateConfig = ($stateProvider: ng.ui.IStateProvider) => {
    $stateProvider.state('public', {
      views: {
        'root': {
          templateUrl: 'app/layout/views/public.html'
        }
      }
    });
  };
  
  stateConfig.$inject = ['$stateProvider'];

  angular
    .module('<%= prompts.prefix %>.layout.views.Public', [])
    .config(stateConfig);
}
