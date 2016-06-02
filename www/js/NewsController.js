(function(app){
	app.controller("NewsController", function($scope, $timeout, $ionicLoading, sportFactory){

		// Setup the loader
		$ionicLoading.show({
			content: 'Loading',
			animation: 'fade-in',
			showBackdrop: true,
			maxWidth: 200,
			showDelay: 0
		});

	
		
		var articles = sportFactory.GetAll("https://sportappionic.firebaseio.com/news");

		articles.$loaded().then(function(){
			$ionicLoading.hide();
			post_item = [];
			angular.forEach(articles, function(rsp){
				post_item.push({
					Id: rsp.$id,
					Title: rsp.title,
					Content: rsp.content,
					Post_Date: rsp.post_date,
					ImageUrl: rsp.image
				})				
			})	

			$scope.Items = post_item;
	
		})

		
	})

	app.controller("NewsDetailController", function($scope, $ionicLoading, $stateParams, sportFactory){
		$ionicLoading.show({
			content: 'Loading',
			animation: 'fade-in',
			showBackdrop: true,
			maxWidth: 200,
			showDelay: 0
		});
		var artical = sportFactory.getDetail("https://sportappionic.firebaseio.com/news/", $stateParams.id);

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