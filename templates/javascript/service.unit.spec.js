'use strict';

describe('Unit: <%= prefix %>.<%= module %>.services.<%= classedName %>', function () {

  var <%= prefix %><%= classedName %>;
  beforeEach(module('<%= prefix %>'));
  beforeEach(inject(function (_<%= prefix %><%= classedName %>_) {
    <%= prefix %><%= classedName %> = _<%= prefix %><%= classedName %>_;
  }));

  it('should contain an <%= prefix %>.<%= module %>.services.<%= classedName %> service',
    inject(function (<%= prefix %><%= classedName %>) {
      expect(<%= prefix %><%= classedName %>).not.to.equal(null);
    })
  );

  it('should have a method, which returns a string',
    inject(function (<%= prefix %><%= classedName %>) {
      expect(<%= prefix %><%= classedName %>.method()).to.be.a('string');
    })
  );

});
