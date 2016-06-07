(function(app){
	app.controller("AlbumController", function($scope, sportFactory, $ionicLoading){
		$ionicLoading.show({
			content: 'Loading',
			animation: 'fade-in',
			showBackdrop: true,
			maxWidth: 200,
			showDelay: 0
		});

		var album = sportFactory.getData("https://sportappionic.firebaseio.com/");
		$scope.album_player = [];
		album.child("albums").orderByChild('player_id').equalTo("01").on("child_added", function(snapshot){
			$ionicLoading.hide();
			var ab = snapshot.val();
			var image = ab.Images;
			var date = ab.Date;
			//$scope.album_player.push({image})
			$scope.album_player.push({Images: image, Date: date})
			/*console.log(image);*/
			//console.log($scope.album_player)
		})

		

		/*ladder.$loaded().then(function(){
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
	
		})*/
	})
}(angular.module('sportApp')));