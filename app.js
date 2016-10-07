(function (){
'use strict';

angular.module('myFirstApp',[])

.controller('MyFirstController',function($scope){
$scope.name="fai";
$scope.sayHello =function () {return "Hello coursera"}
});




})();
