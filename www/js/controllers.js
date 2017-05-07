angular.module('starter.controllers', [])

  .controller('HomeCtrl', function ($scope, $cordovaInAppBrowser, $timeout, $cordovaProgress, $cordovaSpinnerDialog, $rootScope, $ionicLoading, $ionicModal, $timeout) {
    var options = {
      location: 'no',
      clearcache: 'yes',
      toolbar: 'yes'
    };

    $scope.openBrowser = function () {


      $cordovaInAppBrowser.open('http://www.muslimaid.org.au/donate-now', '_blank', options).then(function () {

      }, function (error) {
        console.log("Error: " + error);
      });

      $rootScope.$on('$cordovaInAppBrowser:loadstart', function (e, event) {
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
      });

    }


  })

  .controller('IntCtrl', function ($scope, $ionicModal, $ionicPopover, $cordovaInAppBrowser, $timeout, $location, apiTesting, $ionicScrollDelegate) {
    console.log('international Controller');
    $scope.removeProjects = [28, 27, 517];
    $scope.spinner = true;
    apiTesting.get_maa.get().$promise.then(function (data) {
      //console.log(data.cms_documents[0]);
      $scope.programs = data.cms_documents[0].MAA_Program;
      //console.log(data.cms_documents[1]);
      
     /* $scope.programs[0].image = 'img/MAA-Icons-RGB_2016_Emergency_OR.png';
      $scope.programs[1].image = 'img/MAA-Icons-RGB_2016_Food_OO.png';
      $scope.programs[2].image = 'img/MAA-Icons-RGB_2016_Orphan_OP.png';
      $scope.programs[3].image = 'img/MAA-Icons-RGB_2016_Ramadan_OG.png';
      $scope.programs[4].image = 'img/MAA-Icons-RGB_2016_Qurban_OB.png';
      $scope.programs[5].image = 'img/MAA-Icons-RGB_2016_Aqiqah_BP.png';
      $scope.programs[6].image = 'img/MAA-Icons-RGB_2016_Water_OB.png';
      $scope.programs[7].image = 'img/MAA-Icons-RGB_2016_Health_OP.png';
      $scope.programs[8].image = 'img/MAA-Icons-RGB_2016_Education_OB.png';
      $scope.programs[9].image = 'img/MAA-Icons-RGB_2016_Shelter_OB.png';
      $scope.programs[10].image = 'img/MAA-Icons-RGB_2016_Sustainability_OG.png';
      $scope.programs[11].image = 'img/MAA-Icons-RGB_2016_Waqf_OY.png';*/

      //Remove unwanted projects
      for (i = 0; i <= $scope.programs.length - 1; i++) {
        if ($scope.removeProjects.indexOf($scope.programs[i].DocumentID) != -1) {
          // alert('found ' + $scope.programs[i].DocumentID);
          $scope.programs.splice(i, i);
        }
      }

      console.log($scope.programs);
      $scope.spinner = false;
    });
    $scope.test = 'Global'
    $scope.go = function (path) {
      $location.path(path);
    };

    $scope.phoneNumber = "tel:+1-1800-555-5555";

    $scope.donation = {};

    $scope.expressDonate = function () {

      var options = {
        location: 'no',
        clearcache: 'yes',
        toolbar: 'yes'
      };

      $cordovaInAppBrowser.open('http://uat.muslimaid.org.au/donate-now?campaign=201&amount=' + $scope.donation.amount, '_blank', options)
        .then(function (event) {
          // success
          $scope.donation.amount = 0;
        })
        .catch(function (event) {
          // error
        });

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


      var options = {
        location: 'yes',
        clearcache: 'yes',
        toolbar: 'yes'
      };

      $cordovaInAppBrowser.open('http://uat.muslimaid.org.au/donate-now?&campaign=' + nodeID, '_blank', options)
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
      var options = {
        location: 'no',
        clearcache: 'yes',
        toolbar: 'yes'
      };

      $cordovaInAppBrowser.open('https://uat.muslimaid.org.au/donor-portal/edit-account', '_blank', options)
        //$cordovaInAppBrowser.open('https://uat.muslimaid.org.au/sign-in-register','_blank', options)
        .then(function (event) {
          // success
          $scope.donation.amount = 0;
        })
        .catch(function (event) {
          // error
        });

    };
    //Donation Summary
    $scope.donationSummary = function () {

      var options = {
        location: 'no',
        clearcache: 'yes',
        toolbar: 'yes'
      };
      $cordovaInAppBrowser.open('https://uat.muslimaid.org.au/donate-now/your-donation-summary', '_blank', options)
        //$cordovaInAppBrowser.open('https://uat.local.muslimaid.org.au/sign-in-register','_blank', options)
        .then(function (event) {
          // success
          $scope.donation.amount = 0;
        })
        .catch(function (event) {
          // error
        });

    };

    //Scroll To a section
    $scope.scrollTo = function (target) {
      $location.hash(target);   //set the location hash
      var handle = $ionicScrollDelegate.$getByHandle('myPageDelegate');
      handle.anchorScroll(true);  // 'true' for animation
    };


    //$cordovaInAppBrowser.close();
  })

  .controller('LocCtrl', function ($scope, $ionicModal, $ionicPopover, $cordovaInAppBrowser, $timeout, $location, apiTesting, $ionicScrollDelegate) {
    console.log('Local Controller');
    $scope.removeProjects = [27, 28, 622, 623, 650];
    $scope.spinner = true;
    apiTesting.get_maa_local.get().$promise.then(function (data) {
      $scope.programs = data.cms_documents[0].MAA_Program;
      /*$scope.programs[0].image = 'img/default.png';
      $scope.programs[1].image = 'img/default.png';
      $scope.programs[2].image = 'img/MAA_Nationa_Icons_RGB_Aged Care_OP.png';
      $scope.programs[3].image = 'img/MAA_Nationa_Icons_RGB_Community Education_OP.png';
      $scope.programs[4].image = 'img/MAA_Nationa_Icons_RGB_Health_OB.png';
      $scope.programs[5].image = 'img/MAA_Nationa_Icons_RGB_Emergency_OB.png';
      $scope.programs[6].image = 'img/MAA_Nationa_Icons_RGB_Homeless Support_OB.png';
      $scope.programs[7].image = 'img/MAA_Nationa_Icons_RGB_Indigenous_OB.png';
      $scope.programs[8].image = 'img/MAA_Nationa_Icons_RGB_Special Needs_BB.png';
      $scope.programs[9].image = 'img/MAA_Nationa_Icons_RGB_Sustainable Development_OG.png';
      $scope.programs[10].image = 'img/MAA_Nationa_Icons_RGB_Youth Development_OY.png';
      $scope.programs[11].image = 'img/MAA_Nationa_Icons_RGB_Emergency_OR.png';*/

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
    });
    $scope.test = 'Global'
    $scope.go = function (path) {
      $location.path(path);
    };

    $scope.phoneNumber = "tel:+1-1800-555-5555";

    $scope.donation = {};

    $scope.expressDonate = function () {

      var options = {
        location: 'no',
        clearcache: 'yes',
        toolbar: 'yes'
      };

      $cordovaInAppBrowser.open('http://uat.local.muslimaid.org.au/donate-now?campaign=201&amount=' + $scope.donation.amount, '_blank', options)
        .then(function (event) {
          // success
          $scope.donation.amount = 0;
        })
        .catch(function (event) {
          // error
        });

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

      var options = {
        location: 'yes',
        clearcache: 'yes',
        toolbar: 'yes'
      };

      $cordovaInAppBrowser.open('http://uat.local.muslimaid.org.au/donate-now?&campaign=' + nodeID, '_blank', options)
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
      var options = {
        location: 'no',
        clearcache: 'yes',
        toolbar: 'yes'
      };
      $cordovaInAppBrowser.open('https://uat.muslimaid.org.au/donor-portal/edit-account', '_blank', options)
        //$cordovaInAppBrowser.open('https://uat.local.muslimaid.org.au/sign-in-register','_blank', options)
        .then(function (event) {
          // success
          $scope.donation.amount = 0;
        })
        .catch(function (event) {
          // error
        });

    };



    //Donation Summary
    $scope.donationSummary = function () {

      var options = {
        location: 'no',
        clearcache: 'yes',
        toolbar: 'yes'
      };
      $cordovaInAppBrowser.open('https://uat.muslimaid.org.au/donate-now/your-donation-summary', '_blank', options)
        //$cordovaInAppBrowser.open('https://uat.local.muslimaid.org.au/sign-in-register','_blank', options)
        .then(function (event) {
          // success
          $scope.donation.amount = 0;
        })
        .catch(function (event) {
          // error
        });

    };


    //Scroll To a section
    $scope.scrollTo = function (target) {
      $location.hash(target);   //set the location hash
      var handle = $ionicScrollDelegate.$getByHandle('myPageDelegates');
      handle.anchorScroll(true);  // 'true' for animation
    };


    //$cordovaInAppBrowser.close();*/




  })


  .controller('ProjCtrl', function ($scope, $cordovaInAppBrowser, $ionicModal, $timeout, $stateParams, $http, apiTesting) {
    console.log('Project Controller');
    $scope.spinner = true;
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
    });*/
    //alert($stateParams.projName);
    $http({
      method: "GET",
      url: 'http://uat.muslimaid.org.au/rest/content/currentsite/defaultculture/all/our-projects/' + currentAllias + '?format=json&hash=62b48041372be811fdbd0ed260d0858439f28005f7931a44ed64f54763f7044f',
      headers: {
        'Accept': 'application/json',
        "ContentType": "application/x-www-form-urlencoded",
        "authorization": "Basic d2FrcWFzYWhtZWRAZ21haWwuY29tOmQkOSZ0QldBOFV3dkp6VQ==",
      }
    }).then(function successCallback(response) {
      console.log(response);
      $scope.spinner = false;
      $scope.hello = response.data;
      
      angular.forEach($scope.hello, function (value, key) {
        $scope.data = value;
      });
      
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
      var options = {
        location: 'yes',
        clearcache: 'yes',
        toolbar: 'yes'
      };

      $cordovaInAppBrowser.open('http://uat.muslimaid.org.au/donate-now?&campaign=' + nodeID, '_blank', options)
        .then(function (event) {
          // success
          $scope.donation.amount = 0;
        })
        .catch(function (event) {
          // error
        });

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
      url: 'http://uat.local.muslimaid.org.au/rest/content/currentsite/defaultculture/all/our-projects/' + currentAllias + '?format=json&hash=4ebd29d8d97fca7676fa6a45a5b2c0bf522aff3ddba68ec571dcd4b9fd836d99',
      headers: {
        'Accept': 'application/json',
        "ContentType": "application/x-www-form-urlencoded",
        "authorization": "Basic d2FrcWFzYWhtZWRAZ21haWwuY29tOmQkOSZ0QldBOFV3dkp6VQ==",
      }
    }).then(function successCallback(response) {
      console.log(response);
      $scope.spinner = false;
      $scope.hello = response.data;
      angular.forEach($scope.hello, function (value, key) {
        $scope.data = value;
      });
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
      var options = {
        location: 'yes',
        clearcache: 'yes',
        toolbar: 'yes'
      };

      $cordovaInAppBrowser.open('http://uat.local.muslimaid.org.au/donate-now?&campaign=' + nodeID, '_blank', options)
        .then(function (event) {
          // success
          $scope.donation.amount = 0;
        })
        .catch(function (event) {
          // error
        });

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

    $scope.myAccount = function () {
      var options = {
        location: 'no',
        clearcache: 'yes',
        toolbar: 'yes'
      };
    }
  })
