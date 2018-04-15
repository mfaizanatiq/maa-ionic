angular.module('starter.controllers', [])

  .controller('HomeCtrl', function ($scope, $cordovaInAppBrowser, $timeout, $cordovaProgress, $cordovaSpinnerDialog, $rootScope, $ionicLoading, $ionicModal) {
    var options = {
      location: 'yes',
      clearcache: 'yes',
      toolbar: 'yes'
    };

    $scope.openBrowser = function () {
var link='https://www.maainternational.org.au/donate-now';
window.open(link,'_system');

     /* $cordovaInAppBrowser.open('https://www.maainternational.org.au/donate-now', '_blank', options).then(function () {

      }, function (error) {
        console.log("Error: " + error);
      });*/

    /*  $rootScope.$on('$cordovaInAppBrowser:loadstart', function (e, event) {
        // $cordovaProgress.showDeterminateWithLabel(true, 50000, "Loading")
        //$cordovaSpinnerDialog.show("title","message", true);

      });
      $rootScope.$on('$cordovaInAppBrowser:loadstop', function (e, event) {
        //$cordovaProgress.showDeterminateWithLabel(false, 1000, "Done")
      });
      $rootScope.$on('$cordovaInAppBrowser:loaderror', function (e, event) {
        //alert('loaderror');
      });
      $rootScope.$on('$cordovaInAppBrowser:exit', function (e, event) {
        //alert('exit');
      });*/

    }


  })

  .controller('IntCtrl', function ($scope,$http, $ionicModal, $ionicPopover, $cordovaInAppBrowser, $timeout, $location, apiTesting, $ionicScrollDelegate) {
    console.log('international Controller');
    $scope.removeProjects = [27,622,623,28,517];
    $scope.spinner = true;
   /* apiTesting.get_maa.get().$promise.then(function (data) {
      //console.log(data.cms_documents[0]);

      $scope.programs = data.cms_documents[0].MAA_Program;
      //console.log(data.cms_documents[1]);
      
     
      //Remove unwanted projects
      



    });*/

//Requesting Projects
$http({
      method: "GET",
      url: 'https://www.maainternational.org.au/rest/content/currentsite/defaultculture/childrenof/our-projects?classnames=MAA.Program&columns=DocumentID,DocumentName,NodeAlias,NodeOrder,Program25AppIcon,Published&format=json',
      headers: {
        'Accept': 'application/json',
        "ContentType": "application/json; charset=utf-8",
        "authorization": "Basic bW9iaWxlYXBwdXNlckBtdXNsaW1haWQub3JnLmF1OmQkOSZ0QldBOFV3dkp6VQ==",
      }
    }).then(function successCallback(response) {
      console.log(response);
      $scope.programs = response.data.cms_documents[0].MAA_Program;
      var removeProjects__Index=[];
      for (i = 0; i <= $scope.programs.length - 1; i++) {
        if ($scope.removeProjects.indexOf($scope.programs[i].DocumentID) != -1) {
          //$scope.programs.splice(i, i);
          removeProjects__Index.push(i);
          //alert('found ' + $scope.programs[i].DocumentID+ ' '+ $scope.programs.length);          
        }
      }

$scope.programs = $scope.programs.filter(function(value, index) {
     return removeProjects__Index.indexOf(index) == -1;
})
      

       $scope.spinner = false;
     },function errorCallback(response){
       console.log(response);
     });

    $scope.go = function (path) {
     $location.path(path);
    };

    $scope.phoneNumber = "tel:+61280169500";

    $scope.donation = {};

    $scope.expressDonate = function () {

      /*var options = {
        location: 'yes',
        clearcache: 'yes',
        toolbar: 'yes'
      };*/
var link='https://www.maainternational.org.au/donate-now?campaign=201&amount=' + $scope.donation.amount;
window.open(link,'_system');

      /*$cordovaInAppBrowser.open('https://www.maainternational.org.au/donate-now?campaign=201&amount=' + $scope.donation.amount, '_blank', options)
        .then(function (event) {
          // success
          $scope.donation.amount = 0;
        })
        .catch(function (event) {
          // error
        });*/

    };


    $ionicPopover.fromTemplateUrl('templates/menupop.html', {
      scope: $scope
    }).then(function (popover) {
      $scope.popover = popover;
    });

    $scope.openPopover = function ($event) {
      $scope.popover.show($event);
    };
    $scope.closePopover = function ($event) {
      $scope.popover.hide($event);
    };

    $scope.expressDonateCamp = function (nodeID) {


      /*var options = {
        location: 'yes',
        clearcache: 'yes',
        toolbar: 'yes'
      };*/

var link='https://www.maainternational.org.au/donate-now?&campaign=' + nodeID;
window.open(link,'_system');

     /* $cordovaInAppBrowser.open('https://www.maainternational.org.au/donate-now?&campaign=' + nodeID, '_blank', options)
        .then(function (event) {
          // success
          $scope.donation.amount = 0;
        })
        .catch(function (event) {
          // error
        });*/

    };

//Open an In-App browser with a link as parameter  
$scope.openBrowserlink = function (nodeID) {
//alert(nodeID);
     var options = {
        location: 'yes',
        clearcache: 'yes',
        toolbar: 'yes'
      };

var link= nodeID;
//window.open(link,'_system');

      $cordovaInAppBrowser.open(nodeID, '_blank', options)
        .then(function (event) {
          // success
          $scope.donation.amount = 0;
        })
        .catch(function (event) {
          // error
        });

    };


   //User Account Settings
    $scope.myAccount = function () {
      /*var options = {
        location: 'yes',
        clearcache: 'yes',
        toolbar: 'yes'
      };*/


var link='https://www.maainternational.org.au/donor-portal/edit-account';
window.open(link,'_system');

     /* $cordovaInAppBrowser.open('https://www.maainternational.org.au/donor-portal/edit-account', '_blank', options)
        //$cordovaInAppBrowser.open('https://uat.muslimaid.org.au/sign-in-register','_blank', options)
        .then(function (event) {
          // success
          $scope.donation.amount = 0;
        })
        .catch(function (event) {
          // error
        });*/

    };
    //Donation Summary
    $scope.donationSummary = function () {

      /*var options = {
        location: 'yes',
        clearcache: 'yes',
        toolbar: 'yes'
      };*/

var link='https://www.maainternational.org.au/donate-now/your-donation-summary';
window.open(link,'_system');


      /*$cordovaInAppBrowser.open('https://www.maainternational.org.au/donate-now/your-donation-summary', '_blank', options)
        //$cordovaInAppBrowser.open('https://uat.www.maanational.org.au/sign-in-register','_blank', options)
        .then(function (event) {
          // success
          $scope.donation.amount = 0;
        })
        .catch(function (event) {
          // error
        });*/

    };




    //Scroll To a section
    $scope.scrollTo = function (target) {
      $location.hash(target);   //set the location hash
      var handle = $ionicScrollDelegate.$getByHandle('myPageDelegate');
      handle.anchorScroll(true);  // 'true' for animation
    };


    //$cordovaInAppBrowser.close();
  })

  .controller('LocCtrl', function ($scope, $ionicModal, $http, $ionicPopover, $cordovaInAppBrowser, $timeout, $location, apiTesting, $ionicScrollDelegate) {
    console.log('Local Controller');
    $scope.removeProjects = [27, 28, 622, 623, 650];
    $scope.spinner = true;
/*    apiTesting.get_maa_local.get().$promise.then(function (data) {
      $scope.programs = data.cms_documents[0].MAA_Program;

      //Remove unwanted projects
      $scope.programs.splice(0, 2);
      for (i = 0; i <= $scope.programs.length - 1; i++) {
        if ($scope.removeProjects.indexOf($scope.programs[i].DocumentID) != -1) {
          //alert('found ' + $scope.programs[i].DocumentID);
          $scope.programs.splice(i, i);
        }
      }
      console.log($scope.programs);
      $scope.spinner = false;
    });*/

//Requesting Projects
$http({
      method: "GET",
      url: 'https://www.maanational.org.au/rest/content/currentsite/defaultculture/childrenof/our-projects?classnames=MAA.Program&columns=DocumentID,DocumentName,NodeAlias,NodeOrder,Program25AppIcon,Published&format=json',
      headers: {
        'Accept': 'application/json',
        "ContentType": "application/json; charset=utf-8",
        "authorization": "Basic bW9iaWxlYXBwdXNlckBtdXNsaW1haWQub3JnLmF1OmQkOSZ0QldBOFV3dkp6VQ==",
      }
    }).then(function successCallback(response) {
      console.log(response);
      $scope.programs = response.data.cms_documents[0].MAA_Program;
      var removeProjects__Index=[];
      for (i = 0; i <= $scope.programs.length - 1; i++) {
        if ($scope.removeProjects.indexOf($scope.programs[i].DocumentID) != -1) {
          //$scope.programs.splice(i, i);
          removeProjects__Index.push(i);
          //alert('found ' + $scope.programs[i].DocumentID+ ' '+ $scope.programs.length);          
        }
      }

$scope.programs = $scope.programs.filter(function(value, index) {
     return removeProjects__Index.indexOf(index) == -1;
})
      

       $scope.spinner = false;
     },function errorCallback(response){
       console.log(response);
     });



    $scope.test = 'Local'
    $scope.go = function (path) {
      $location.path(path);
    };

    $scope.phoneNumber = "tel:+61280169500";

    $scope.donation = {};

    $scope.expressDonate = function () {

      /*var options = {
        location: 'yes',
        clearcache: 'yes',
        toolbar: 'yes'
      };*/


var link='https://www.maanational.org.au/donate-now?campaign=634&amount=' + $scope.donation.amount;
window.open(link,'_system');

      /*$cordovaInAppBrowser.open('https://www.maanational.org.au/donate-now?campaign=634&amount=' + $scope.donation.amount, '_blank', options)
        .then(function (event) {
          // success
          $scope.donation.amount = 0;
        })
        .catch(function (event) {
          // error
        });*/

    };


    $ionicPopover.fromTemplateUrl('templates/locmenupopup.html', {
      scope: $scope
    }).then(function (popover) {
      $scope.popover = popover;
    });

    $scope.openPopoverlocal = function ($event) {
      $scope.popover.show($event);
    };
    $scope.closePopover = function ($event) {
      $scope.popover.hide($event);
    };

    $scope.expressDonateLocCamp = function (nodeID) {

      /*var options = {
        location: 'yes',
        clearcache: 'yes',
        toolbar: 'yes'
      };*/


var link='https://www.maanational.org.au/donate-now?&campaign=' + nodeID;
window.open(link,'_system');

      /*$cordovaInAppBrowser.open('https://www.maanational.org.au/donate-now?&campaign=' + nodeID, '_blank', options)
        .then(function (event) {
          // success
          $scope.donation.amount = 0;
        })
        .catch(function (event) {
          // error
        });*/

    };

//Open an In-App browser with a link as parameter  
$scope.openBrowserlink = function (nodeID) {
//alert(nodeID);
      var options = {
        location: 'yes',
        clearcache: 'yes',
        toolbar: 'yes'
      };
var link= nodeID;
//window.open(link,'_system');
      $cordovaInAppBrowser.open(link, '_blank', options)
        .then(function (event) {
          // success
          $scope.donation.amount = 0;
        })
        .catch(function (event) {
          // error
        });

    };

    //User Account Settings
    $scope.myAccount = function () {
      /*var options = {
        location: 'yes',
        clearcache: 'yes',
        toolbar: 'yes'
      };*/

var link= 'https://www.maanational.org.au/donor-portal/edit-account';
window.open(link,'_system');

      /*$cordovaInAppBrowser.open('https://www.maanational.org.au/donor-portal/edit-account', '_blank', options)
        //$cordovaInAppBrowser.open('https://uat.www.maanational.org.au/sign-in-register','_blank', options)
        .then(function (event) {
          // success
          $scope.donation.amount = 0;
        })
        .catch(function (event) {
          // error
        });*/

    };



    //Donation Summary
    $scope.donationSummary = function () {

      /*var options = {
        location: 'yes',
        clearcache: 'yes',
        toolbar: 'yes'
      };*/

var link= 'https://www.maanational.org.au/donate-now/your-donation-summary';
window.open(link,'_system');

      /*$cordovaInAppBrowser.open('https://www.maanational.org.au/donate-now/your-donation-summary', '_blank', options)
        //$cordovaInAppBrowser.open('https://uat.www.maanational.org.au/sign-in-register','_blank', options)
        .then(function (event) {
          // success
          $scope.donation.amount = 0;
        })
        .catch(function (event) {
          // error
        });*/

    };


    //Scroll To a section
    $scope.scrollTo = function (target) {
      $location.hash(target);   //set the location hash
      var handle = $ionicScrollDelegate.$getByHandle('myPageDelegates');
      $ionicScrollDelegate.anchorScroll(true);  // 'true' for animation
    };


    //$cordovaInAppBrowser.close();*/




  })


  .controller('ProjCtrl', function ($scope, $cordovaInAppBrowser, $ionicModal, $timeout, $stateParams, $http, apiTesting) {
    console.log('Project Controller');
    $scope.spinner = true;
    $scope.campaigns = null;
    $scope.program = null;
    $scope.ProgramDefaultProject="0";
    var currentAllias = $stateParams.projName;
    $scope.currentProgram = currentAllias;
    /*apiTesting.get_maa.get().$promise.then(function(data) {
    $scope.programs = data.cms_documents[2].MAA_Program;
    angular.forEach($scope.programs, function(subVal, subKey) {
                if(subVal.DocumentID == currentId){
                console.log(subVal.ProgramDescription)
                }
            });
    });
    */
    //alert($stateParams.projName);
    //Get the Project Campaigns
    $http({
      method: "GET",
      //url: 'https://www.maainternational.org.au/rest/content/currentsite/defaultculture/all/our-projects/' + currentAllias + '?format=json',
      url: 'https://www.maainternational.org.au/rest/content/currentsite/defaultculture/all/our-projects/' + currentAllias + '?classnames=MAA.Campaign&columns=DocumentID,DocumentName,CampaignDescription,CampaignThumbnail,CampaignIsPublished&format=json',
      headers: {
        'Accept': 'application/json',
        "ContentType": "application/x-www-form-urlencoded",
        "authorization": "Basic bW9iaWxlYXBwdXNlckBtdXNsaW1haWQub3JnLmF1OmQkOSZ0QldBOFV3dkp6VQ==",
      }
    }).then(function successCallback(response) {
      console.log(response);
      $scope.data = response.data;
      angular.forEach($scope.data, function (value, key) {
        //$scope.data = value;
        $scope.campaigns = value;
      });
      $scope.spinner = false;  
      //$scope.ProgramDefaultProject = $scope.data[1].MAA_Program[0].ProgramDefaultProject;      
     // alert($scope.ProgramDefaultProject);
    }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      console.log(response);
    });

//Getting Program Details
$http({
  method: "GET",
  //url: 'https://www.maainternational.org.au/rest/content/currentsite/defaultculture/all/our-projects/' + currentAllias + '?format=json',
  url: 'https://www.maainternational.org.au/rest/content/currentsite/defaultculture/all/our-projects/'+currentAllias+'?classnames=MAA.Program&columns=DocumentName,ProgramDescription,Published,ProgramDefaultProject&format=json',
  headers: {
    'Accept': 'application/json',
    "ContentType": "application/x-www-form-urlencoded",
    "authorization": "Basic bW9iaWxlYXBwdXNlckBtdXNsaW1haWQub3JnLmF1OmQkOSZ0QldBOFV3dkp6VQ==",
  }
}).then(function successCallback(response) {
  console.log(response);
  $scope.data = response.data;
  angular.forEach($scope.data, function (value, key) {
    //$scope.data = value;
    $scope.program = value;
  });
//Get the Project Details
  $scope.spinner = false;  
  //$scope.ProgramDefaultProject = $scope.data[1].MAA_Program[0].ProgramDefaultProject;      
 // alert($scope.ProgramDefaultProject);
}, function errorCallback(response) {
  // called asynchronously if an error occurs
  // or server returns response with an error status.
  console.log(response);
});

    $scope.readfull = true;
    $scope.readless = false;
    $scope.numLimit = 450;
    $scope.readMore = function () {
      $scope.numLimit = 10000;
      $scope.readfull = false;
      $scope.readless = true;
    };
    $scope.readLess = function () {
      $scope.numLimit = 450;
      $scope.readfull = true;
      $scope.readless = false;
    };

    $scope.readfullCamp = true;
    $scope.readlessCamp = false;
    $scope.numLimitCamp = 450;
    $scope.readMoreCamp = function () {
      $scope.numLimitCamp = 10000;
      $scope.readfullCamp = false;
      $scope.readlessCamp = true;
    };
    $scope.readLessCamp = function () {
      $scope.numLimitCamp = 450;
      $scope.readfullCamp = true;
      $scope.readlessCamp = false;
    };

    $scope.expressDonateCamp = function (nodeID) {
      /*var options = {
        location: 'yes',
        clearcache: 'yes',
        toolbar: 'yes'
      };*/


var link= 'https://www.maainternational.org.au/donate-now?&campaign=' + nodeID;
window.open(link,'_system');


      /*$cordovaInAppBrowser.open('https://www.maainternational.org.au/donate-now?&campaign=' + nodeID, '_blank', options)
        .then(function (event) {
          // success
          $scope.donation.amount = 0;
        })
        .catch(function (event) {
          // error
        });*/

    };


    $ionicModal.fromTemplateUrl('templates/campaign.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function (modal) {
      $scope.modal = modal;
    });

    $scope.showCampaign = function (index) {
      $scope.indexofCamp = index;
      $scope.modal.show();
    };

    $scope.closeCampaign = function () {
      $scope.modal.hide();
      $scope.readfull = true;
    };

  })


  .controller('LocProjCtrl', function ($scope, $ionicModal, $cordovaInAppBrowser, $timeout, $stateParams, $http, apiTesting) {
    console.log('Local Project Controller');
    $scope.spinner = true;
    $scope.campaigns = null;
    $scope.program = null;
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

    //Getting Local Campaigns
    $http({
      method: "GET",
      //url: 'https://www.maanational.org.au/rest/content/currentsite/defaultculture/all/our-projects/' + currentAllias + '?format=json',
      url: 'https://www.maanational.org.au/rest/content/currentsite/defaultculture/all/our-projects/' + currentAllias + '?classnames=MAA.Campaign&columns=DocumentID,DocumentName,CampaignDescription,CampaignThumbnail,CampaignIsPublished&format=json',
      headers: {
        'Accept': 'application/json',
        "ContentType": "application/x-www-form-urlencoded",
        "authorization": "Basic bW9iaWxlYXBwdXNlckBtdXNsaW1haWQub3JnLmF1OmQkOSZ0QldBOFV3dkp6VQ==",
      }
    }).then(function successCallback(response) {
      console.log(response);
      
      $scope.data= response.data;
      angular.forEach($scope.data, function (value, key) {
      $scope.campaigns = value;
      
    });
    //alert($scope.data.length);
    $scope.spinner = false;
    }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      console.log(response);
    });

    //Getting Program Details
$http({
  method: "GET",
  //url: 'https://www.maainternational.org.au/rest/content/currentsite/defaultculture/all/our-projects/' + currentAllias + '?format=json',
  url: 'https://www.maanational.org.au/rest/content/currentsite/defaultculture/all/our-projects/'+currentAllias+'?classnames=MAA.Program&columns=DocumentName,ProgramDescription,Published,ProgramDefaultProject&format=json',
  headers: {
    'Accept': 'application/json',
    "ContentType": "application/x-www-form-urlencoded",
    "authorization": "Basic bW9iaWxlYXBwdXNlckBtdXNsaW1haWQub3JnLmF1OmQkOSZ0QldBOFV3dkp6VQ==",
  }
}).then(function successCallback(response) {
  console.log(response);
  $scope.data = response.data;
  angular.forEach($scope.data, function (value, key) {
    //$scope.data = value;
    $scope.program = value;
  });
//Get the Project Details
  $scope.spinner = false;  
  //$scope.ProgramDefaultProject = $scope.data[1].MAA_Program[0].ProgramDefaultProject;      
 // alert($scope.ProgramDefaultProject);
}, function errorCallback(response) {
  // called asynchronously if an error occurs
  // or server returns response with an error status.
  console.log(response);
});






    $scope.readfull = true;
    $scope.readless = false;
    $scope.numLimit = 450;
    $scope.readMore = function () {
      $scope.numLimit = 10000;
      $scope.readfull = false;
      $scope.readless = true;
    };
    $scope.readLess = function () {
      $scope.numLimit = 450;
      $scope.readfull = true;
      $scope.readless = false;
    };

    $scope.readfullCamp = true;
    $scope.readlessCamp = false;
    $scope.numLimitCamp = 450;
    $scope.readMoreCamp = function () {
      $scope.numLimitCamp = 10000;
      $scope.readfullCamp = false;
      $scope.readlessCamp = true;
    };
    $scope.readLessCamp = function () {
      $scope.numLimitCamp = 450;
      $scope.readfullCamp = true;
      $scope.readlessCamp = false;
    };

    $scope.expressDonateLocCamp = function (nodeID) {
      //alert(nodeID);
      /*var options = {
        location: 'yes',
        clearcache: 'yes',
        toolbar: 'yes'
      };*/


var link= 'https://www.maanational.org.au/donate-now?&campaign=' + nodeID;
window.open(link,'_system');


      /*$cordovaInAppBrowser.open('https://www.maanational.org.au/donate-now?&campaign=' + nodeID, '_blank', options)
        .then(function (event) {
          // success
          $scope.donation.amount = 0;
        })
        .catch(function (event) {
          // error
        });*/

    };


    $ionicModal.fromTemplateUrl('templates/localcamp.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function (modal) {
      $scope.modal = modal;
    });

    $scope.showCampaign = function (index) {
      $scope.indexofCamp = index;
      $scope.modal.show();
    };

    $scope.closeCampaign = function () {
      $scope.modal.hide();
      $scope.readfull = true;
    };

//Open an In-App browser with a link as parameter  
$scope.openBrowserlink = function (nodeID) {
//alert(nodeID);
      /*var options = {
        location: 'yes',
        clearcache: 'yes',
        toolbar: 'yes'
      };*/

var link=nodeID;
window.open(link,'_system');
      /*$cordovaInAppBrowser.open(nodeID, '_blank', options)
        .then(function (event) {
          // success
          $scope.donation.amount = 0;
        })
        .catch(function (event) {
          // error
        });*/

    };



  })

  .controller('aboutMaaCtrl', function ($scope, $ionicModal, $ionicPopover, $timeout, $http) {

    $ionicPopover.fromTemplateUrl('templates/locmenupopup.html', {
      scope: $scope
    }).then(function (popover) {
      $scope.popover = popover;
    });

    $scope.openPopover = function ($event) {
      $scope.popover.show($event);
    };
    $scope.closePopover = function ($event) {
      $scope.popover.hide($event);
    };
//Open an In-App browser with a link as parameter  
$scope.openBrowserlink = function (nodeID) {
//alert(nodeID);
      /*var options = {
        location: 'yes',
        clearcache: 'yes',
        toolbar: 'yes'
      };*/


var link=nodeID;
window.open(link,'_system');


      /*$cordovaInAppBrowser.open(nodeID, '_blank', options)
        .then(function (event) {
          // success
          $scope.donation.amount = 0;
        })
        .catch(function (event) {
          // error
        });*/

    };

    $scope.myAccount = function () {
      var options = {
        location: 'yes',
        clearcache: 'yes',
        toolbar: 'yes'
      };
    }
  })
