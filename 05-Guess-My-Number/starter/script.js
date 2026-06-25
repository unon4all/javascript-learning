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

const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

document.querySelector('.number').textContent = secretNumber;

let highScore = document.querySelector('.highscore').textContent;

// Handling Click Event.

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (score > 1) {
    if (!guess) {
      document.querySelector('.message').textContent = 'No Number ⛔️';
    } else if (guess > secretNumber) {
      document.querySelector('.message').textContent = 'Guess Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (guess < secretNumber) {
      document.querySelector('.message').textContent = 'Guess High';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (guess === secretNumber) {
      document.querySelector('.message').textContent = 'Correct Guess';
    }
  } else {
    score--;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'lost the game';
  }
});
