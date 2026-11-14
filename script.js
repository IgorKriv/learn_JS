'use strict';

function isNumber(value) {
  return value !== null && String(value).trim() !== '' && !isNaN(+value);
}

function generateSecretNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function startGame() {
  const secretNumber = generateSecretNumber();

  function askUser() {
    const answer = prompt('Угадай число от 1 до 100');


    if (answer === null) {
      alert('Игра окончена');
      return;
    }

    if (!isNumber(answer)) {
      alert('Введи число!');
      return askUser();
    }

    const guess = Number(answer);

    if (guess === secretNumber) {
      alert('Поздравляю, Вы угадали!!!');
      return;
    }

    if (guess > secretNumber) {
      alert('Загаданное число меньше');
      return askUser();
    }

  
    alert('Загаданное число больше');
    return askUser();
  }

  askUser();
}



startGame();