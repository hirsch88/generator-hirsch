'use strict';

describe('Unit: <%= moduleName %><%= capitalizedName %>', function () {

  var $compile, $rootScope;

  beforeEach(module('app'));

  beforeEach(inject(
    ['$compile','$rootScope', function($c, $r) {
      $compile = $c;
      $rootScope = $r;
    }]
  ));


});
