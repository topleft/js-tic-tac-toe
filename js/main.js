
function Game(){
  this.board = new Board();
  this.players = [new Player('X',$('#oneScore')),new Player('O',$('#twoScore'))];
  this.turnCounter = 0;
}

function Board(){
  this.moveCount = 0;
  this.cells = this.createCells();
  $('.reset').on('click', function(){game.resetBoard()});
}

function Cell(id){
    this.owner = id;
    this.eventHandler = $('#'+ id).on('click',function(){
      var playerId = game.players[game.turnCounter].id;
      game.board.cells[this.id].owner = playerId;
      // this.changeOwner();
      $(this).html(playerId);
      $(this).off();
      game.nextPlayer();
  });
}

function Player(id,$cellID){
  this.id = id;
  this.$cellID = $cellID;
  this.score = 0;
}

Board.prototype.createCells = function(){
  var ids = [0,1,2,3,4,5,6,7,8];
  var $cells = [];
  for (var i = 0; i < ids.length; i++) {
    $cells.push(new Cell(ids[i]) );
  }
  return $cells;
}

Board.prototype.winCondition = function(){
  var winConditions =
  [
  [this.cells[0],this.cells[1],this.cells[2]],
  [this.cells[3],this.cells[4],this.cells[5]],
  [this.cells[6],this.cells[7],this.cells[8]],
  [this.cells[0],this.cells[3],this.cells[6]],
  [this.cells[1],this.cells[4],this.cells[7]],
  [this.cells[2],this.cells[5],this.cells[8]],
  [this.cells[0],this.cells[4],this.cells[8]],
  [this.cells[2],this.cells[4],this.cells[6]]
  ];

  if(this.moveCount >= 9){ alert('Draw')};
  console.log("Moves: "+this.moveCount); //resetBoard()
   for (var i = 0; i < winConditions.length; i++){
      var winCheck = this.checkWinner(winConditions[i]);
      if (winCheck){game.updateScore()};
  }
};


Board.prototype.checkWinner = function(arr){
  for (var i = 0; i < arr.length; i++) {
    if(arr[i].owner !== game.players[game.turnCounter].id){
      return false;
    }
  }
  return true;
}
Game.prototype.resetBoard =function(){
  this.board = new Board();
  this.updateDom('&nbsp;');
}
Game.prototype.nextPlayer = function(){
 this.board.moveCount ++;
 this.board.winCondition();
 console.log(this.turnCounter);
 if (this.turnCounter === 0) this.turnCounter = 1;
 else this.turnCounter = 0;
}
Game.prototype.updateScore = function(){
  var winner = this.players[this.turnCounter];
  winner.score++;
  alert(winner.id + "\'s WIN!!!");
  this.updateDom(winner.id);
  winner.$cellID.html(winner.score);
}
Game.prototype.updateDom = function (string) {
  for (var i = 0; i < this.board.cells.length; i++) {
    $("#"+i).html(string);
  }
};


// module.export = {
//   Game : Game
// }
