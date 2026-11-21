let title = "строка с названием проекта";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 1;
let rollback = 99;
let fullPrice = 1000000000;
let adaptive = true;

//Вывести в консоль тип данных значений переменных title, fullPrice, adaptive;
console.log(title);
console.log(fullPrice);
console.log(adaptive);

//Вывести в консоль длину строки из переменной screens
console.log(screens.length);

//Вывести в консоль “Стоимость верстки экранов (screenPrice) рублей/ долларов/гривен/юани” и “Стоимость разработки сайта (fullPrice) рублей/ долларов/гривен/юани”
console.log("Стоимость верстки экранов " + screenPrice + " рублей/ долларов/гривен/юани");
console.log("Стоимость разработки сайта " + fullPrice + " рублей/ долларов/гривен/юани");

//Привести строку screens к нижнему регистру и разбить строку на массив, вывести массив в консоль
console.log(screens.toLowerCase());
console.log(screens.split(','));

//Вывести в консоль Процент отката посреднику за работу (fullPrice * (rollback / 100))
console.log(fullPrice * (rollback / 100));


//1
const container = document.querySelector('.books');
const books = Array.from(container.querySelectorAll('.book'));

for (let i = 0; i < books.length - 1; i++) {
  for (let j = 0; j < books.length - 1 - i; j++) {
    const titleA = books[j].querySelector('h2 a').textContent;
    const titleB = books[j + 1].querySelector('h2 a').textContent;

    if (titleA > titleB) {
      const temp = books[j];
      books[j] = books[j + 1];
      books[j + 1] = temp;
      //console.log(books[j]);
    }
  }
}

for (let i = 0; i < books.length; i++) {
  container.appendChild(books[i]);
        //console.log(books[i]);
}

//2
const urNewImage = './image/you-dont-know-js.jpg';

document.body.style.backgroundImage = 'url("'+urNewImage+'")';

console.log(document.body.style.backgroundImage);

//3
const newNameBook3 = 'Книга 3. this и Прототипы Объектов';
const listNameBooks = document.querySelectorAll('.book a');

for (let i = 0; i < listNameBooks.length; i++) 
  if (listNameBooks[i].textContent === 'Книга 3. this и Пропопипы Объектов') 
    listNameBooks[i].textContent = newNameBook3; 


//4
document.querySelector('.adv').remove();

//5
function getRank(text) {
  if (text === 'Введение') return { group: 0, value: 0 };
  if (text === 'Предисловие') return { group: 0, value: 1 };

  if (text.startsWith('Глава ')) {
    const num = parseInt(text.split('Глава ')[1], 10);
    return { group: 1, value: num };
  }

  if (text.startsWith('Приложение ')) {
    const letter = text.split('Приложение ')[1].charAt(0);
    return { group: 2, value: letter };
  }

  return { group: 3, value: 0 };
}

function compareChapters(a, b) {
  const ra = getRank(a.textContent.trim());
  const rb = getRank(b.textContent.trim());

  if (ra.group !== rb.group) return ra.group - rb.group;

  if (ra.value < rb.value) return -1;
  if (ra.value > rb.value) return 1;
  return 0;
}

function sortChapters(bookIndex) {
  const book = document.querySelectorAll('.book')[bookIndex];
  const list = book.querySelector('ul');
  const items = Array.from(list.querySelectorAll('li'));

  items.sort(compareChapters);

  for (let i = 0; i < items.length; i++) {
    list.appendChild(items[i]);
  }
}

sortChapters(1); 
sortChapters(4); 


//6
const allBooks = document.querySelectorAll('.book');
let book6 = null;

for (let i = 0; i < allBooks.length; i++) {
  if (allBooks[i].querySelector('h2 a').textContent.trim().startsWith('Книга 6')) {
    book6 = allBooks[i];
    break;
  }
}

const newChapter = document.createElement('li');
newChapter.textContent = 'Глава 8: За пределами ES6';

book6.querySelector('ul').appendChild(newChapter);

sortChapters(5); 
