let turn = "X";
let result = false;
winner = null;
let button = document.getElementsByClassName("Button");


function startGame() {
  setMessage(turn + " Gets to start");
}
function setMessage(msg) {
  document.getElementById("message").innerText = msg;
}
function nextMove(square) {
  if (winner != null) {
    setMessage(turn + " already won.");
  } else if (square.innerText == "") {
    square.innerText = turn;
    switchTurn();
  } else {
    setMessage("Pick another square");
  }
}
function switchTurn() {
  if (checkForWinner(turn)) {
    winner = turn;
    setMessage("Congrats " + turn + ", you won!");
  } else if (turn == "X") {
    turn = "0";
    setMessage("It's " + turn + "' turn");
  } else {
    turn = "X";
    setMessage("It's " + turn + "' turn");
  }
}
function checkForWinner(move) {
  if (
    checkRow(1, 2, 3, move) ||
    checkRow(4, 5, 6, move) ||
    checkRow(7, 8, 9, move) ||
    checkRow(1, 4, 7, move) ||
    checkRow(2, 5, 8, move) ||
    checkRow(3, 6, 9, move) ||
    checkRow(1, 5, 9, move) ||
    checkRow(3, 5, 7, move)
  ) {
    result = true;
  }
  return result;
}
function checkRow(a, b, c, move) {
  if (getBox(a) == move && getBox(b) == move && getBox(c) == move) {
    result = true;
  }
  return result;
}

function getBox(number) {
  return document.getElementById("s" + number).innerText;
}

function clearBox() {
   button.onclick = function(square){
    for(square = 0; square < 9; square++)
    { 
        return square = " ";
    }
};
}
