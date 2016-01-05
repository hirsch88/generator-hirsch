namespace <%= prefix %>.<%= cameledName %> {
  'use strict';

  export const NAMESPACE = '<%= prefix %>.<%= cameledName %>';

  angular
    .module(NAMESPACE, []);
}
