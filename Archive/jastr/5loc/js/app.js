angular.module('5loc', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "templates/home.html",
      controller : "MainController"
    })
    .state('tab0', {
      url: "/tab0",
      templateUrl: "templates/tab0.html",
      controller : "TabController"
    })
    .state('tab1', {
      url: "/tab1",
      templateUrl: "templates/tab1.html",
      controller : "TabController"
    })
    .state('tab2', {
      url: "/tab2",
      templateUrl: "templates/tab2.html",
      controller : "TabController"
    })
    .state('tab3', {
      url: "/tab3",
      templateUrl: "templates/tab3.html",
      controller : "TabController"
    })
    .state('tab4', {
      url: "/tab4",
      templateUrl: "templates/tab4.html",
      controller : "TabController"
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
.controller('TabController', function($scope) {
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