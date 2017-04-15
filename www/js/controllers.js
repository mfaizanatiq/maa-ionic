angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope, $ionicModal, $timeout) {
    console.log('Hello World');
    $scope.hello = 'Hello World';
})

.controller('IntCtrl', function($scope, $ionicModal,$ionicPopover,$cordovaInAppBrowser, $timeout,$location,apiTesting) {
    console.log('internation Controller');
    $scope.spinner = true;
    apiTesting.get_maa.get().$promise.then(function(data) {
    $scope.programs = data.cms_documents[2].MAA_Program;
    console.log( $scope.programs);
    $scope.spinner = false;
    });
    $scope.test = 'Global'
    $scope.go = function ( path ) {
    $location.path( path );
    };

    $scope.donation = {};

    $scope.expressDonate=function(){

    var options = {
      location: 'no',
      clearcache: 'yes',
      toolbar: 'yes'
    };

     $cordovaInAppBrowser.open('http://uat.muslimaid.org.au/donate-now?campaign=201&amount='+$scope.donation.amount, '_blank', options)
      .then(function(event) {
        // success
        $scope.donation.amount = 0;
      })
      .catch(function(event) {
        // error
      });

      };

      $ionicPopover.fromTemplateUrl('templates/menupop.html', {
        scope: $scope
      }).then(function(popover) {
        $scope.popover = popover;
      });

      $scope.openPopover = function($event) {
        $scope.popover.show($event);
        };

    //$cordovaInAppBrowser.close();

})


.controller('ProjCtrl', function($scope, $ionicModal,$timeout,$stateParams,$http,apiTesting) {
    console.log('Project Controller');
    $scope.spinner = true;
    var currentAllias = $stateParams.projName;
    $scope.currentProgram = currentAllias;
    /*apiTesting.get_maa.get().$promise.then(function(data) {
    $scope.programs = data.cms_documents[2].MAA_Program;
    angular.forEach($scope.programs, function(subVal, subKey) {
                if(subVal.DocumentID == currentId){
                console.log(subVal.ProgramDescription)
                }
            });
    });*/
    $http({
    method: "GET",
    url: 'http://uat.muslimaid.org.au/rest/content/currentsite/defaultculture/all/our-projects/'+currentAllias+'?format=json&hash=62b48041372be811fdbd0ed260d0858439f28005f7931a44ed64f54763f7044f',
    headers: {
         'Accept': 'application/json',
         "ContentType": "application/x-www-form-urlencoded",
         "authorization": "Basic d2FrcWFzYWhtZWRAZ21haWwuY29tOmQkOSZ0QldBOFV3dkp6VQ==",}
    }).then(function successCallback(response) {
    console.log(response);
    $scope.spinner = false;
    $scope.hello = response.data;
    angular.forEach($scope.hello, function(value, key) {
        $scope.data = value;
    });
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    console.log(response);
  });

    $scope.readfull=true;
    $scope.readless=false;
    $scope.numLimit=450;
    $scope.readMore=function(){
    $scope.numLimit=10000;
    $scope.readfull=false;
    $scope.readless=true;
    };
    $scope.readLess=function(){
    $scope.numLimit=450;
    $scope.readfull=true;
    $scope.readless=false;
    };

    $scope.readfullCamp=true;
    $scope.readlessCamp=false;
    $scope.numLimitCamp=450;
    $scope.readMoreCamp=function(){
    $scope.numLimitCamp=10000;
    $scope.readfullCamp=false;
    $scope.readlessCamp=true;
    };
    $scope.readLessCamp=function(){
    $scope.numLimitCamp=450;
    $scope.readfullCamp=true;
    $scope.readlessCamp=false;
    };


        $ionicModal.fromTemplateUrl('templates/campaign.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.modal = modal;
      });

     $scope.showCampaign = function(index) {
    $scope.indexofCamp = index;
    $scope.modal.show();
    };

    $scope.closeCampaign = function() {
    $scope.modal.hide();
    $scope.readfull=true;
  };




})
