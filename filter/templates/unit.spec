'use strict';

describe('Unit: <%= moduleName %><%= capitalizedName %>', function () {

  beforeEach(module('app'));

  it('should have a <%= capitalizedModuleName %><%= capitalizedName %> filter', inject(function($filter) {
    expect($filter('<%= prefix %><%= capitalizedModuleName %><%= capitalizedName %>')).not.to.equal(null);
  }));

});
