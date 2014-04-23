angular.module('Game', ['Grid', 'ngCookies'])
  .service('GameManager', function (GridService) {
    'use strict';
    this.newGame = function () {
      //Create a new game
    };
    this.move = function () {
      //Handle the move action
    };
    this.updateScore = function (newScore) {
      //Update the score
      var score = newScore;
      console.log(score);
    };
    this.movesAvailable = function () {
      //Are there moves left?
      return GridService.anyCellsAvailable() ||
              GridService.tileMatchesAvailable();
    };
  });