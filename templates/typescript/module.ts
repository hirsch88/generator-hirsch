/// <reference path="../../../<%= typingNesting %>typings/tsd.d.ts" />

namespace <%= prefix %>.<%= cameledName %> {
  'use strict';

  export const Namespace = '<%= prefix %>.<%= cameledName %>';

  angular
    .module(Namespace, []);
}
