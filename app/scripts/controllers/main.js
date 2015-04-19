/**
 * Created by Eryk on 2015-04-19.
 */

'use strict';

angular
  .module('erykzimonczykplApp')
  .controller('mainCtrl',['$scope','$interval',function($scope,$interval){
    var now = new Date();
    var days = now.getDay();
    var hours = now.getHours();
    var minutes = now.getMinutes();

    $scope.coffees = Math.round(((days)*24*60+hours*60+minutes)/3);
    $scope.computer = Math.round($scope.coffees/60);
    $scope.lines = Math.round(((days)*24*60+hours*60+minutes)/4);


   $interval(function(){

      var now = new Date();
      var days = now.getDay();
      var hours = now.getHours();
      var minutes = now.getMinutes();

      $scope.coffees = Math.round(((days)*24*60+hours*60+minutes)/3);
      $scope.computer = Math.round($scope.coffees/60);
      $scope.lines = Math.round(((days)*24*60+hours*60+minutes)/4);

    },1000);

  }]);
