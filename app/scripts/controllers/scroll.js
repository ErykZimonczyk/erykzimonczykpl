/**
 * Created by Eryk on 2015-04-20.
 */

angular.module('erykzimonczykplApp')
  .controller('scrollCtrl', ['$scope', '$location', '$anchorScroll',
    function ($scope, $location, $anchorScroll) {
      $scope.goTo = function(id) {
        var old = '';
        $location.hash(id);
        $anchorScroll();
        $location.hash(old);
      };
    }]);
