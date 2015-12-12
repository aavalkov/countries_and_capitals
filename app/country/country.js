angular.module('countriesApp')
	.factory('getCountry', function($http, $route){
		return function(){
			return $http.get('http://api.geonames.org/countryInfoJSON?country='+$route.current.params.country+'&username=aavalkov');
		}
	})
	.factory('getCapital', function($http, $route){
		return function(capital){
			return $http.get('http://api.geonames.org/search?q='+capital+'&name_equals='+ capital +'&country='+ $route.current.params.country +'&isNameRequired=true&type=JSON&username=aavalkov');
		}
	})
	.factory('getNeighbors', function($http, $route){
		return function(){
			return $http.get('http://api.geonames.org/neighbours?country='+$route.current.params.country+'&type=JSON&username=aavalkov');
		}
	})
	.controller('CountryCtrl', ['$scope','$route','getCountry', 'getCapital', 'getNeighbors', '$location', function($scope, $route, getCountry, getCapital, getNeighbors, $location){
		getCountry().then(function(response){
			$scope.country = response.data.geonames[0];
			var capital = $scope.country.capital;

			getCapital(capital).then(function(response) {
	            $scope.capital = response.data.geonames[0];
	        });
		});
        getNeighbors().then(function(response){
        	$scope.neighbors = response.data.geonames;
        	console.log($scope.neighbors);
        });

        $scope.showNeighbor = function(country){
        	$location.path('/countries/'+ country.countryCode + '/capital');
        }
	}]);


