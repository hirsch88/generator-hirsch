'use strict';

describe('Unit: <%= pkg.prefix %><%= meta.capitalizedModuleName %><%= meta.capitalizedName %>', function () {

  beforeEach(module('app'));

  it('should contain an <%= pkg.prefix %><%= meta.capitalizedModuleName %><%= meta.capitalizedName %> service',
    inject(function (<%= pkg.prefix %><%= meta.capitalizedModuleName %><%= meta.capitalizedName %>) {
      expect(<%= pkg.prefix %><%= meta.capitalizedModuleName %><%= meta.capitalizedName %>).not.to.equal(null);
    })
  );



});
