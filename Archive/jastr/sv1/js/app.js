angular.module('SV1', ['ionic'])

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
    .state('monthlyGoals', {
      url: "/monthlyGoals",
      templateUrl: "templates/monthlyGoals.html",
      controller : "MainController"
    })
    .state('progress', {
      url: "/progress",
      templateUrl: "templates/progress.html",
      controller : "MainController"
    })
    .state('preferences', {
      url: "/preferences",
      templateUrl: "templates/preferences.html",
      controller : "MainController"
    })
    .state('lowWarning', {
      url: "/lowWarning",
      templateUrl: "templates/lowWarning.html",
      controller : "MainController"
    })
    .state('goals', {
      url: "/goals",
      templateUrl: "templates/goals.html",
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