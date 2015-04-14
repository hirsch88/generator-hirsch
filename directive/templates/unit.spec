'use strict';

describe('Unit: <%= pkg.prefix %><%= meta.capitalizedModuleName %><%= meta.capitalizedName %>', function () {

  var $compile, $rootScope;

  beforeEach(module('app'));

  beforeEach(inject(
    ['$compile','$rootScope', function($c, $r) {
      $compile = $c;
      $rootScope = $r;
    }]
  ));


});
