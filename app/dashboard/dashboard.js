'use strict';

var App = angular.module('myApp.dashboard', [
	'ngRoute', 'firebase', 'mm.foundation', 'ngAnimate', 'angularSpinner'])


App.constant('FIREBASE_URI', "https://ecom-angularfire.firebaseio.com/");


// Declared route 
App.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/dashboard', {
        templateUrl: 'dashboard/dashboard.html',
        controller: 'DashboardCtrl'
    });
}])

// Register controller
App.controller('DashboardCtrl', [
	'$scope', 'ItemsService', '$modal',
	function($scope) {

	// $scope.newItem = { price: 0, title: '' };
	// $scope.currentItem = null;

	// $scope.items = ItemsService.getItems();

	// $scope.addItem = function() {
	// 	ItemsService.addItem(angular.copy($scope.newItem));
	// 	$scope.newItem = { price: 0, title: '' };
	// };

	// $scope.updateItem = function() {
	// 	ItemsService.updateItem(item);
	// };

	// $scope.removeItem = function() {
	// 	ItemsService.removeItem(item);
	// };
}]);

App.factory('ItemsService', ['$firebase', 'FIREBASE_URI', function($firebase, FIREBASE_URI) {
	// var ref = new Firebase(FIREBASE_URI);
	// var items = $firebase(ref);



	// var getItems = function() {
	// 	return items;
	// };

	// var addItem = function(item) {
	// 	items.push(item);
	// };

	// var updateItem = function (item) {

	// };

	// var removeItem = function(item) {
	// 	items.remove(function(i) {
	// 		return i['id'] == item.id;
	// 	});
	// };
	// return {
	// 	getItems: getItems,
	// 	addItem: addItem,
	// 	removeItem: removeItem
	// };
}]);