(function(app){
	app.factory("sportFactory", function($firebaseArray){
		function GetAllRecord(url){
			return $firebaseArray(new Firebase(url));
		}

		function GetDetailNews(url, id){
			return new Firebase(url + id);
		}

		return {
			GetAll: GetAllRecord,
			getDetail : GetDetailNews
		}
	})
}(angular.module('sportApp')));