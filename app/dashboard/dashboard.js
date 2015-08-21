'use strict';

var App = angular.module('myApp.dashboard', ['ngRoute', 'firebase'])

var ref = new Firebase("https://ecom-angularfire.firebaseio.com");

// Declared route 
App.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/dashboard', {
        templateUrl: 'dashboard/dashboard.html',
        controller: 'DashboardCtrl'
    });
}])

// Register controller
App.controller('DashboardCtrl', ['$scope', function($scope) {


}]);