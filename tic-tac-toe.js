function startGame () {
    turn = "X";
    setMessage(turn + " Gets to start")
}
function setMessage(msg){
    document.getElementById("message").innerText = msg;
}
function nextMove(square) {
    if(square.innerText == '') {
        square.innerText = turn;
        switchTurn();
    }
    else {
        setMessage("Pick another square")
    }
   
}
function switchTurn() {
if(turn === "X") {
    turn = "0";
}
else {turn = "X";
    }
}