angular.module('CT2', ['ionic'])

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
    .state('activityLevels', {
      url: "/activityLevels",
      templateUrl: "templates/activityLevels.html",
      controller : "MainController"
    })
    .state('notes', {
      url: "/notes",
      templateUrl: "templates/notes.html",
      controller : "NotesController"
    })
    .state('logPainLevels', {
      url: "/logPainLevels",
      templateUrl: "templates/logPainLevels.html",
      controller : "MainController"
    })
    .state('sleepPatterns', {
      url: "/sleepPatterns",
      templateUrl: "templates/sleepPatterns.html",
      controller : "MainController"
    })
    .state('sleepVPainLevels', {
      url: "/sleepVPainLevels",
      templateUrl: "templates/sleepVPainLevels.html",
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
.directive('focusMe', function($timeout) {
  return {
    link: function(scope, element, attrs) {
      $timeout(function() {
        element[0].focus();
      }, 750);
    }
  };
})

.controller('AppController', function($scope) {
  console.log('In App Controller');
})
.controller('MainController', function($scope) {
})
.controller('NotesController', function($scope) {
  document.getElementById("notesTextArea").value = notesText;
  console.log(notesText);
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