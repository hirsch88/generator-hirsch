'use strict';

describe('Unit: <%= appname %>.<%= module %>.views.<%= classedName %>Controller', function () {

  beforeEach(module('<%= appname %>'));

  it('should have a <%= classedName %>Controller', function() {
    expect(<%= appname %>.<%= prefix %><%= classedName %>Controller).not.to.equal(null);
  });



});
