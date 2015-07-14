/// <reference path="../../../../<%= typingNesting %>typings/tsd.d.ts"/>

module <%= prefix %>.<%= module %>.<%= $namespace %> {
  'use strict';

  export interface I<%= classedName %> {
    method(param: string): string;
  }

  class <%= classedName %> implements I<%= classedName %> {
    private field;
  
    static $inject = [];
    constructor() {
      this.field = 'value';
    }

    method = (param: string) => {
      return param;
    }
  }<% if(useFactory) { %>

  var factory = (): I<%= classedName %> => {
    // TODO: private initialization code

    // TODO: pass initialization parameters to class
    return new <%= classedName %>();
  };
  factory.$inject = [];<% } %>

  angular
    .module(ID.<%= classedName %>, [])<% if(!useFactory) { %>
    .service(ID.<%= classedName %>, <%= classedName %>)<% } %><% if(useFactory) { %>
    .factory(ID.<%= classedName %>, factory)<% } %>;
}
