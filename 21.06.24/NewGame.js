const board = document.getElementById('board'); // Um die Zellen innerhalb des Board Elements anzuzeigen, brauchen wir eine Referenz
const cells = []; // In diesem Array werden alle Zellen Elemente gespeichert

let xMoves = [];
let oMoves = [];

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


function addCellClickListeners() {
    for (let i = 0; i < gameDivs.length; i++) {
        gameDivs[i].addEventListener('click', handleCellClick);
    }
}

function handleCellClick() {
    if (this.textContent === '') {
        this.textContent = currentPlayer;
        this.classList.add(currentPlayer);
        if (checkWin()) {
            alert(`${currentPlayer} won!`);
            resetGame();
        } else if (checkDraw()) {
            alert("It's a draw!");
            resetGame();
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}


function checkWin() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    return winPatterns.some(pattern => {
        const [a, b, c] = pattern;
        return gameDivs[a].textContent &&
               gameDivs[a].textContent === gameDivs[b].textContent &&
               gameDivs[a].textContent === gameDivs[c].textContent;
    });
}

function checkDraw() {
    return gameDivs.every(div => div.textContent !== '');
}



function resetGame() {
    gameDivs.forEach(div => {
        div.textContent = '';
        div.classList.remove('X', 'O');
    });
    currentPlayer = 'X';
}

function initGame() {
    createBoard();
    addCellClickListeners();
    resetButton.addEventListener('click', resetGame);
}

initGame();

function createBoard(){
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        board.appendChild(cell);
        cells.push(cell);
        cell.addEventListener('click', () => makeMove(i));
    }
}

function makeMove(i) {
    if (cells[i].textContent === '') {
        cells[i].textContent = currentPlayer;
        if (currentPlayer === 'X') {
            currentPlayer = 'O';
            cells[i].style.backgroundColor = 'lightblue';
            xMoves.push(i);
        } else {
            currentPlayer = 'X';
            cells[i].style.backgroundColor = 'lightcoral';
            oMoves.push(i);
        }
    };
}

createBoard();

function botMove() {

    /*
        * YOUR CODE GOES HERE
        * Der Bot soll einen zufälligen Zug machen
        * Dazu brauchen wir ein Array mit allen leeren Zellen
        * Dann wählen wir eine zufällige Zelle aus dem Array aus
    const index = DEIN BERECHNETER INDEX (von 0-8)
    */


    cells[index].style.backgroundColor = 'lightcoral'; // Player O bekommmt lightcoral Farbe
    cells[index].textContent = 'O'; // Player O bekommmt lightcoral Farbe
    oMoves.push(index); // Speichere den Zug von O in das oMoves Array
}


function gameFinished() {

    // Im folgenden checken wir, ob es einen Gewinner gibt
    // Dazu überprüfen wir, ob einer der Spieler 3 Symbole in einer Reihe hat
    // Dazu haben wir ein Array mit allen möglichen Gewinnkombinationen
    // Wir überprüfen, ob einer der Spieler 3 Züge in einer der Kombinationen hat

    for (let i = 0; i < winningCombinations.length; i++) {
        const combination = winningCombinations[i];
        if (combination.every((value) => xMoves.includes(value))) { // Überprüfe ob alle Werte der Kombination im xMoves Array sind
            finishGame('Player X hat gewonnen');
            return;
        }
        if (combination.every((value) => oMoves.includes(value))) { // Überprüfe ob alle Werte der Kombination im oMoves Array sind
            finishGame('Player O hat gewonnen');
            return;
        }
    }

    // Wenn es keinen Gewinner gibt, überprüfen wir, ob das Spiel unentschieden ist
    // Dazu checken wir, ob alle Zellen belegt sind, ergo insgesamt 9 Züge gemacht wurden
    // Wenn ja, ist das Spiel unentschieden
    const totalMovel = oMoves.length + xMoves.length;
    if (totalMovel === 9) {
        finishGame('Unentschieden');
        return;
    }

}

function finishGame(text) {
    setTimeout(() => {
        if(!alert(text)){window.location.reload();} // Wenn das Spiel zuende ist, wird eine Alert Box angezeigt und die Seite neu geladen
    }, 100);
}

createBoard(); // Die Funktion createBoard wurde zwar definiert aber wird hier aufgerufen