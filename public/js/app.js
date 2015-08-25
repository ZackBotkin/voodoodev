
var app = angular.module('brainless', ['ui.router']);

app.config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                //templateUrl: 'partials/home.html'
                template: '<div> test </div>'
            });
    }

]);


