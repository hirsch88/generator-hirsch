/// <reference path="../../../../typings/tsd.d.ts"/>

module <%= prefix %>.<%= module %>.services {
  'use strict';

  export interface I<%= classedName %>Service {
    method: () => string;
  }

  class <%= classedName %>Service implements I<%= classedName %>Service {
    private field;

    static $inject = [];
    constructor() {
      this.field = 'value';
    }

    method = () => {
      return '';
    }
  }

  angular
    .module('<%= prefix %>.<%= module %>.services.<%= classedName %>Service', [])
    .service(ID.<%= classedName %>Service, <%= classedName %>Service);
}
