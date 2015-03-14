'use strict';

describe('Unit: <%= capitalizedModuleName %><%= capitalizedName %>', function () {

  var $compile, $rootScope;

  beforeEach(module('app'));

  beforeEach(inject(
    ['$compile','$rootScope', function($c, $r) {
      $compile = $c;
      $rootScope = $r;
    }]
  ));


});
