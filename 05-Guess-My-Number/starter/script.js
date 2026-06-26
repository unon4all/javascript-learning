'use strict';

/*
console.log(document.querySelector('.message').textContent);

// set the content of the element. 

document.querySelector('.message').textContent = 'Correct Number 🎉';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 23;

console.log(document.querySelector('.guess').value);

*/

// Always keep the data inside the code, not into the DOM.

// Secret Number;

'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

// Selecting Elements
const message = document.querySelector('.message');
const scoreDisplay = document.querySelector('.score');
const guessInput = document.querySelector('.guess');
const numberDisplay = document.querySelector('.number');
const highScoreDisplay = document.querySelector('.highscore');
const body = document.querySelector('body');

// Check Button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(guessInput.value);

  // No input
  if (!guess) {
    message.textContent = '⛔️ No Number!';
    return;
  }

  // Correct Guess
  if (guess === secretNumber) {
    message.textContent = '🎉 Correct Guess!';
    numberDisplay.textContent = secretNumber;

    body.style.backgroundColor = '#60b347';
    numberDisplay.style.width = '30rem';

    // High Score
    if (score > highScore) {
      highScore = score;
      highScoreDisplay.textContent = highScore;
    }

    return;
  }

  // Wrong Guess
  if (score > 1) {
    message.textContent = guess > secretNumber ? '📈 Too High!' : '📉 Too Low!';
    score--;
    scoreDisplay.textContent = score;
  } else {
    message.textContent = '💥 You Lost the Game!';
    score = 0;
    scoreDisplay.textContent = score;
  }
});

// Again Button -
document.querySelector('.again').addEventListener('click', function () {
  // Generate new secret number
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // Reset score
  score = 20;
  scoreDisplay.textContent = score;

  // Reset UI
  message.textContent = 'Start guessing...';
  numberDisplay.textContent = '?';
  guessInput.value = '';

  // Reset styles
  body.style.backgroundColor = '#222';
  numberDisplay.style.width = '15rem';
});
