angular.module('Grid', [])
  .service('GridService', [function () {
    'use strict';
    this.grid = {};
    this.tiles = {};
    //Size of the board
    this.size = 4;
  }]);