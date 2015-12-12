angular.module('countriesApp')
	.factory('getCountries', function($http){
		return function(){
			return $http.get('http://api.geonames.org/countryInfoJSON?username=aavalkov');
		}
	})
	.controller('CountriesCtrl', ['$scope','getCountries','$location', function($scope, getCountries, $location){
		getCountries().then(function(response) {
			console.log(response);
            $scope.countries = response.data.geonames;
        });

        $scope.showCountry = function(country){
        	$location.path('/countries/'+ country.countryCode + '/capital');
        }

	}]);
