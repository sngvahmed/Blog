'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      }) .when('/portofolio', {
        templateUrl: 'views/portofolio/portofolio.html',
        controller: 'PortofolioCtrl'
      }) .when('/contact', {
        templateUrl: 'views/contact/contact.html',
        controller: 'ContactCtrl'
      }) .otherwise({
        redirectTo: '/home'
      });
  });

/* slider */
$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});
