(function(app){
	app.controller("ClubController", function($scope, $timeout, $ionicLoading, sportFactory, 
												$stateParams, $ionicSlideBoxDelegate, $interval){


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
		
		$scope.team_info = [];
		album.child("teams").orderByChild('player_id').equalTo($stateParams.id).on("value", function(snapshot){
			
			$ionicLoading.hide();

			var t = snapshot.val();
			if(t != null || t != 'undefined'){
				angular.forEach(t, function(rs){
					$scope.team_info.push({
						Club_image: rs.image_club,
						Years : rs.years,
						Club : rs.club,
						Active : rs.active,
						Goals : rs.goals,
						Awards : rs.awards
					});	
				});
				$scope.noData = false;
			}

			if(t == null || t == 'undefined') $scope.noData = true;			
		});

		$ionicSlideBoxDelegate.update();

			var intervalId = $interval( function() {
	        if( slideCounter < maxSlides) {

	            slideCounter++;
	            $ionicSlideBoxDelegate.update();
	        } else {	            
	            $interval.cancel(intervalId);
	        }
	    }, 500);
	})
		
}(angular.module('sportApp')));