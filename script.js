'use strict';

// Selecting elements 
const player0El = document.querySelector('.player--1');
const player1El = document.querySelector('.player--0');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const currentEL0 = document.getElementById('current--0');
const currentEl1 = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNewGame = document.querySelector('.btn--new');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    // 3. Check for rolled 1: if true
    if (dice !== 1) {
      // Add dice to current score 
      currentScore += dice;
      // Dynamically changing the score to who ever is the active player with a template literal
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    // 2. Check if the player's score is >= 100
    if (scores[activePlayer] >= 20) {
      // Finish the game 
      playing = false;
      diceEl.classList.add('hidden')
      document
        .querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

btnNewGame.addEventListener('click', function () {
  diceEl.classList.add('hidden');

  


});