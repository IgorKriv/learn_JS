'use strict';

const startBtn = document.querySelector('#start');
const buttonPlus = document.querySelector('.screen-btn');

const appData = {
  title: '',
  screens: [],
  screenPrice: 0,
  screenCount: 0,
  adaptive: true,
  rollback: 0,

  servicesPercent: {},
  servicesNumber: {},
  servicePricesPercent: 0,
  servicePricesNumber: 0,
  fullPrice: 0,
  servicePercentPrice: 0,

  
  isCalculated: false,

  init: function () {
    appData.addTitle();

    startBtn.addEventListener('click', appData.start);
    buttonPlus.addEventListener('click', appData.addScreenBlock);

    
    const rollbackRange = document.querySelector('.rollback input[type="range"]');
    const rollbackSpan = document.querySelector('.rollback .range-value');

    rollbackRange.addEventListener('input', function () {
      appData.rollback = +rollbackRange.value;
      rollbackSpan.textContent = appData.rollback + '%';


      if (appData.isCalculated) {
        appData.updateServicePercentPrice();
      }
    });
  },

  addTitle: function () {
    const titleElement = document.querySelector('#title');
    if (titleElement) {
      appData.title = titleElement.textContent;
      document.title = appData.title;
    }
  },

  addScreenBlock: function () {
    const screens = document.querySelectorAll('.screen');
    const lastScreen = screens[screens.length - 1];
    const cloneScreen = lastScreen.cloneNode(true);

    cloneScreen.querySelector('select').value = '';
    cloneScreen.querySelector('input').value = '';

    lastScreen.after(cloneScreen);
  },


  validateScreens: function () {
    const screens = document.querySelectorAll('.screen');
    let filledCount = 0;

    for (let i = 0; i < screens.length; i++) {
      const select = screens[i].querySelector('select');
      const input = screens[i].querySelector('input');

      const isSelectEmpty = select.value === '';
      const isInputEmpty = input.value.trim() === '';

      if (isSelectEmpty && isInputEmpty) continue;

      if (isSelectEmpty || isInputEmpty) {
        alert('Заполните тип экрана и количество полностью либо оставьте блок пустым');
        return false;
      }

      if (isNaN(parseFloat(input.value)) || +input.value <= 0) {
        alert('Введите корректное количество экранов (больше 0)');
        return false;
      }

      filledCount++;
    }

    if (filledCount === 0) {
      alert('Добавьте хотя бы один тип экрана');
      return false;
    }

    return true;
  },

  start: function () {
    if (!appData.validateScreens()) return;

    appData.addScreens();
    appData.addServices();
    appData.addPrices();

    appData.showResult();

    // appData.logger(); 

    
    appData.isCalculated = true;
  },

  addScreens: function () {
    const screens = document.querySelectorAll('.screen');
    appData.screens = [];

    for (let i = 0; i < screens.length; i++) {
      const select = screens[i].querySelector('select');
      const input = screens[i].querySelector('input');

      if (select.value === '' || input.value.trim() === '') continue;

      const selectName = select.options[select.selectedIndex].textContent;

      appData.screens.push({
        id: i,
        name: selectName,
        price: +select.value * +input.value,
        count: +input.value
      });
    }
  },

  addServices: function () {
    const otherItemsPercent = document.querySelectorAll('.percent');
    const otherItemsNumber = document.querySelectorAll('.number');

    appData.servicesPercent = {};
    appData.servicesNumber = {};

    for (let i = 0; i < otherItemsPercent.length; i++) {
      const item = otherItemsPercent[i];
      const check = item.querySelector('input[type="checkbox"]');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type="text"]');

      if (check.checked) {
        appData.servicesPercent[label.textContent] = +input.value;
      }
    }

    for (let i = 0; i < otherItemsNumber.length; i++) {
      const item = otherItemsNumber[i];
      const check = item.querySelector('input[type="checkbox"]');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type="text"]');

      if (check.checked) {
        appData.servicesNumber[label.textContent] = +input.value;
      }
    }
  },

  
  updateServicePercentPrice: function () {
    appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));

    const totalRollback = document.querySelector('#total-count-rollback');
    totalRollback.value = appData.servicePercentPrice;
  },

  addPrices: function () {
    appData.screenPrice = 0;
    appData.screenCount = 0;
    appData.servicePricesNumber = 0;
    appData.servicePricesPercent = 0;

    for (let i = 0; i < appData.screens.length; i++) {
      appData.screenPrice += appData.screens[i].price;
      appData.screenCount += appData.screens[i].count;
    }

    for (let key in appData.servicesNumber) {
      appData.servicePricesNumber += appData.servicesNumber[key];
    }

    for (let key in appData.servicesPercent) {
      appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[key] / 100);
    }

    appData.fullPrice = appData.screenPrice + appData.servicePricesNumber + appData.servicePricesPercent;

    
    appData.updateServicePercentPrice();
  },

  showResult: function () {
    const total = document.querySelector('#total');
    const totalCount = document.querySelector('#total-count');
    const totalCountOther = document.querySelector('#total-count-other');
    const fullTotalCount = document.querySelector('#total-full-count');

    total.value = appData.screenPrice;
    totalCount.value = appData.screenCount;
    totalCountOther.value = appData.servicePricesPercent + appData.servicePricesNumber;
    fullTotalCount.value = appData.fullPrice;
  },

  logger: function () {
    // console.log('Название проекта:', appData.title);
    // console.log('Стоимость экранов:', appData.screenPrice);
    // console.log('Количество экранов:', appData.screenCount);
    // console.log('Стоимость доп. услуг (фикс):', appData.servicePricesNumber);
    // console.log('Стоимость доп. услуг (%):', appData.servicePricesPercent);
    // console.log('Итоговая стоимость:', appData.fullPrice);
    // console.log('Откат (%):', appData.rollback);
    // console.log('Стоимость с учетом отката:', appData.servicePercentPrice);
    // console.log('Массив экранов:', appData.screens);
  }
};

appData.init();