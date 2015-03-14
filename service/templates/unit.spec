'use strict';

describe('Unit: <%= capitalizedModuleName %><%= capitalizedName %>', function () {

  beforeEach(module('app'));

  it('should contain an <%= capitalizedModuleName %><%= capitalizedName %> service',
    inject(function (<%= capitalizedModuleName %><%= capitalizedName %>) {
      expect(<%= capitalizedModuleName %><%= capitalizedName %>).not.to.equal(null);
    })
  );



});
