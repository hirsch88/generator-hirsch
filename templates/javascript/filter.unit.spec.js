'use strict';

describe('Unit: <%= prefix %>.<%= module %>.filters.<%= classedName %>', function () {

  beforeEach(module('<%= prefix %>.<%= module %>.filters.<%= classedName %>'));

  it('should have a <%= prefix %><%= classedName %> filter', inject(function($filter) {
    expect($filter('<%= prefix %><%= classedName %>')).not.to.equal(null);
  }));

  it('should have a <%= prefix %><%= classedName %> filter that produces an string',
    inject(function($filter) {

      var filter = $filter('<%= prefix %><%= classedName %>')('bubu');
      expect(filter).to.be.a('string');
      expect(filter).to.equal('bubuFilter');
    }));

});
