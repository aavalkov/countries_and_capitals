describe("getCountry", function(){
	beforeEach(module('countriesApp'));

	beforeEach(inject(function($rootScope, _$route_){
		scope = $rootScope.$new();
		$route = _$route_;

	    $route.current = {
	      params: {
	        id: 'US'
	      }
	    };
  	}));

	it('should return the information for a country',
		inject(function(getCountry, $rootScope, $httpBackend, $route){
			$httpBackend.expect('GET', 'http://api.geonames.org/countryInfoJSON?country=US&username=aavalkov').respond(200);
			var status = false;
			getCountry("US").success(function(){
				status = true;
			});
			$rootScope.digest();
			$httpBackend.flush();
			expect(status).toBe(true);
			$httpBackend.verifyNoOutstandingRequest();
		}));
});
