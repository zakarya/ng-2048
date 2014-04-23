angular.module('Grid')
  .directive('grid', function () {
    'use strict';
    return {
      restrict: 'A',
      require: 'ngModel',
      scope: {
        ngModel: '='
      },
      templateUrl: 'views/grid.html'
    };
  });