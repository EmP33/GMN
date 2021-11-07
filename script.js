'use strict';
const check = document.querySelector('.check');
const quess = document.querySelector('.guess');
const number = document.querySelector('.number');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
const again = document.querySelector('.again');

const getRandomNumber = function () {
  return Math.floor(Math.random() * 20) + 1;
};

let puncation = Number(score.textContent);
let highest = Number(highscore.textContent);

let isGame = true;

let randomNumber = getRandomNumber();

again.addEventListener('click', () => {
  reset();
});
// let val = 0;
// let z = 3;
// function odliczanie() {
//   if (z > 0) {
//     z = z - 1;
//     document.getElementById('output').innerHTML = z;
//   } else {
//     let val = window.clearInterval(val);
//   }
// }
// val = setInterval('odliczanie()', '1000');
const checkingQuess = function (quess, event) {
  if (quess === randomNumber) {
    number.textContent = quess;
    message.textContent = '🤘 Correct Number';
    document.body.style.background = '#76B947';
    check.setAttribute('disabled', true);
    isGame = false;
    if (puncation > highest) {
      highest = puncation;
      highscore.textContent = puncation;
    }
  } else if (puncation === 0) {
    number.textContent = quess;
    message.textContent = '❌ You lose! ❌';
    document.body.style.background = '#F51720';
    check.setAttribute('disabled', true);
  } else if (!quess && isGame) {
    message.textContent = 'Choose number between: 1-20';
  } else if (quess !== randomNumber && isGame === false) {
  } else if (quess !== randomNumber) {
    if (quess > randomNumber) {
      message.textContent = 'too high...';
    } else {
      message.textContent = 'too low...';
    }
    puncation--;
    score.textContent = puncation;
  }
};

const reset = function () {
  randomNumber = getRandomNumber();
  number.textContent = '?';
  message.textContent = 'Start guessing...';
  document.body.style.background = '#222';
  check.removeAttribute('disabled');
  score.textContent = '20';
  puncation = 20;
  isGame = true;
  quess.value = '';
};

quess.addEventListener('keyup', event => {
  if (event.keyCode === 13) {
    checkingQuess(quess.valueAsNumber, event);
    quess.value = '';
  }
});

check.addEventListener('click', () => {
  checkingQuess(quess.valueAsNumber);
  quess.value = '';
});
