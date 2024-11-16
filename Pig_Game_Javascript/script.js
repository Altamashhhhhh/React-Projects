const newBtn = document.querySelector(".btn--new");
const rollBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");
const dice = document.querySelector(".dice");
const player0 = document.querySelector(".player--0");
let player1 = document.querySelector(".player--1");

let score0 = document.getElementById("score--0");
let score1 = document.getElementById("score--1");
let current0 = document.querySelector("#current--0");
let current1 = document.getElementById("current--1");
let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

dice.classList.add("hidden");

score0.textContent = scores[0];
score1.textContent = scores[1];

function changePlayer() {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1.classList.toggle("player--active");
  player0.classList.toggle("player--active");
}

rollBtn.addEventListener("click", function () {
  if (playing) {
    const diceNumber = Math.trunc(Math.random() * 6) + 1;
    dice.classList.remove("hidden");
    dice.src = `/dice-${diceNumber}.png`;
    if (diceNumber !== 1) {
      currentScore += diceNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      changePlayer();
    }
  }
});

holdBtn.addEventListener("click", function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 50) {
        playing = false;
        document.querySelector(`.player--${activePlayer}`).classList.add("player--winner")
    } else {
      changePlayer();
    }
  }
});

newBtn.addEventListener("click", function () {
  scores = [0, 0];
  score0.textContent = 0;
  score1.textContent = 0;
  currentScore = 0;
  dice.classList.add("hidden");
  current0.textContent = 0;
  current1.textContent = 0;
  document.querySelector(`.player--${activePlayer}`).classList.remove("player--winner")
  playing = true
});
