let turn = "X";
let winner = null;

const players = {
    player1: {
        sign: "X",
        color: "blue"
    },
    player2: {
        sign: "0"
    }
}

const messages = {
    won: {
        msg: function (player) {
            return `Congratz ${player} you won`;
        },
        color: "red"
    }
   
    }
    

function startGame() {
    setMessage(turn + " Gets to start");

    let button = document.getElementById("replay");
    button.onclick = function () {
        resetGame();
    };
}

function resetGame() {
    let squares = document.getElementsByClassName("Square");

    for (let index = 0; index < squares.length; index++) {
        const square = squares[index];
        square.innerText = '';
    }

    winner = null;
    turn = Math.random() > 0.5 ? players.player1.sign : "0";
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
        setMessage(messages.won.msg(turn));
    } else if (turn == "X") {
        turn = "0";
        setMessage("It's " + turn + "' turn");
    } else {
        turn = "X";
        setMessage("It's " + turn + "' turn");
    }
}

function checkForWinner(move) {
    let result = false;
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
    let result = false;
    if (getBox(a) == move && getBox(b) == move && getBox(c) == move) {
        result = true;
    }

    return result;
}

function getBox(number) {
    return document.getElementById("s" + number).innerText;
}

