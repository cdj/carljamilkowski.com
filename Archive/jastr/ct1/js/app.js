angular.module('CT1', ['ionic'])

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
    .state('timelineView', {
      url: "/timelineView",
      templateUrl: "templates/timelineView.html",
      controller : "MainController"
    })
    .state('healthRiskWarning', {
      url: "/healthRiskWarning",
      templateUrl: "templates/healthRiskWarning.html",
      controller : "MainController"
    })
    .state('lightSensitive', {
      url: "/lightSensitive",
      templateUrl: "templates/lightSensitive.html",
      controller : "MainController"
    })
    .state('logLightSensitive', {
      url: "/logLightSensitive",
      templateUrl: "templates/logLightSensitive.html",
      controller : "MainController"
    })
    .state('effeciency', {
      url: "/effeciency",
      templateUrl: "templates/effeciency.html",
      controller : "MainController"
    })
    .state('progressTrends', {
      url: "/progressTrends",
      templateUrl: "templates/progressTrends.html",
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