(function(app){
	app.factory("News", function($firebaseArray){
		function GetAllNews(url){
			return $firebaseArray(new Firebase(url));
		}

		function GetDetailNews(id){
			return "ID :" + id
		}

		return {
			getAllNews: GetAllNews,
			age : GetDetailNews
		}
	})
}(angular.module('sportApp')));