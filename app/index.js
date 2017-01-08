/**
 * Created by rramp on 12/22/2016.
 */

var app = angular.module("app",['ngRoute','ngAnimate']);


   app.config(function($routeProvider) {

       $routeProvider
           .when('/',{
               controller:'myController',
               templateUrl:'content.html'
           })
           .when('/home', {
               controller: 'imageController',
               templateUrl: 'home.html'
           })
           .when('/MyFamily', {
               controller: 'myController',
               templateUrl: 'Family.html'
           })
           .when('/MyEducation', {
               controller: 'myController',
               templateUrl: 'home.html'
           })
           .when('/Resume', {
               controller: 'myController',
               templateUrl: 'Resume.html'
           })
           .when('/FindMe', {
               controller: 'myController',
               templateUrl: 'FindMe.html'
           })
           .otherwise({
               redirectTo: '/'
           });
           // .when('/ProfessionalCareer', {
           //     controller: 'ProfController',
           //     templateUrl: 'ProfessionalCareer.html'
           // })
   });

app.controller('myController', function($scope) {
    $scope.students = [
        {name: 'Mark Waugh', city:'New York'},
        {name: 'Steve Jonathan', city:'London'},
        {name: 'John Marcus', city:'Paris'}
    ];

    $scope.message = "Click on the hyper link to view the students list.";
});






    // .when('/contactMe', {
    //     controller: 'ContactController',
    //     controllerAs: 'contact',
    //     templateUrl: 'ContactMe.html',
    //     resolve: {
    //         activities: function (dataService) {
    //             return dataService.getAllActivities();
    //         }
    //     }
    // })





