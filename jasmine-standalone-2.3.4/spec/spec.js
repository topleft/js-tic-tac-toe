

var game = new Game();

describe('Tic-tac-toe game', function() {
  it('clears the moveCount', function() {
    game.board.moveCount = 3;
    game.resetBoard();
    expect(game.board.moveCount).toEqual(0);
  });
});