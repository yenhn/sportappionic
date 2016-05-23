(function(app){
	app.controller("NewsController", function($scope, News){
		var newsObject = News.getAllNews("https://yenhn.firebaseio.com/news");
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
	})
}(angular.module('sportApp')));