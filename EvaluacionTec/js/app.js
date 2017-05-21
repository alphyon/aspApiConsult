var hostApp = $(location).attr('host');
var app = angular.module('App', ["ngRoute", "ngCookies", "blockUI", "ui.bootstrap"]);

app.config(function ($routeProvider, blockUIConfig) {
    
    blockUIConfig.message = 'Cargando ....';
    $routeProvider
    .when('/', { templateUrl: 'template/home.html', controller: 'mainController' })
    .when('/question/:id/', { templateUrl: 'template/question.html', controller: 'QuestController' })
    .when('/login', { templateUrl: 'template/login.html', controller: 'LoginController' })
});



