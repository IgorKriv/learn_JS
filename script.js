'use strict';

const rollback = 5;

const title = prompt("Как называется ваш проект?");
const screens = prompt("Какие типы экранов нужно разработать? \n(пример: \"Простые, Сложные, Интерактивные\")");

const screenPrice = getPrice("Сколько будет стоить данная работа? \n(пример: 12000)");

const adaptive = confirm("Нужен ли адаптив на сайте?");

const service1 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice1 = getPrice("Сколько это будет стоить?");
const service2 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice2 = getPrice("Сколько это будет стоить?");


function isNumber(value) {
  return value !== null && String(value).trim() !== '' && !isNaN(+value);
}

function getPrice(question) {
  let value;
  do {
    value = prompt(question);
  } while (!isNumber(value));
  return Number(value);
}

const getAllServicePrices = function (price1, price2) {
  const validPrice1 = isNumber(price1) ? Number(price1) : 0;
  const validPrice2 = isNumber(price2) ? Number(price2) : 0;
  return validPrice1 + validPrice2;
};

function getFullPrice() {
  return screenPrice + allServicePrices;
}

function getTitle() {
  
  const trimmedTitle = (title || '').trim();
  const firstLetter = trimmedTitle.charAt(0).toUpperCase();
  const restOfTitle = trimmedTitle.slice(1).toLowerCase();
  return firstLetter + restOfTitle;
}

function getServicePercentPrices() {
  const rollbackSum = fullPrice * (rollback / 100);
  return Math.ceil(fullPrice - rollbackSum);
}

function showTypeOf(value) {
  console.log(typeof value);
}

function getRollbackMessage() {
  switch (true) {
    case (fullPrice > 30000):
      return "Даем скидку в 10%, стоимость проекта : " + Math.ceil(fullPrice * 0.9);
    case (fullPrice >= 15000 && fullPrice <= 30000):
      return "Даем скидку в 5%, стоимость проекта : " + Math.ceil(fullPrice * 0.95);
    case (fullPrice > 0 && fullPrice < 15000):
      return "Скидка не предусмотрена, стоимость проекта : " + fullPrice;
    default:
      return "Что то пошло не так";
  }
}



const allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);
const fullPrice = getFullPrice();
const servicePercentPrice = getServicePercentPrices();


showTypeOf(title);            
showTypeOf(screens);          
showTypeOf(screenPrice);     
showTypeOf(adaptive);        
showTypeOf(service1);        
showTypeOf(servicePrice1);    
showTypeOf(service2);         
showTypeOf(servicePrice2);    

console.log('Название проекта: ' + getTitle());
console.log('Типы экранов для разработки: ' + screens);
console.log(getRollbackMessage());
console.log('Стоимость за вычетом отката посреднику: ' + servicePercentPrice);