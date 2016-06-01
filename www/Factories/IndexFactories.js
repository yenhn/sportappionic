(function(app){
	app.factory("News", function($firebaseArray){
		function GetAllNews(url){
			return $firebaseArray(new Firebase(url));
		}

		function GetDetailNews(url, id){
			return new Firebase(url + id);
		}

		return {
			getAllNews: GetAllNews,
			getDetail : GetDetailNews
		}
	})
}(angular.module('sportApp')));