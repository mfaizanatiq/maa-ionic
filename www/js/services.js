angular.module('starter.services', ['ngResource'])
    .factory('apiTesting',['$resource', function($resource) {

        return {
        get_maa: $resource('https://uat.muslimaid.org.au/rest/content/currentsite/defaultculture/childrenof/our-projects?columns=DocumentID,DocumentName,NodeAlias&format=json&hash=d9976a93f9692dbae7f73c134379371508107d7452e569a3557d170628d3c3cc')
    };
  }]);