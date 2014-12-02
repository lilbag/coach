// public/js/appRoutes.js
    angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        // nerds page that will use the NerdController
        .when('/entrainement', {
            templateUrl: 'views/entrainement.html',
            controller: 'EntrainementController'
        })
        .when('/match', {
            templateUrl: 'views/match.html',
            controller: 'MatchController'
        })
        .when('/equipe', {
            templateUrl: 'views/equipe.html',
            controller: 'EquipeController'
        })
	.when('/matchencours', {
            templateUrl: 'views/matchencours.html',
            controller: 'MatchController'
        })
        .when('/voir', {
            templateUrl: 'views/equipevoir.html',
            controller: 'MatchController'
        })
        .when('/entrainement/voiratelier',{
            templateUrl:'views/voiratelier.html',
            controller: 'EntrainementController'
        });
    $locationProvider.html5Mode(true);

}]);