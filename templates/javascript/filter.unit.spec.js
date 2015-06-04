'use strict';

describe('Unit: <%= appname %>.filters.<%= classedName %>', function () {

  beforeEach(module('app'));

  it('should contain an <%= appname %>.filters.<%= classedName %> filter',
    inject(function (<%= prefix %><%= classedName %>) {
      expect(<%= prefix %><%= classedName %>).not.to.equal(null);
    })
  );


});
