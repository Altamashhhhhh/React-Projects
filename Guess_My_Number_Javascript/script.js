const secretNumber = Math.trunc(Math.random() * 20) + 1;
const number = document.querySelector(".number").textContent = 20z;

const message = document.querySelector(".message");
const scoreDisplay = document.querySelector(".score");

const checkBtn = document.querySelector(".check");
let score = 20;


checkBtn.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    message.textContent = "⛔ NO Number";
  } else {
    if (guess == secretNumber) {
      document.querySelector("body").style.backgroundColor = "green";\
      message.textContent = "🎉 Congratulation You Won 🎊"
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
      if (score >= 1) {
        score--;
        scoreDisplay.textContent = score;
      } else {
        message.textContent = "You lost the game!";
        scoreDisplay.textContent = 0;
      }
    }
  }
});
