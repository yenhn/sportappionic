(function(app){
	app.controller("AlbumController", function($scope, sportFactory, $ionicLoading, $ionicSlideBoxDelegate, $interval, $stateParams){
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
			

			album.child("albums").orderByChild('player_id').equalTo($stateParams.id).on("value", function(snapshot){
				$ionicLoading.hide();

				var ab = snapshot.val();

				if(ab != null || ab != 'undefined'){
					$scope.album_player = ab;
					$scope.noData = false;	
				}

				if(ab==null){					
					$scope.noData = true;
				}
				
				
			});
		

		$ionicSlideBoxDelegate.update();
			var intervalId = $interval( function() {
	        if( slideCounter < maxSlides) {
	            slideCounter++;  
	            $ionicSlideBoxDelegate.update();
	        } else {            
	            $interval.cancel(intervalId);
	        }
	    }, 1000);
		

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