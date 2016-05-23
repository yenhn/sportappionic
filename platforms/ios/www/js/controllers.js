angular.module('sportApp.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function() {
        $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function() {
        $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function() {
        console.log('Doing login', $scope.loginData);

        // Simulate a login delay. Remove this and replace with your login
        // code if using a login system
        $timeout(function() {
            $scope.closeLogin();
        }, 1000);
    };
})

.controller('PlaylistsCtrl', function($scope) {
    $scope.playlists = [
        { title: 'Reggae', id: 1 },
        { title: 'Chill', id: 2 },
        { title: 'Dubstep', id: 3 },
        { title: 'Indie', id: 4 },
        { title: 'Rap', id: 5 },
        { title: 'Cowbell', id: 6 }
    ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {})

.controller('CalendarCtrl', function($scope, ionicDatePicker) {
        var ipObj1 = {
            callback: function(val) { //Mandatory
                // console.log('Return value from the datepicker modal is : ' + val, new Date(val));
                $scope.selectedDate2 = new Date(val);
            },
            disabledDates: [
                new Date(1437719836326),
                new Date(2016, 1, 25),
                new Date(2015, 7, 10),
                new Date('Wednesday, August 12, 2015'),
                new Date("08-14-2015"),
                new Date(1439676000000),
                new Date(1456511400000)
            ],
            from: new Date(2012, 8, 2),
            to: new Date(2016, 8, 25),
            inputDate: new Date(),
            mondayFirst: true,
            showTodayButton: false,
            closeOnSelect: true,
            templateType: 'modal'
        };
        $scope.openDatePickerTwo = function(val) {
            ionicDatePicker.openDatePicker(ipObj1);
        }
    });
    // .controller('DetailTeamPlayer', function($scope, $stateParams) {
    //     var h = document.getElementById('detailunder').style.height;
    //     // document.getElementById('detail').style.height = h + "px";
    //     console.log(h);
    // });
