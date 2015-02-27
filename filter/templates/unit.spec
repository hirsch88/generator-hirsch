'use strict';

describe('Unit: <%= moduleName %><%= capitalizedName %>', function () {

  beforeEach(module('app'));

  it('should have a <%= moduleName %><%= capitalizedName %> filter', inject(function($filter) {
    expect($filter('<%= moduleName %><%= capitalizedName %>')).not.to.equal(null);
  }));

});
