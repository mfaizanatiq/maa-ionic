angular.module('starter.services', ['ngResource'])
    .factory('apiTesting',['$resource', function($resource) {

        return {
       // get_maa: $resource('https://uat.muslimaid.org.au/rest/content/currentsite/defaultculture/childrenof/our-projects?columns=DocumentID,DocumentName,NodeAlias&format=json&hash=d9976a93f9692dbae7f73c134379371508107d7452e569a3557d170628d3c3cc'),
       get_maa: $resource('https://uat.muslimaid.org.au/rest/content/currentsite/defaultculture/childrenof/our-projects?classnames=MAA.Program&columns=DocumentID,DocumentName,NodeAlias,Program25AppIcon,NodeOrder,Published&format=json&hash=95eb62ef8dbbcb92422bfacb8d6f030e699922d566f7805fd84ed30819ceaf47'),
        //get_maa_local: $resource('https://uat.local.muslimaid.org.au/rest/content/currentsite/defaultculture/childrenof/our-projects?columns=DocumentID,DocumentName,NodeAlias&format=json&hash=3de2b4c6d90b057845814e1d5a3718a9f20e918cc37bd3530d6f93a157532a9f')
        get_maa_local: $resource('https://uat.local.muslimaid.org.au/rest/content/currentsite/defaultculture/childrenof/our-projects?classnames=MAA.Program&columns=DocumentID,DocumentName,NodeAlias,Program25AppIcon,NodeOrder,Published&format=json&hash=8fa80934d855cf4bf5d0432132a57dbf4155a73cf3fbfbf85fe58e3a5998c25b')
        

    };
  }]);