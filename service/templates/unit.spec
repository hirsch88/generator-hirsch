'use strict';

describe('Unit: <%= meta.capitalizedModuleName %><%= meta.capitalizedName %>', function () {

  beforeEach(module('app'));

  it('should contain an <%= meta.capitalizedModuleName %><%= meta.capitalizedName %> service',
    inject(function (<%= meta.capitalizedModuleName %><%= meta.capitalizedName %>) {
      expect(<%= meta.capitalizedModuleName %><%= meta.capitalizedName %>).not.to.equal(null);
    })
  );



});
