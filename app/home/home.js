angular.module('countriesApp')
	.controller('HomeCtrl', ['$rootScope', '$scope', function($rootScope, $scope){
		$rootScope.isLoading = false;
	}]);
