angular.module('SV2', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('0LoC', {
      url: "/0LoC",
      templateUrl: "templates/0LoC.html",
      controller : "MainController"
    })
    .state('syncing', {
      url: "/syncing",
      templateUrl: "templates/syncing.html",
      controller : "MainController"
    })
    .state('volume', {
      url: "/volume",
      templateUrl: "templates/volume.html",
      controller : "MainController"
    })
    .state('temperature', {
      url: "/temperature",
      templateUrl: "templates/temperature.html",
      controller : "MainController"
    })
    .state('efficiency', {
      url: "/efficiency",
      templateUrl: "templates/efficiency.html",
      controller : "MainController"
    })
    .state('optimal', {
      url: "/optimal",
      templateUrl: "templates/optimal.html",
      controller : "MainController"
    })
    .state('patterns', {
      url: "/patterns",
      templateUrl: "templates/patterns.html",
      controller : "MainController"
    })
    .state('summary', {
      url: "/summary",
      templateUrl: "templates/summary.html",
      controller : "MainController"
    });

   $urlRouterProvider.otherwise("/0LoC");

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