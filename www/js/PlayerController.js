(function(app){
	app.controller("PlayerController", function($scope, $timeout, $ionicLoading, Team){

		// Setup the loader
		$ionicLoading.show({
			content: 'Loading',
			animation: 'fade-in',
			showBackdrop: true,
			maxWidth: 200,
			showDelay: 0
		});

		
		var teamObject = Team.GetTeambyTeamName("https://sportappionic.firebaseio.com/players");
		
		teamObject.$loaded().then(function(){
			$ionicLoading.hide();
			var teams = [];
			var def = [];
			var gk = [];
			var md = [];
			var fw = [];
			
			angular.forEach(teamObject, function(rsp){

				if(rsp.position == 'GK')
				{
					
					gk.push({
						Id : rsp.$id,
						fullname: rsp.fullname,
						Position: rsp.position,
						No_Player: rsp.noplayer,
						ImagePlayer: rsp.imageplayer
					})
					$scope.GK = gk;
				}

				if(rsp.position == 'DEF')
				{
					
				
					def.push({
						Id : rsp.$id,
						fullname: rsp.fullname,
						Position: rsp.position,
						No_Player: rsp.noplayer,
						ImagePlayer: rsp.imageplayer
					})
					
					$scope.DEF = def;
				}

				if(rsp.position == 'MD')
				{
					
					
						md.push({
							Id : rsp.$id,
							fullname: rsp.fullname,
							Position: rsp.position,
							No_Player: rsp.noplayer,
							ImagePlayer: rsp.imageplayer
						})
					
					$scope.MD = md;
				}

				if(rsp.position == 'FW')
				{
					
					
						fw.push({
							Id : rsp.$id,
							fullname: rsp.fullname,
							Position: rsp.position,
							No_Player: rsp.noplayer,
							ImagePlayer: rsp.imageplayer
						})
					
					$scope.FW = fw;
				}
			})
		});
			
		
	})

	app.controller("DetailPlayerController", function($scope, sportFactory, $ionicLoading, $stateParams){
		$ionicLoading.show({
			content: 'Loading',
			animation: 'fade-in',
			showBackdrop: true,
			maxWidth: 200,
			showDelay: 0
		});

		var player = sportFactory.getDetail("https://sportappionic.firebaseio.com/players/", $stateParams.id);
		
		player.on("value", function(snapshot, prevChildKey){
			$ionicLoading.hide();
			var inf = snapshot.val();
			$scope.Name = inf.fullname;
			$scope.Image_Player = inf.imageplayer
			$scope.Height = inf.height;
			$scope.Image = inf.imageplayer;
			$scope.Logo_Team = inf.logoteam;
			$scope.National = inf.national;
			$scope.Team_Name = inf.teamname;
			$scope.Title = inf.title;
			$scope.Heart = inf.heart;
			$scope.Health = inf.healthy;
			$scope.Foot = inf.foot;
			$scope.Cost = inf.cost;
			$scope.Content = inf.content;
			$scope.Red_Card = inf.redtag;
			$scope.Yellow_Card = inf.yellowtag;
			$scope.No_Player = inf.noplayer;
			$scope.Won = inf.won;
			$scope.Weight = inf.weight;
			$scope.Rate = inf.rating;
			$scope.Age = inf.age;
			$scope.Position = inf.position;
			$scope.Awards = inf.awards
		})
	})
		
}(angular.module('sportApp')));