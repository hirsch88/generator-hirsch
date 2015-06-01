/// <reference path="../../../../typings/tsd.d.ts"/>

module <%= prompts.prefix %>.layout.views {
  'use strict';

  angular
    .module('<%= prompts.prefix %>.layout.views.Public', [])
    .config(StateConfig);

  function StateConfig($stateProvider: ng.ui.IStateProvider) {
    $stateProvider.state('public', {
      views: {
        'root': {
          templateUrl: 'app/layout/views/public.html'
        }
      }
    });
  }
}
