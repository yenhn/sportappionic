(function(app){
	app.factory("Team", function($firebaseArray){
		function GetTeambyTeamName(url){
			return $firebaseArray(new Firebase(url));
		}

		return {
			GetTeambyTeamName: GetTeambyTeamName
		}
	})
}(angular.module('sportApp')));