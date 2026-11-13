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

