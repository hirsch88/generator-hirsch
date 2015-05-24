/// <reference path="../../../../typings/tsd.d.ts"/>

declare module App.Common.Services {
  export interface IMember { fname: string; lname: string; }
}

module App.Common.Services {
  'use strict';

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
   * This is a data-service.
   */
  export class MembersService {
    static ID = 'members';

    /*@ngInject*/
    constructor(private $http: angular.IHttpService, private $q: angular.IQService) {
    }

    /**
     * this is a method which does stuff
     */
    get() {
      var deferred = this.$q.defer<IMember[]>();
      deferred.resolve(data);
      return deferred.promise;
    }

    getFullName(member: IMember) {
      if (member) {
        return member.fname + ' ' + member.lname;
      }

      return '';
    }
  }

  angular
    .module('common.service.member', [])
    .service(MembersService.ID, MembersService);
}