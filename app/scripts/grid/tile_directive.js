angular.module('Grid')
  .directive('tile', function () {
      'use strict';
      return {
        restrict: 'A',
        scope: {
          ngModel: '='
        },
        templateUrl: 'views/tile.html'
      };
    });