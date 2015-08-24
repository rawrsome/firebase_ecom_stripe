'use strict';

var App = angular.module('myApp.dashboard', [
	'ngRoute', 'firebase', 'mm.foundation', 'ngAnimate', 'angularSpinner']);




// ====> Declared route 
App.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/dashboard', {
        templateUrl: 'dashboard/dashboard.html',
        controller: 'DashboardCtrl'
    });
}]);

// ====> Dahsboard controller
App.controller("DashboardCtrl", ['$scope', '$firebaseObject', 
	function($scope, $firebaseObject) {
		
		var ref = new Firebase('https://ecom-angularfire.firebaseio.com/products');

		// Sync with Firebase object
		var syncObject = $firebaseObject(ref);

		// adding 3 way binding
		syncObject.$bindTo($scope, 'products');
	}]);
// <==== end Dashboard controller