'use strict';

describe('Unit: <%= prefix %>.<%= module %>.filters.<%= classedName %>', function () {

  beforeEach(module('app'));

  it('should contain an <%= prefix %>.<%= module %>.filters.<%= classedName %> filter',
    inject(function (<%= prefix %><%= classedName %>) {
      expect(<%= prefix %><%= classedName %>).not.to.equal(null);
    })
  );


});
