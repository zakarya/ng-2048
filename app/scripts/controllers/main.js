angular.module('twentyfortyeightApp')
  .controller('GameController', function (GameManager) {
    'use strict';
    this.game = GameManager;
    // this.game = {
    //   currentScore: 124,
    //   highScore: 124
    // };
  });
