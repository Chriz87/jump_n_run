// 1. Erstelle eine neue HTML Datei und verknüpfe eine JavaScript Datei.
// (Bereits in der HTML-Datei erledigt)

// 2. Erstelle ein div Element mit der ID game-board in deinem HTML Dokument.
// (Bereits in der HTML-Datei erledigt)

// 3. Im JavaScript, erstelle eine Referenz zu dem div Element mit der ID game-board. (Tipp: getElementById)
const gameBoard = document.getElementById('game-board');

// 4. Definiere ein leeres Array gameDivs let gameDivs = [];
let gameDivs = [];

// 5. Erstelle ein For-Loop, der sich 9 Mal wiederholt. In jeder Iteration der Schleife:
for (let i = 0; i < 9; i++) {
  // Erstelle ein neues Div Element
  const newDiv = document.createElement('div');
  // Verpasse dem Div Element die CSS-Klasse game-board-cell
  newDiv.classList.add('game-board-cell');
  // Nutze die Referenz zu dem game-board-Div und füge die neue Zelle als Kind Element dem HTML hinzu. (gameBoard.appendChild(newEl))
  gameBoard.appendChild(newDiv);
  // Füge das neue Element als Element zum gameDivs Array hinzu
  gameDivs.push(newDiv);
}

// 6. Stelle sicher, dass die 9 Divs richtig erzeugt werden.
console.log(gameDivs); // Überprüfe im Browser-Konsole

// 7. Füge eine CSS Datei mit folgendem Inhalt hinzu:
// (Siehe styles.css)

// 8. (Freiwillig) Erstelle einen weiteren For-Loop nach dem gleichen Prinzip
// Erstelle einen Event-Listener, jedes Mal wenn jemand auf eine der Zellen klickt
// Findest du heraus auf welche Zelle geklickt wurde?
// Kannst du ein X in die entsprechende Zelle schreiben?
// Kannst du abwechselnd ein X und ein O in die entsprechende Zelle schreiben?
// Wenn schon ein Buchstabe in der Zelle steht, soll nichts passieren

let currentPlayer = 'X';

gameDivs.forEach((div, index) => {
  div.addEventListener('click', () => {
    if (div.textContent === '') {
      div.textContent = currentPlayer;
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      console.log(`Zelle ${index} wurde angeklickt.`);
    }
  });
});