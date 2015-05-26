/// <reference path="../../typings/tsd.d.ts"/>

/**
 * <%= prompts.appName %>
 *
 * <%= prompts.description %>
 *
 * @author <%= prompts.author %>
 * @date <%= date %>
 * @version 0.0.0
 */
module App {
  'use strict';

  angular
    .module('app', [

      // core module
      'core',
      'core.util',
      'core.config',
      'core.logger',
      'core.router',
      'core.run',

      // Layout components
      'layout',

      'common.services.member',

      // App modules with business logic
      'home'
    ]);
}
