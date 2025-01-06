'use strict';

let score = 20; // Renomeado para 'score' para melhorar a clareza
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0; // Renomeado para 'highscore' para manter consistência com a nomenclatura

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // Quando o player não coloca número válido
  if (!guess) {
    displayMessage('⛔ Sem número!');
  } else if (guess === secretNumber) {
    // Quando o player acerta o número
    displayMessage('🎉 Número correto!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else {
    // Quando erra o número
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? '📈 Número muito alto!'
          : '📉 Número muito baixo!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('🧨 Você perdeu o jogo!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Comece a adivinhar...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
