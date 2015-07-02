/// <reference path="../../../typings/tsd.d.ts" />

module <%= prefix %>.<%= cameledName %> {
  'use strict';

  export var Namespace = '<%= prefix %>.<%= cameledName %>';

  angular
    .module(Namespace, []);
}
