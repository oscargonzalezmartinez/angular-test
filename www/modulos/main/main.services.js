app.service("MainService", function($http){
			
			this.getRecords = function(){
								return $http({
										method: 'GET',
										url: 'http://localhost:9000/list'
										});
			}//getRecords
			
			this.getDetail = function(id){
								return $http({
										method: 'GET',
										url: 'http://localhost:9000/get/'+id
										});
			}//getDetail
			
			this.buy = function(id){
								return $http({
										method: 'GET',
										url: 'http://localhost:9000/buy/'+id
										});
			}//getDetail
			
		}//myHttpServices


);	