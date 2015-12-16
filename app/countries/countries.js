angular.module('countriesApp')
	.factory('getCountries', ['$q', '$http', function($q, $http) {
	  var c = {
	    cache: null,
	    get: function()  {
	      if (!c.cache) {
	        return $http.get('http://api.geonames.org/countryInfoJSON?username=aavalkov').then(function(response) {
	          c.cache = response.data.geonames;
	          return c.cache;
	        });
	      }
	      var deferred = $q.defer();
	      deferred.resolve(c.cache);
	      return deferred.promise;
	    }
	  };
	  return c;
	}])
	.controller('CountriesCtrl', ['$rootScope','$scope','getCountries','$location', function($rootScope, $scope, getCountries, $location){
		getCountries.get().then(function(response) {
			$rootScope.isLoading = false;
            $scope.countries = response;
        });

        $scope.showCountry = function(country){
        	$location.path('/countries/'+ country.countryCode + '/capital');
        }
	}]);
