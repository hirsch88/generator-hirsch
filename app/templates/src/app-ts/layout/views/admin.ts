/// <reference path="../../../../typings/tsd.d.ts"/>

module <%= prompts.prefix %>.layout.views {
  'use strict';

  angular
    .module('<%= prompts.prefix %>.layout.views.Admin', [])
    .config(StateConfig);

  function StateConfig($stateProvider: ng.ui.IStateProvider) {
    $stateProvider.state('admin', {
      session: true,
      views: {
        'root': {
          templateUrl: 'app/layout/views/admin.html'
        }
      }
    });
  }
}
