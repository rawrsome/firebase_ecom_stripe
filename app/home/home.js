'use strict';

// *inject firebase.js module from cdn
var App = angular.module('myApp.home', [
    'ngRoute', 'firebase', 'angularPayments',
    'mm.foundation', 'ngAnimate', 'angularSpinner'
]);


// ====> Declared route 
App.config(['$routeProvider', function($routeProvider, $window) {
  $routeProvider.when('/home', {
      templateUrl: 'home/home.html',
      controller: 'HomeCtrl'
  });
   // stripe key
  Stripe.setPublishableKey('pk_test_ir3pQ7Xr2fy8TgUcYrDWXmkG');
}]);

// ====> Home controller
App.controller('HomeCtrl', [
   '$scope', '$firebaseObject', '$modal',
   function($scope, $firebaseObject, $modal, stripe) {

      var ref = new Firebase('https://ecom-angularfire.firebaseio.com/');
      // cart array
      $scope.cart = [];

      // binding products Object in firebase
      $scope.products = $firebaseObject(ref.child('products'));
      console.log($scope.products);

      // add to cart and push into an array
      $scope.addToCart = function(product) {
         var found = false;
         $scope.cart.forEach(function(item) {
            if (item.id === product.id) {
                item.quantity++;
                found = true;
            }
         });
         if (!found) {
            $scope.cart.push(angular.extend({
                quantity: 1
            }, product));
         }
      };

      // get price of cart
      $scope.getCartPrice = function() {
          var total = 0;
          $scope.cart.forEach(function(product) {
            total += product.price * product.quantity;
          });
          return total;
      };

      // checkout modal
      $scope.checkOut = function() {
        console.log('Launching modal ==>');
        var modalInstance = $modal.open({
          templateUrl: 'checkout/checkout.html',
          controller: 'CheckoutCtrl',
          resolve: {
            totalAmount: $scope.getCartPrice
          }
        })
      };
   }
]);
// <==== end Home controller


// ====> Checkout controller
 App.controller('CheckoutCtrl', function($scope, $modalInstance, totalAmount) {
    $scope.totalAmount = totalAmount;

    $scope.onSubmit = function() {
      $scope.processing = true;
    };

    $scope.stripeCallback = function(status, res) {
      $scope.processing = false;
      $scope.hideAlerts();
      if (res.error) {
        console.log(res.error.message);
        $scope.stripeError = res.error.message;
      } else {
        console.log(res);
        $scope.stripeToken = res.id;
      }
    };

    $scope.hideAlerts = function () {
      $scope.stripeError = null;
      $scope.stripeToken = null;
    };
  });
// <==== ebd Checkout controller