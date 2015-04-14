'use strict';

describe('Unit: <%= pkg.prefix %><%= meta.capitalizedModuleName %><%= meta.capitalizedName %>', function () {

  beforeEach(module('app'));

  it('should have a <%= pkg.prefix %><%= meta.capitalizedModuleName %><%= meta.capitalizedName %> filter', inject(function($filter) {
    expect($filter('<%= pkg.prefix %><%= meta.capitalizedModuleName %><%= meta.capitalizedName %>')).not.to.equal(null);
  }));

});
