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
		var color = ['#903823', '#0084c4', '#1a1b36', '#fad157', '#43bf87', '#14b9d6', '#F27935'];

		ladder.$loaded().then(function(){
			$ionicLoading.hide();
			var teams = [];
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



			});

			$scope.Items = teams;
			console.log(teams);
	
		})
	})
}(angular.module('sportApp')));