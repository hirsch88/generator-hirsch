'use strict';

describe('Midway: <%= lowercaseName %>', function () {

  var module;
  before(function () {
    module = angular.module('<%= lowercaseName %>');
  });

  it('should be registered', function () {
    expect(module).not.to.equal(null);
  });




});
