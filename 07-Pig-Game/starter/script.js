'use strict';

// Generate the random numbers between 1-6
//Math.trunc(Math.random() * (max - min + 1)) + min
// El = element.

// Selecting elements.
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

let scores, currenScore, activePlayer, playing;

const init = function () {
  scores = [0, 0];
  currenScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;

  current0El.textContent = currenScore;
  current1El.textContent = currenScore;

  diceEl.classList.add('hidden');

  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

init();

const switchPlayer = function () {
  //Switch Player
  currenScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = currenScore;
  activePlayer = 1 - activePlayer;

  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    diceEl.classList.remove('hidden');

    diceEl.src = `dice-${dice}.png`;

    // Checked if rolled 1

    if (dice !== 1) {
      currenScore += dice;

      document.getElementById(`current--${activePlayer}`).textContent =
        currenScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. add current score to the score of the active player,
    scores[activePlayer] += currenScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // then check score score >= 100

    if (scores[activePlayer] >= 100) {
      //finish the game

      playing = false;

      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

// newGame();

btnNew.addEventListener('click', init);
