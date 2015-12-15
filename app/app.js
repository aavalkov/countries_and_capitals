angular.module('countriesApp', ['ngRoute'])
	.config(function($routeProvider){
		$routeProvider.when('/', {
			templateUrl: 'home/home.html',
			controller: 'HomeCtrl'
		}).when('/countries', {
			templateUrl: 'countries/countries.html',
			controller:'CountriesCtrl'
		}).when("/countries/:country/capital", {
		    templateUrl : "./country/country.html",
		    controller : 'CountryCtrl'
		})
	})
	.run(function($rootScope, $location, $timeout){
		$rootScope.$on('$routeChangeError', function() {
        	$location.path("/error");
	    });
	    $rootScope.$on('$routeChangeStart', function() {
	        $rootScope.isLoading = true;
	    });
	})