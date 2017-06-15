// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','starter.controllers','starter.services','starter.filters','ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    var notificationOpenedCallback = function(jsonData) {
    console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
  };

  window.plugins.OneSignal
    .startInit("5fc4ebfb-4eba-413f-97de-362ce5025984")
    .handleNotificationOpened(notificationOpenedCallback)
    .endInit();



    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
  $ionicConfigProvider.backButton.text('').icon('ion-chevron-left').previousTitleText(false);
  $stateProvider


    .state('home', {
      url: '/home',
      templateUrl: 'templates/home.html',
      controller: 'HomeCtrl'
    })


      .state('int', {
      url: '/int',
      templateUrl: 'templates/int.html',
      controller: 'IntCtrl'
    })

    .state('loc', {
      url: '/loc',
      templateUrl: 'templates/loc.html',
      controller: 'LocCtrl'
    })

    .state('project', {
      url: '/project/:projName',
      templateUrl: 'templates/project.html',
      controller: 'ProjCtrl'
    })

    .state('localproject', {
      url: '/localproject/:projName',
      templateUrl: 'templates/localproject.html',
      controller: 'LocProjCtrl'
    })
.state('aboutmaa', {
      url: '/aboutmaa',
      templateUrl: 'templates/aboutmaa.html',
      controller: 'aboutMaaCtrl'
    })


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home');
});
