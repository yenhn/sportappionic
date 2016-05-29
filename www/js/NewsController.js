(function(app){
	app.controller("NewsController", function($scope, $timeout, $ionicLoading, News){

		// Setup the loader
		$ionicLoading.show({
			content: 'Loading',
			animation: 'fade-in',
			showBackdrop: true,
			maxWidth: 200,
			showDelay: 0
		});

		
			
			var newsObject = News.getAllNews("https://sportappionic.firebaseio.com/news");
			newsObject.$loaded().then(function(){
				$ionicLoading.hide();
					var NewsItems = [];
					angular.forEach(newsObject, function(rsp){					
						NewsItems.push({
							Id: rsp.$id,
							Title: rsp.title,
							Content: rsp.content,
							Post_Date: rsp.post_date,
							ImageUrl: rsp.image
						})
											
					})				
					$scope.NewsItems = NewsItems;
				})
		

		/*$timeout(function(){
			$ionicLoading.hide();
			var newsObject = News.getAllNews("https://sportappionic.firebaseio.com/news");
			newsObject.$loaded().then(function(){
					var NewsItems = [];
					angular.forEach(newsObject, function(rsp){					
						NewsItems.push({
							Id: rsp.$id,
							Title: rsp.title,
							Content: rsp.content,
							Post_Date: rsp.post_date,
							ImageUrl: rsp.image
						})
											
					})				
					$scope.ListNews = NewsItems;
				})
		}, 2000)*/

		
	})
}(angular.module('sportApp')));