'use strict';

describe('Unit: <%= moduleName %><%= capitalizedName %>', function () {

  beforeEach(module('app'));

  it('should contain an <%= moduleName %><%= capitalizedName %> service',
    inject(function (<%= moduleName %><%= capitalizedName %>) {
      expect(<%= moduleName %><%= capitalizedName %>).not.to.equal(null);
    })
  );



});
