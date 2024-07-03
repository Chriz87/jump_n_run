const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const player = {
    x: 50,
    y: 200,
    width: 30,
    height: 30,
    speed: 5,
    jumpForce: 10,
    yVelocity: 0,
    isJumping: false
};

const ground = {
    y: 350
};

const obstacle = {
    x: canvas.width,
    y: 320,
    width: 30,
    height: 30,
    speed: 3
};

function drawPlayer() {
    ctx.fillStyle = 'blue';
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

function drawObstacle() {
    ctx.fillStyle = 'red';
    ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
}

function drawGround() {
    ctx.fillStyle = 'green';
    ctx.fillRect(0, ground.y, canvas.width, canvas.height - ground.y);
}

function update() {
    // Spieler-Bewegung und Schwerkraft
    player.yVelocity += 0.5;
    player.y += player.yVelocity;

    if (player.y + player.height > ground.y) {
        player.y = ground.y - player.height;
        player.yVelocity = 0;
        player.isJumping = false;
    }

    // Hindernis-Bewegung
    obstacle.x -= obstacle.speed;
    if (obstacle.x + obstacle.width < 0) {
        obstacle.x = canvas.width;
    }

    // Kollisionserkennung
    if (
        player.x < obstacle.x + obstacle.width &&
        player.x + player.width > obstacle.x &&
        player.y < obstacle.y + obstacle.height &&
        player.y + player.height > obstacle.y
    ) {
        alert('Game Over!');
        obstacle.x = canvas.width;
    }
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    update();
    drawGround();
    drawPlayer();
    drawObstacle();

    requestAnimationFrame(gameLoop);
}

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space' && !player.isJumping) {
        player.yVelocity = -player.jumpForce;
        player.isJumping = true;
    }
});

gameLoop();