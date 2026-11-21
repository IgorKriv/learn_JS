'use strict';

const appData = {
  title: '',
  screens: '',
  screenPrice: 0,
  adaptive: true,
  rollback: 12,      
  service1: '',
  servicePrice1: 0,
  service2: '',
  servicePrice2: 0,
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,

//1.1
  tagH1: document.getElementsByTagName('h1'),
//1.2
  tagButtons: document.getElementsByClassName('handler_btn'),
//1.3
  tagButtonPlus: document.querySelector('.screen-btn'),
//1.4
   tagClass_otheritems_percent: document.querySelectorAll('.other-items.percent'),
   tagClass_otheritems_number: document.querySelectorAll('.other-items.number'),
//1.5. 
   childTagInput_typerange: document.querySelector('.rollback input[type="range"]'),
//1.6. 
   childTagSpan_range_value: document.querySelector('.rollback .range-value'),
//1.7. 
   tagInputs: document.getElementsByClassName('total-input'),
//1.8.
   bLocksTagClassScreen: document.querySelectorAll('.screen'),


  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },

  isString: function (str){
    return typeof str === 'string' && str.trim() !== '' && !this.isNumber(str)
  },
  
  getString: function(question, defaultValue){
    let value;
  do {
      value = prompt(question, defaultValue);
     } while (!this.isString(value))
        return value.trim();
  }, 

   getNumeric: function(question){
    let value;
  do {
      value = prompt(question);
     } while (!this.isNumber(value))
        return value.trim();
  }, 

   getPrice: function (question) {
    let value;

      value = this.getNumeric(question);
 
    return Number(value);
  },

  
  asking: function () {
    
    this.title = this.getString("Как называется ваш проект?", "Калькулятор верстки");
    this.screens = this.getString("Какие типы экранов нужно разработать?", "Простые, Сложные");
    
    this.screenPrice = this.getPrice("Сколько будет стоить данная работа?");
    this.adaptive = confirm("Нужен ли адаптив на сайте?");
    
    this.service1 = this.getString("Какой дополнительный тип услуги нужен?");
    this.servicePrice1 = this.getPrice("Сколько это будет стоить?");
    
    this.service2 = this.getString("Какой дополнительный тип услуги нужен?");
    this.servicePrice2 = this.getPrice("Сколько это будет стоить?");
  },

  getAllServicePrices: function () {
    return this.servicePrice1 + this.servicePrice2;
  },

  getFullPrice: function () {
    return this.screenPrice + this.allServicePrices;
  },

  getServicePercentPrice: function () {
    const rollbackSum = this.fullPrice * (this.rollback / 100);
    return Math.ceil(this.fullPrice - rollbackSum);
  },

  getTitle: function () {
    const trimmed = (this.title || '').trim();
    if (trimmed === '') return ''; 
    return trimmed[0].toUpperCase() + trimmed.slice(1).toLowerCase();
  },

  getRollbackMessage: function (price) {
    if (price >= 30000) {
      return "Даем скидку в 10%, стоимость проекта : " + Math.ceil(price * 0.9);
    } else if (price >= 15000 && price < 30000) {
      return "Даем скидку в 5%, стоимость проекта : " + Math.ceil(price * 0.95);
    } else if (price > 0 && price < 15000) {
      return "Скидка не предусмотрена, стоимость проекта : " + price;
    } else {
      return "Что то пошло не так";
    }
  },

  logger: function () {
  /*
    console.log('=== Вывод всех свойств и методов через for in ===');
 
    for (let key in this) {
      
      console.log(key, ':', this[key]);
    }
  */
    console.log('Название проекта: ' + this.getTitle());
    console.log('Типы экранов для разработки: ' + this.screens);
    console.log(this.getRollbackMessage(this.fullPrice));
    console.log('Стоимость за вычетом отката посреднику: ' + this.servicePercentPrice);

    console.log(this.tagH1);
    console.log(this.tagButtons);
    console.log(this.tagButtonPlus);
    console.log(this.tagClass_otheritems_percent);
    console.log(this.tagClass_otheritems_number);
    console.log(this.childTagInput_typerange);
    console.log(this.childTagSpan_range_value);
    console.log(this.tagInputs);
    console.log(this.bLocksTagClassScreen);
  },

  
  start: function () {
  
    this.asking();
    
    
    this.allServicePrices = this.getAllServicePrices();
    this.fullPrice = this.getFullPrice();
    this.servicePercentPrice = this.getServicePercentPrice();
    
  
    this.logger();
  }
};


appData.start();