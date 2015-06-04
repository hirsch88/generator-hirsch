'use strict';

describe('Unit: <%= appname %>.services.<%= classedName %>', function () {

  beforeEach(module('app'));

  it('should contain an <%= appname %>.services.<%= classedName %> service',
    inject(function (<%= cameledName %>) {
      expect(<%= cameledName %>).not.to.equal(null);
    })
  );


});
