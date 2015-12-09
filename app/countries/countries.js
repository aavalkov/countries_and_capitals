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
	.factory('getCountries', function($http){
		return function(){
			return $http.get('http://api.geonames.org/countryInfoJSON?username=aavalkov');
		}
	})
	.factory('getCapital', function($http, $route){
		return function(){
			return $http.get('http://api.geonames.org/search?q=capital&name='+ $route.current.params.country +'&isNameRequired=true&type=JSON&username=aavalkov');
		}
	})
	.controller('CountriesCtrl', ['$scope','getCountries','$location', function($scope, getCountries, $location){
		getCountries().then(function(response) {
			console.log(response);
            $scope.countries = response.data.geonames;
        });

        $scope.showCountry = function(country){
        	$location.path('/countries/'+ country.countryName + '/capital');
        }

	}])
	.controller('CountryCtrl', ['$scope','$route','getCapital', function($scope, $route, getCapital){
		getCapital().then(function(response) {
			console.log(response);
            $scope.capital = response.data.geonames[0];
        });

	}]);
