const gameBoard = document.getElementById('game-board');
let gameDivs = [];
let currentPlayer = 'X';

for (let i = 0; i < 9; i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('game-board-cell');
    gameBoard.appendChild(newDiv);
    gameDivs.push(newDiv);
}

for (let i = 0; i < gameDivs.length; i++) {
    gameDivs[i].addEventListener('click', function() {
        if (this.textContent === '') {
            this.textContent = currentPlayer;
            this.classList.add(currentPlayer);
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    });
}