/// <reference path="../../../<%= typingNesting %>typings/tsd.d.ts" />

module <%= prefix %>.<%= cameledName %> {
  'use strict';

  export const Namespace = '<%= prefix %>.<%= cameledName %>';

  angular
    .module(Namespace, []);
}
