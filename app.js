var app = angular.module('noteApp', ['ui.router', 'ngMaterial', 'ngAnimate', 'ngMessages',"content-editable"]);

app.config(function($stateProvider, $urlRouterProvider, $mdThemingProvider) {

  $mdThemingProvider.theme('default')
    .primaryPalette('amber', {
      'default': '500'
    })
    .accentPalette('grey', {
      'default': '900'
    })
    .warnPalette('red', {
      'default': '500'
    })
    .backgroundPalette('grey', {
      'default': '200'
    });

  $urlRouterProvider.otherwise('login');

  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'userController'
    })
    .state('register',{
      url:'/register',
      templateUrl:'templates/register.html',
      controller: 'userController'
    })
    .state('forgotPassword',{
      url: '/forgotpassword',
      templateUrl : 'templates/forgotPassword.html',
      controller: 'userController'
    })
    .state('home',{
      url: '/home',
      templateUrl: 'templates/home.html',
      controller: 'noteController'
    })
    .state('home.notes',{
      url: '/notes',
      templateUrl : 'templates/notes.html',
      controller: 'noteController'
    });
});
