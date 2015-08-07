var code = require('../js/main.js');

var game = new code.Game();

describe('Tic-tac-toe game', function() {
  it('clears the moveCount', function() {
    game.board.moveCount = 3;
    game.resetBoard();
  });
  expect(code.game.board.moveCount).toEqual(1);
});
