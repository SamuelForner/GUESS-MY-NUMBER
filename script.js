'use strict';

let number = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;
const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.score').textContent = score;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // if there is no guess
  if (!guess) {
    displayMessage('No value ⛔');
  }

  // if the guess is different than secretNumber
  else if (guess !== number) {
    if (score >= 1) {
      displayMessage(guess > number ? 'Too High 👆' : 'Too low 👆');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lose 😘');
      document.querySelector('.score').textContent = 0;
    }
  }

  // if the guess ===  secretNumber
  else if (guess === number) {
    document.querySelector('.number').textContent = number;
    displayMessage('Correct number🎉');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
});

// again button
document.querySelector('.again').addEventListener('click', function () {
  //resetting color page
  document.querySelector('body').style.backgroundColor = '#222';
  //resetting secret number
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  number = Math.trunc(Math.random() * 20) + 1;
  console.log(number);
  //resetting score
  score = 20;
  document.querySelector('.score').textContent = score;
  //resetting message
  displayMessage('Start guessing..');
  //resetting guess value
  document.querySelector('.guess').value = '';
});
