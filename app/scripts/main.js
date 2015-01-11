/* jshint devel:true */

console.log("hello me")

var app = angular.module('MainApp', ['ngMaterial']);
app.controller('MainCtrl', function($scope) {
    $scope.education = [{
        url: "https://www.ensta-paristech.fr/en",
        desc: "MS Engineering school"
    }];
    $scope.experience = [{
        url: "http://www.lesoffrescanal.fr/",
        desc: "Le cube canal +"
    }];
});