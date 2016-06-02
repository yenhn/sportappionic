(function(app){
	app.controller("LadderController", function($scope, sportFactory, $ionicLoading){
		$ionicLoading.show({
			content: 'Loading',
			animation: 'fade-in',
			showBackdrop: true,
			maxWidth: 200,
			showDelay: 0
		});

		var ladder = sportFactory.GetAll("https://sportappionic.firebaseio.com/ladders");

		ladder.$loaded().then(function(){
			$ionicLoading.hide();
			teams = [];
			angular.forEach(ladder, function(rsp){
				teams.push({
					Logo: rsp.logo,
					TeamName: rsp.nameteam,
					Point: (rsp.won * 3) + rsp.draws,
					Plays: rsp.won + rsp.lost + rsp.draws,
					Won: rsp.won,
					Lost: rsp.lost,
					Draws: rsp.draws,
					Background: rsp.background
				})				
			})	

			$scope.Items = teams;
	
		})
	})
}(angular.module('sportApp')));