// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('sportApp', ['ionic','ionic-datepicker', 'sportApp.controllers', 'firebase', 'ui.router'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function (ionicDatePickerProvider) {
    // var datePickerObj = {
    //   inputDate: new Date(),
    //   setLabel: 'Set',
    //   todayLabel: 'Today',
    //   closeLabel: 'Close',
    //   mondayFirst: false,
    //   weeksList: ["S", "M", "T", "W", "T", "F", "S"],
    //   monthsList: ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
    //   templateType: 'modal',
    //   from: new Date(2012, 8, 1),
    //   to: new Date(2018, 8, 1),
    //   showTodayButton: true,
    //   dateFormat: 'dd MM yy',
    //   closeOnSelect: false,
    //   disableWeekdays: [6]
    // };
    var datepickerObject = {
    callback: function (val) {  //Mandatory
      var date = new Date(val);
      var day = date.getDate();
      var month = date.getMonth() + 1;
      var year = date.getFullYear();
      var output = day + "/" + month + "/" + year;

      angular.element($scope.element).val(output);

      //if success, reset $scope.element
      $scope.element = undefined;
    },
    showTodayButton: false,     //Optional
    from: new Date(2012, 1, 1), //Optional
    to: new Date(2016, 10, 30), //Optional
    inputDate: new Date(),      //Optional
    mondayFirst: true,          //Optional
    disableWeekdays: [0],       //Optional
    closeOnSelect: false,       //Optional
    templateType: 'modal'       //Optional
    // ionicDatePickerProvider.configDatePicker(datePickerObj);
    }

  })

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'CalendarCtrl'
  })

.state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html'
      }
    }
  })

.state('app.detailnews', {
    url: '/detailnews/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/detailnews.html'
      }
    }
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })
    .state('app.detailplayer', {
      url: '/detailplayer',
      views: {
        'menuContent': {
          templateUrl: 'templates/detailplayer.html'
        }
      }
    })
    .state('app.detailplayer.info', {
      url: '/info',
      views: {
        'info-tab': {
          // templateUrl: 'templates/info.html'
          template: '<div>jsdfkjsdklajfkl;sdaj</div>'
        }
      }
    })
    .state('app.ladder', {
    url: '/ladder',
    views: {
      'menuContent': {
        templateUrl: 'templates/ladder.html'
      }
    }
  })

  //   .state('app.calendar', {
  //   url: '/calendar',
  //   views: {
  //     'menuContent': {
  //       templateUrl: 'templates/calendar.html',
  //       controller: 'CalendarCtrl'
  //     }
  //   }
  // })

    .state('app.team', {
    url: '/teams',
    views: {
      'menuContent': {
        templateUrl: 'templates/teams.html'
      }
    }
  })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
