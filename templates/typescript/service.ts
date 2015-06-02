/// <reference path="../../../../typings/tsd.d.ts"/>

module <%= prefix %>.<%= module %>.services {
  'use strict';

  export interface I<%= capitalizedName %>Service {
    method: () => string;
  }

  class <%= capitalizedName %>Service implements I<%= capitalizedName %>Service {
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
    .module('<%= prefix %>.<%= module %>.services.<%= capitalizedName %>Service', [])
    .service(ID.<%= capitalizedName %>Service, <%= capitalizedName %>Service);
}
