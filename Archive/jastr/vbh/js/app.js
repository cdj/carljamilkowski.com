angular.module('VBH', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "templates/home.html",
      controller : "MainController"
    })
    .state('screen1', {
      url: "/screen1",
      templateUrl: "templates/screen1.html",
      controller : "MainController"
    })
    .state('screen2', {
      url: "/screen2",
      templateUrl: "templates/screen2.html",
      controller : "MainController"
    })
    .state('screen3', {
      url: "/screen3",
      templateUrl: "templates/screen3.html",
      controller : "MainController"
    })
    .state('screen4', {
      url: "/screen4",
      templateUrl: "templates/screen4.html",
      controller : "MainController"
    })
    .state('screen5', {
      url: "/screen5",
      templateUrl: "templates/screen5.html",
      controller : "MainController"
    })
    .state('screen6', {
      url: "/screen6",
      templateUrl: "templates/screen6.html",
      controller : "MainController"
    })
    .state('screen7', {
      url: "/screen7",
      templateUrl: "templates/screen7.html",
      controller : "MainController"
    })
    .state('screen8', {
      url: "/screen8",
      templateUrl: "templates/screen8.html",
      controller : "MainController"
    })
    .state('screen9', {
      url: "/screen9",
      templateUrl: "templates/screen9.html",
      controller : "MainController"
    })
    .state('screen10', {
      url: "/screen10",
      templateUrl: "templates/screen10.html",
      controller : "MainController"
    })
    .state('end', {
      url: "/end",
      templateUrl: "templates/end.html",
      controller : "MainController"
    });

   $urlRouterProvider.otherwise("/home");

})

.directive('dragBack', function($ionicGesture, $state) {
  return {
    restrict : 'A',
    link : function(scope, elem, attr) {
      $ionicGesture.on('swipe', function(event) {
        console.log('Got swiped!');
        event.preventDefault();
        window.history.back();
      }, elem);
    }
  }
})

.controller('AppController', function($scope) {
  console.log('In App Controller');
})
.controller('MainController', function($scope) {
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
  });
});