/// <reference path="../../../../typings/tsd.d.ts"/>

module <%= prefix %>.<%= module %>.services {
  'use strict';

  export interface I<%= classedName %>Service {
    method(param: string): string;
  }

  class <%= classedName %>Service implements I<%= classedName %>Service {
    private field;
  
    static $inject = [];
    constructor() {
      this.field = 'value';
    }

    method = (param: string) => {
      return param;
    }
  }<% if(useFactory) { %>

  var factory = (): I<%= classedName %>Service => {
    // TODO: private initialization code

    // TODO: pass initialization parameters to class
    return new <%= classedName %>Service();
  };
  factory.$inject = [];<% } %>

  angular
    .module(ID.<%= classedName %>Service, [])<% if(!useFactory) { %>
    .service(ID.<%= classedName %>Service, <%= classedName %>Service)<% } %><% if(useFactory) { %>
    .factory(ID.<%= classedName %>Service, factory)<% } %>;
}
