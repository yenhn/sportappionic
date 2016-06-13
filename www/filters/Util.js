(function(app){
	
	app.filter("plainText", function(){
		return function(text){
			return text ? String(text).replace(/<[^>]+>/gm, '') : '';
		};
	})
		
}(angular.module('sportApp')));