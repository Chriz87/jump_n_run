const gameBoard = document.getElementById('game-board');
let gameDivs = [];
let currentPlayer = 'X';
const resetButton = document.getElementById('reset-button');

function createGameBoard() {
    for (let i = 0; i < 9; i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('game-board-cell');
        gameBoard.appendChild(newDiv);
        gameDivs.push(newDiv);
    }
}

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
    createGameBoard();
    addCellClickListeners();
    resetButton.addEventListener('click', resetGame);
}

initGame();