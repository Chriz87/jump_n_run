const board = document.getElementById("board");

const cells = [];

let currentPlayer = "X"; 

let xMoves = [];  //[2, 1, 0]
let oMoves = [];  //[1]

const winningCombinations = [ // Alle möglichen Gewinnkombinationen
    // Reihen
    [0, 1, 2], // Erste Reihe
    [3, 4, 5], // Zweite Reihe
    [6, 7, 8], // Dritte Reihe

    // Spalten
    [0, 3, 6], // Erste Spalte
    [1, 4, 7], // Zweite Spalte
    [2, 5, 8], // Dritte Spalte

    // Diagonalen
    [0, 4, 8], // Erste Diagonale
    [2, 4, 6] // Zweite Diagonale
];

function createBoard(){
    for(let i= 0; i < 9; i++){
        const cell = document.createElement("div");
        cell.classList.add("cell"); 
        board.appendChild(cell);
        cells.push(cell);
        cell.addEventListener(("click"), () => makeMove(i));
    }
}

function makeMove(i) {
    if (cells[i].textContent === "") {
        cells[i].textContent = currentPlayer;
        if (currentPlayer === "X") {
            currentPlayer = "O";
            cells[i].style.backgroundImage = 'url(hund.jpg)';
            //cells[i].style.backgroundColor = "red";
            xMoves.push(i);
        } else {
            currentPlayer = "X";
            cells[i].style.backgroundImage = 'url(cat.jpg)';
           // cells[i].style.backgroundColor = "yellow";
            oMoves.push(i);
            console.log(oMoves);
        }

        gameFinshed();

      };

    }

    function gameFinshed() {
        for (let i = 0; i < winningCombinations.length; i++) {
            const combination = winningCombinations[i];
            if (combination.every((value) => xMoves.includes(value))) {
                finishGame("Player X hat gewonnen");
                return;
            }
            if (combination.every((value) => oMoves.includes(value))) {
                finishGame("Player O hat gewonnen");
                return;
            }
        }
        const totalMoves = oMoves.length + xMoves.length;
        if (totalMoves === 9) {
            finishGame("unentschieden");
            
            return;
        }
    }

    function finishGame(text) {
        setTimeout(() => {
            if(!alert(text)){window.location.reload();}
        },100);
    }

createBoard();

gameFinshed();