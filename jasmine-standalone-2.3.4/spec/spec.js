

var game = new Game();

describe('Tic-tac-toe game resetBoard method', function() {
  it('resets moveCount to 0', function() {
    game.board.moveCount = 3;
    game.resetBoard();
    expect(game.board.moveCount).toEqual(0);
  });

  it("resets cell owner", function(){
    game.board.cells[3] = "X";
    game.resetBoard();
    expect(game.board.cells[3].owner).toEqual(3);
  });


  // it("", function(){
  //   game.board.//property = something(simulate a finished game)
  //   game.resetBoard();
  //   expect(game.board.//protperty).toEqual(//fresh board);)
  // });
  // it("", function(){
  //   game.board.//property = something(simulate a finished game)
  //   game.resetBoard();
  //   expect(game.board.//protperty).toEqual(//fresh board);)
  // });
});

var game = new Game();

describe("Tic-tac-toe game nextPlayer", function(){
  it("alternates the value of turnCounter between 0 and 1", function(){
    game.turnCounter = 1;
    game.nextPlayer();
    expect(game.turnCounter).toEqual(0);
    game.nextPlayer();
    expect(game.turnCounter).toEqual(1);
  });
});

var game = new Game();

describe("Tic-tac-toe game cell on click", function(){

  // how to simulate 2 games have been played
  it("calls nextPlayer only once", function(){
    game.board.moveCount = 5;
    game.nextPlayer();
    expect(game.board.moveCount).toEqual(6);
  });

  // it("starts or ends with playerId and turn Count aligned", function(){
  //   expect(game.players[game.turnCount].id).toEqual();
  // });
});




// describe("Tic-tac-toe game", function(){
//   it("", function(){
//     expect().toEqual();
//   });
// });

