(function(app){
	app.controller("AlbumController", function($scope, sportFactory, $ionicLoading, $ionicSlideBoxDelegate, $interval){
		$ionicLoading.show({
			content: 'Loading',
			animation: 'fade-in',
			showBackdrop: true,
			maxWidth: 200,
			showDelay: 0
		});

		var maxSlides = 5;
    	var slideCounter = 2;

		var album = sportFactory.getData("https://sportappionic.firebaseio.com/");
		$scope.album_player = [];
		album.child("albums").orderByChild('player_id').equalTo("01").on("child_added", function(snapshot){
			$ionicLoading.hide();
			var ab = snapshot.val();
			var image = ab.Images;
			var date = ab.date;
			//$scope.album_player.push({image})
			$scope.album_player.push({Images: image, Date: date})
			/*console.log(image);*/
			console.log($scope.album_player)
		})
		$ionicSlideBoxDelegate.update();

		var intervalId = $interval( function() {


        if( slideCounter < maxSlides) {

            slideCounter++;
            console.log('Adding a slide');
            

            $ionicSlideBoxDelegate.update();
        } else {
            console.log('All full!');
            $interval.cancel(intervalId);
        }
    }, 3000);
		

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