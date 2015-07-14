'use strict';

describe('Unit: <%= prefix %><%= classedName %>', function () {

  beforeEach(module('<%= prefix %>.<%= module %>.filters.<%= classedName %>'));

  it('should have a <%= prefix %><%= classedName %>', inject(function($filter) {
    expect($filter('<%= prefix %><%= classedName %>')).not.to.equal(null);
  }));

  it('should have a <%= prefix %><%= classedName %> that produces an string',
    inject(function($filter) {

      var filter = $filter('<%= prefix %><%= classedName %>')('bubu');
      expect(filter).to.be.a('string');
      expect(filter).to.equal('bubuFilter');
    }));

});
