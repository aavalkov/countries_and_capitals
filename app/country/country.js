// angular.module('countriesApp', ['ngRoute'])
// 	.config(function($routeProvider){
// 		$routeProvider.when("/countries/:country/capital", {
// 		    templateUrl : "./country/country.html",
// 		    controller : 'CountryCtrl'
// 		})
// 	})
// 	.factory('getCapital', function($http, $route){
// 		return function(){
// 			$http.get('http://api.geonames.org/search?q=capital&name='+ $route.current.params.country +'&isNameRequired=true&username=aavalkov');
// 		}
// 	})
// 	.controller('CountryCtrl', ['$scope','$route','getCapital', function($scope, $route, getCapital){
// 		getCapital().then(function(response) {
// 			console.log(response);
//             $scope.capital = response.data.geonames;
//         });

// 	}]);


