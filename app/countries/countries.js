angular.module('countriesApp')
	.factory('getCountries', function($http){
		return function(){
			return $http.get('http://api.geonames.org/countryInfoJSON?username=aavalkov');
		}
	})

	.controller('CountriesCtrl', ['$rootScope','$scope','getCountries','$location', function($rootScope, $scope, getCountries, $location){
		getCountries().then(function(response) {
			$rootScope.isLoading = false;
            $scope.countries = response.data.geonames;
        });

        $scope.showCountry = function(country){
        	$location.path('/countries/'+ country.countryCode + '/capital');
        }

	}]);


