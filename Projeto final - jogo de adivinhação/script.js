'use script';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Corret Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let pontuação = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let recorde = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //quando o player não coloca número valido
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ Sem número!';
    displayMessage('⛔ Sem número!');

    //quando o player acerta o número
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Número correto!';
    displayMessage('🎉 Número correto!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (pontuação > recorde) {
      recorde = pontuação;
      document.querySelector('.highscore').textContent = recorde;
    }

    //quando erra o número que foi gerado
  } else if (guess !== secretNumber) {
    if (pontuação > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber
      //     ? '📈 Número muito alto!'
      //     : '📉 Número muito baixo!';
      displayMessage(
        guess > secretNumber
          ? '📈 Número muito alto!'
          : '📉 Número muito baixo!'
      );
      pontuação--;
      document.querySelector('.score').textContent = pontuação;
    } else {
      // document.querySelector('.message').textContent = '🧨 Você perdeu o jogo!';
      displayMessage('🧨 Você perdeu o jogo!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

/*
quando chuta um número maior que o sorteado
   } else if (guess > secretNumber) {
     if (pontuação > 1) {
       document.querySelector('.message').textContent = '📈 Número muito alto!';
       pontuação--;
       document.querySelector('.score').textContent = pontuação;
     } else {
       document.querySelector('.message').textContent = '🧨 Você perdeu o jogo!';
       document.querySelector('.score').textContent = 0;
     }

     //quando chuta um número menor que o sorteado
   } else if (guess < secretNumber) {
     if (pontuação > 1) {
       document.querySelector('.message').textContent = '📉 Número muito baixo!';
       pontuação--;
       document.querySelector('.score').textContent = pontuação;
     } else {
       document.querySelector('.message').textContent = '🧨 Você perdeu o jogo!';
       document.querySelector('.score').textContent = 0;
     }
   }
 });
*/

document.querySelector('.again').addEventListener('click', function () {
  pontuação = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Comece a adivinhar...';
  displayMessage('Comece a adivinhar...');
  document.querySelector('.score').textContent = pontuação;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
