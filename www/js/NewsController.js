(function(app){
	app.controller("NewsController", function($scope, $timeout, $ionicLoading, News){

		// Setup the loader
		

		
			
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
								
					$scope.Items = NewsItems;
				})
	})

	app.controller("NewsDetailController", function($scope, $ionicLoading, $stateParams, News){
		$ionicLoading.show({
			content: 'Loading',
			animation: 'fade-in',
			showBackdrop: true,
			maxWidth: 200,
			showDelay: 0
		});
		var artical = News.getDetail("https://sportappionic.firebaseio.com/news/", $stateParams.id);

		artical.on("value", function(snapshot, prevChildKey){
			$ionicLoading.hide();
			var post = snapshot.val();
			$scope.Title = post.title;
			$scope.Post_Date = post.post_date;
			$scope.Content = post.content;
			$scope.ImageUrl = post.image;
			//TODO: render to HTML
		})
	})
}(angular.module('sportApp')));