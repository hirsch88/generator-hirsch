/// <reference path="../../../../<%= typingNesting %>typings/tsd.d.ts"/>

namespace <%= prefix %>.<%= module %>.<%= $namespace %> {
  'use strict';

  export interface I<%= classedName %> {
    method(param: string): string;
  }

  export class <%= classedName %> implements I<%= classedName %> {
    private field;
    <% if(!useFactory) { %>
    static $inject = [];<% } %>
    constructor() {
      this.field = 'value';
    }

    method = (param: string) => {
      return param;
    };<% if(useFactory) { %>

    static createInstance = () => {
      // TODO: private initialization code

      // TODO: pass initialization parameters to class
      return new <%= classedName %>();
    };<% } %>
  }<% if(useFactory) { %>

  <%= classedName %>.createInstance.$inject = [];<% } %>

  angular
    .module(ID.<%= classedName %>, [])<% if(!useFactory) { %>
    .service(ID.<%= classedName %>, <%= classedName %>)<% } %><% if(useFactory) { %>
    .factory(ID.<%= classedName %>, <%= classedName %>.createInstance)<% } %>;
}
