/// <reference path="../../../../typings/tsd.d.ts" />

module <%= prefix %>.<%= module %>.services {
  'use strict';

  angular
    .module('<%= prefix %>.<%= module %>.services', []);

  export var ID = {
    <%= capitalizedName %>Service: '<%= prefix %>.<%= module %>.services.<%= capitalizedName %>Service'
  };
}
