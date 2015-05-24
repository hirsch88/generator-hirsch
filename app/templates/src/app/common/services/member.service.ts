/// <reference path="../../../../typings/tsd.d.ts"/>

declare module App.Common.Service.Member {
  interface IMembersService {
    key: string;
    get(): angular.IPromise<Member[]>;
    getFullName(member: Member): string;
  }

  type Member = { fname: string; lname: string; };
}

/**
 * Member
 * @namespace services
 */
(function () {
  'use strict';

  angular
    .module('common.service.member', [])
    .factory('members', members);

  var data = [
    {
      fname: 'John',
      lname: 'Smith'
    },
    {
      fname: 'Susan',
      lname: 'Schrader'
    },
    {
      fname: 'Walter',
      lname: 'Frei'
    },
    {
      fname: 'Jason',
      lname: 'Miller'
    }
  ];

  /**
   * @memberOf services
   * @name members
   * @alias myMember
   *
   * @description
   * This data-service is called "myMember".
   *
   * @param $http
   * @param $q
   * @returns {Object}
   * @constructor
   */
  function members($http: angular.IHttpService, $q: angular.IQService): App.Common.Service.Member.IMembersService {
    var service = {
      key: 'value',

      get:         get,
      getFullName: getFullName
    };

    return service;
    ////////////////////////

    /**
     * @memberOf services.members
     * @method get
     *
     * @description
     * this is a method who does stuff
     *
     * @example
     * var members = myMember.get();
     *
     * -- or --
     *
     * myMember.get()
     *    .then(function(result){
     *      members = result
     *    });
     *
     * @returns {Object|Promise}
     */
    function get() {
      var deferred = $q.defer<App.Common.Service.Member.Member[]>();
      deferred.resolve(data);
      return deferred.promise;
    }

    /**
     * @memberOf services.members
     * @method getFullName
     *
     * @param member {Object} - Should have the properties fname and lname
     * @returns {String} - Fullname
     */
    function getFullName(member: App.Common.Service.Member.Member) {
      if (member) {
        return member.fname + ' ' + member.lname;
      }
      return '';
    }
  }
}());
