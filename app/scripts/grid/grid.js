angular.module('Grid', [])
  .service('GridService', [function () {
      'use strict';
      this.grid = {};
      this.tiles = {};
      //Size of the board
      this.size = 4;
    }])
  .factory('TileModel', function() {
      'use strict';
      var Tile = function(pos, val) {
          this.x = pos.x;
          this.y = pos.y;
          this.value = val || 2;
        };

      return Tile;
    })
  .service('GridService', function (TileModel) {
      'use strict';
      this.tiles  = [];
      this.tiles.push(new TileModel({x: 1, y: 1}, 2));
      this.tiles.push(new TileModel({x: 1, y: 2}, 2));
      this.buildEmptyGameBoard = function () {
          var self = this;
          for (var x = 0; x < service.size * service.size; x++) {
            this.grid[x] = null;
          }
        };
    });