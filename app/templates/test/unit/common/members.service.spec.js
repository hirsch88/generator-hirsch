'use strict';

describe('Unit: members', function () {

  beforeEach(module('app'));

  it('should contain an members service',
    inject(function (MemberService) {
      expect(MemberService).not.to.equal(null);
    })
  );

  it('should have a working members',
    inject(['members',function(ms) {

      expect(ms.get).not.to.equal(null);
      expect(ms.getFullName).not.to.equal(null);
    }])
  );

  it('should have a working service that build fullnames',
    inject(['members',function(ms) {

      var fullname = ms.getFullName({
        fname: 'Horst',
        lname: 'Bubu'
      });
      expect(fullname).to.equal('Horst Bubu');
    }]));



});
