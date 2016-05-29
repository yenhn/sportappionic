(function(app){
	app.controller("TeamController", function($scope, $timeout, $ionicLoading, Team){

		// Setup the loader
		$ionicLoading.show({
			content: 'Loading',
			animation: 'fade-in',
			showBackdrop: true,
			maxWidth: 200,
			showDelay: 0
		});

		
		var teamObject = Team.GetTeambyTeamName("https://sportappionic.firebaseio.com/teams");

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
		
}(angular.module('sportApp')));