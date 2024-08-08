var TopPosition = 100;
var leftPosition = 1000;
var intervaTIme = 1000;
var score = 0;
var moveBall;

var ball = document.getElementById("ball");
ball.style.position = "absolute";

function startGame() {
  moveBall = setInterval(ballMove, intervaTIme);
}

function ballMove() {
  ball.style.left = leftPosition + "px";
  ball.style.top = TopPosition + "px";

  TopPosition = 100 + Math.random() * (window.innerHeight - 200);
  leftPosition = 100 + Math.random() * (window.innerWidth - 200);

  if (leftPosition > window.innerWidth - 150) {
    TopPosition = 0;
    leftPosition = 0;
  }
}

function explode() {
  ball.src = "explosion.webp";
  clearInterval(moveBall);
  document.getElementById("score").innerText = "Score: " + score;
  alert("You caught the ball! ");
}

ball.addEventListener("click", function () {
  score++;
});

function resetGame() {
  clearInterval(moveBall);
  score = 0;
  document.getElementById("score").innerText = "Score: " + score;
  ball.src = "fcb-soccer-ball.png";
  TopPosition = 100;
  leftPosition = 1000;
  startGame();
}

document.getElementById("velocity").addEventListener("input", function () {
  intervaTIme = parseInt(this.value);
  document.getElementById("velocityValue").innerText = intervaTIme;
  clearInterval(moveBall);
  startGame();
});

startGame();
