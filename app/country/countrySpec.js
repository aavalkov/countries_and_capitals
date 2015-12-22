describe("getCountry", function(){
	beforeEach(module('countriesApp'));

	it('should return the information for a country',
		inject(function(getCountry, $rootScope, $httpBackend){
			$httpBackend.expect('GET', 'http://api.geonames.org/countryInfoJSON?country=US&username=aavalkov').respond(200);
			var status = fasle;
			getCountry("US").success(function(){
				status = true;
			});
			$rootScope.digest();
			$httpBackend.flush();
			expect(status).toBe(true);
			$httpBackend.verifyNoOutstandingRequest();
		}));
});
