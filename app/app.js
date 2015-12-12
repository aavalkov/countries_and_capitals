angular.module('countriesApp', ['ngRoute'])
	.config(function($routeProvider){
		$routeProvider.when('/', {
			templateUrl: 'home/home.html',
		}).when('/countries', {
			templateUrl: 'countries/countries.html',
			controller:'CountriesCtrl'
		}).when("/countries/:country/capital", {
		    templateUrl : "./country/country.html",
		    controller : 'CountryCtrl'
		})
	})