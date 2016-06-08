(function(app){
	
	app.directive('slides',function(){
		return{
			restrict: 'AE',
			templateUrl: 'templates/tabtemplate/albums/slide.html'			
		}
	});
		
}(angular.module('sportApp')));//end directive.