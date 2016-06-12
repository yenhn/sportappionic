(function(app){
	app.factory("sportFactory", function($firebaseArray){
		function GetAllRecord(url){
			return $firebaseArray(new Firebase(url));
		}

		function GetDetailNews(url, id){
			return new Firebase(url + id);
		}

		function data(url){
			ref = new Firebase(url);
			
			return ref;
		}

		return {
			GetAll: GetAllRecord,
			getDetail : GetDetailNews,
			getData: data
		}
	})
}(angular.module('sportApp')));