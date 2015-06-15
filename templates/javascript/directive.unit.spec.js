'use strict';

describe('Unit: <%= prefix %><%= classedName %> directive', function () {
  var $compile, $rootScope;

  beforeEach(module(app.<%= module %>.directives.<%= classedName %>.ID));

  beforeEach(angular.mock.inject(['$compile', '$rootScope', function($c, $r){
    $compile = $c;
    $rootScope = $r;
  }]));

  it("should display the welcome text properly", function() {
    var element = $compile('<div <%= prefix %>-<%= dashedName %>></div>')($rootScope);
    expect(element.html()).to.match(/<%= prefix %><%= classedName %> Directive/i);
  })


});
