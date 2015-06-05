'use strict';

describe('Unit: <%= prefix %>.<%= module %>.directives.<%= classedName %>', function () {
  var $compile, $rootScope;

  beforeEach(module('<%= prefix %>.<%= module %>.directives.<%= classedName %>'));

  beforeEach(angular.mock.inject(['$compile', '$rootScope', function($c, $r){
    $compile = $c;
    $rootScope = $r;
  }]));


});
