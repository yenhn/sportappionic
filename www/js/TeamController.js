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
		album.child("teams").orderByChild('player_id').equalTo($stateParams.id).on("child_added", function(snapshot){
			$ionicLoading.hide();
			var t = snapshot.val();
			/*var Club_image = t.club_image;
			var Years = t.years;
			var Club = t.club;
			var active = t.active;
			var Goals = t.goals;
			var Awards = t.awards;*/

			$scope.team_info.push({
				Club_image: t.image_club,
				Years : t.years,
				Club : t.club,
				Active : t.active,
				Goals : t.goals,
				Awards : t.awards
			});	
			console.log($scope.team_info)
		
		});

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
	})
		
}(angular.module('sportApp')));