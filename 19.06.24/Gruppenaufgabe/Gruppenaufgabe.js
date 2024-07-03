// Variablen
let clickCount = 0;
const myButton = document.getElementById('myButton');
const toggleButton = document.getElementById('toggleButton');

// Funktion für zufällige Farbe
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Funktion für aktuelle Zeit
function getCurrentTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}

// Funktion für zufällige Position
function getRandomPosition() {
  const x = Math.floor(Math.random() * (window.innerWidth - myButton.offsetWidth));
  const y = Math.floor(Math.random() * (window.innerHeight - myButton.offsetHeight));
  return { x, y };
}

// Funktion für Button-Klick
function handleButtonClick() {
  document.body.style.backgroundColor = getRandomColor();
  const timeElement = document.createElement('p');
  timeElement.textContent = getCurrentTime();
  document.body.appendChild(timeElement);
  clickCount++;
  myButton.textContent = `Wurde ${clickCount} mal geklickt`;
  const { x, y } = getRandomPosition();
  myButton.style.position = 'absolute';
  myButton.style.left = `${x}px`;
  myButton.style.top = `${y}px`;
}

// Funktion für Toggle-Button
function toggleButtonVisibility() {
  myButton.style.display = myButton.style.display === 'none' ? 'inline-block' : 'none';
}

// Event-Listener
myButton.addEventListener('click', handleButtonClick);
toggleButton.addEventListener('click', toggleButtonVisibility);