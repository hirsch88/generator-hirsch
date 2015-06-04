'use strict';

describe('Unit: <%= appname %>.directives.<%= classedName %>', function () {
  var $compile, $rootScope;

  beforeEach(module('<%= prefix %>.<%= module %>.directives'));

  beforeEach(angular.mock.inject(['$compile', '$rootScope', function($c, $r){
    $compile = $c;
    $rootScope = $r;
  }]));


});
