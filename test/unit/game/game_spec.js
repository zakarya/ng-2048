describe('Game module', function () {
  describe('GameManager', function () {
    //Inject the Game module into this test
    beforeEach(module('Game'));

    var gameManager, _gridService, provide;
    beforeEach(module(function ($provide) {
      _gridService = {
        anyCellsAvailable: angular.noop,
        tileMatchesAvailable: angular.noop
      };
      $provide.value('GridService', _gridService);
      provide = $provide;
    }));

    describe('.movesAvailable', function () {
      it('should report true if there are cells available', function () {
        spyOn(_gridService, 'anyCellsAvailable').andReturn(true);
        expect(gameManager.movesAvailable()).toBeTruthy();
      });
      it('should report true if there are matches available', function () {
        spyOn(_gridService, 'anyCellsAvailable').andReturn(false);
        spyOn(_gridService, 'tileMatchesAvailable').andReturn(true);
        expect(gameManager.movesAvailable()).toBeTruthy();
      });
      it('should report false if there are no cells nor matches available', function () {
        spyOn(_gridService, 'anyCellsAvailable').andReturn(false);
        spyOn(_gridService, 'tileMatchesAvailable').andReturn(false);
        expect(gameManager.movesAvailable()).toBeFalsy();
      });
    });


    //Our tests will go below here

    beforeEach(inject(function(GameManager) {
      gameManager = GameManager;
    }));
  });
});