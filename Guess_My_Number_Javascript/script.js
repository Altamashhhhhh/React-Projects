let secretNumber = Math.trunc(Math.random() * 20) + 1;
const number = document.querySelector(".number"); 
const again = document.querySelector(".again");
const message = document.querySelector(".message");
const scoreDisplay = document.querySelector(".score");
const highscoreDisplay = document.querySelector(".highscore");
const checkBtn = document.querySelector(".check");
const body = document.querySelector("body");
let highscore = 0;
let score = 20;

checkBtn.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    message.textContent = "⛔ NO Number";
  } else {
    if (guess == secretNumber) {
      body.style.backgroundColor = "green";
      message.textContent = "🎉 Congratulation You Won 🎊";
      number.textContent = secretNumber;
      if (score > highscore) {
        highscore = score;
      }
      highscoreDisplay.textContent = highscore;
    } else if (guess < secretNumber) {
      message.textContent = " 📉 Too Low!";
      if (score > 1) {
        score--;
        scoreDisplay.textContent = score;
      } else {
        message.textContent = "You lost the game!";
        scoreDisplay.textContent = 0;
      }
    } else if (guess > secretNumber) {
      message.textContent = "📈 Too High!";
      if (score > 1) {
        score--;
        scoreDisplay.textContent = score;
      } else {
        message.textContent = "You lost the game!";
        scoreDisplay.textContent = 0;
      }
    }
  }
});

again.addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  message.textContent = "Start guessing...";
  score = 20;
  scoreDisplay.textContent = score;
  highscoreDisplay.textContent = highscore;
  body.style.backgroundColor = "#222";
  number.textContent = "?";
  document.querySelector(".guess").value = "";
});
