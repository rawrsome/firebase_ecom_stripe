'use strict';

// *inject firebase.js module from cdn
var App = angular.module('myApp.home', ['ngRoute', 'firebase', 'angularPayments'])

var ref = new Firebase('https://ecom-angularfire.firebaseio.com/');

// ====> Declared route 
App.config(['$routeProvider', function($routeProvider, $window) {
    $routeProvider.when('/home', {
       templateUrl: 'home/home.html',
       controller: 'HomeCtrl'
    });
    Stripe.setPublishableKey('pk_test_ir3pQ7Xr2fy8TgUcYrDWXmkG');
}]);

// ====> Home controller
App.controller('HomeCtrl', [
   '$scope',
    function($scope, $http, stripe) {
      // Stripe Response Handler
  		$scope.stripeCallback = function(status, res) {
  		    if(res.error) {
  		        console.log('it failed! error: ' + res.error.message);
  		    } else {
  		        console.log('success! token: ' + res.id);
  		        console.log('status: ' + status);
  		        console.log(res);
  		    }
  		};
   	}
]);
// <==== end Home controller