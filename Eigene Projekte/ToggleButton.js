const buttonTexts = [
    "Hey mein Engelchen!",
    "Ich bin dein Bamse!",
    "Du bist so wundervoll!",
    "Ich Liebe Dich!",
    "Du bist die schönste Frau der Welt!",
    "Du bist süß!",
    "Und Sexy!",
    "Fantastisch!",
    "Unglaublich!",
    "Du bist Mein!"
];

let currentTextIndex = 0;

function getRandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

function getRandomPosition(element) {
    const x = Math.random() * (window.innerWidth - element.clientWidth);
    const y = Math.random() * (window.innerHeight - element.clientHeight);
    return { x, y };
}

function updateButton() {
    const mainButton = document.getElementById('mainButton');
    
    // Ändere Hintergrundfarbe
    document.body.style.backgroundColor = getRandomColor();
    
    // Füge Zeitstempel hinzu
    const timeElement = document.createElement('p');
    timeElement.textContent = new Date().toLocaleTimeString();
    document.body.appendChild(timeElement);
    
    // Aktualisiere Buttontext
    currentTextIndex = (currentTextIndex + 1) % buttonTexts.length;
    mainButton.textContent = buttonTexts[currentTextIndex];
    
    // Positioniere Button zufällig
    const { x, y } = getRandomPosition(mainButton);
    mainButton.style.position = 'absolute';
    mainButton.style.left = `${x}px`;
    mainButton.style.top = `${y}px`;
}

function toggleMainButton() {
    const mainButton = document.getElementById('mainButton');
    mainButton.style.display = mainButton.style.display === 'none' ? 'block' : 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    const mainButton = document.getElementById('mainButton');
    const toggleButton = document.getElementById('toggleButton');
    
    mainButton.addEventListener('click', updateButton);
    toggleButton.addEventListener('click', toggleMainButton);
});