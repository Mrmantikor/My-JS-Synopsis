/* //! time() timeEnd()
console.time('for...of');
console.timeEnd('for...of');
*/
/*
function repeatStr(n, s) {
  return (repeatStr.repeat = n * s);
}

console.log(repeatStr(3, '*'));

const methodRepeat = 'You NOT Love is Java Skript?!';
console.log(methodRepeat.repeat(3));
*/

/*
 * Array.prototype.map()
 * - Поелементо перебирає оригінальний масив
 * - Не змінює оригінальний масив
 * - Повертає новий масив такої ж довжини
 */

// TODO: Створіть новий масив, в якому усі елементи масиву numbers будуть помножені на 2.

//~ Через метод forEach()
// const numbers = [1, 2, 3, 4, 5];
// const doubleNumbers = [];

// numbers.forEach(el => doubleNumbers.push(el * 2));

// console.log('numbers:', numbers);
// console.log('doubleNumbers:', doubleNumbers);

//~ Через метод map()
// const numbers = [1, 2, 3, 4, 5];
// const doubleNumbers = numbers.map(el => el * 2);

// console.log('numbers:', numbers);
// console.log('doubleNumbers:', doubleNumbers);

/*
TODO: Нехай функція getModels повертає масив моделей (поле model) всіх автомобілів.
 */

// const allCars = [
//   { make: 'Honda', model: 'CR-V', amount: 14, price: 24045 },
//   { make: 'Honda', model: 'Accord', amount: 2, price: 22455 },
//   { make: 'Mazda', model: 'Mazda 6', amount: 8, price: 24195 },
//   { make: 'Mazda', model: 'CX-9', amount: 7, price: 31520 },
//   { make: 'Toyota', model: '4Runner', amount: 19, price: 34210 },
//   { make: 'Toyota', model: 'Sequoia', amount: 16, price: 45560 },
//   { make: 'Toyota', model: 'Tacoma', amount: 4, price: 24320 },
//   { make: 'Ford', model: 'F-150', amount: 11, price: 27110 },
//   { make: 'Ford', model: 'Fusion', amount: 13, price: 22120 },
//   { make: 'Ford', model: 'Explorer', amount: 6, price: 31660 },
// ];

//~ Повна версія
// const getModels = cars => {
//   const allModels = cars.map((el, idx, arr) => {
//     return el.model;
//   });

//   return allModels;
// };

// console.log(getModels(allCars));

//~ Скорочена версія
// const getModels = cars => cars.map(car => car.model);

// console.log(getModels(allCars));
/*
 * Array.prototype.map()
 * - Поелементо перебирає оригінальний масив
 * - Не змінює оригінальний масив
 * - Повертає новий масив такої ж довжини


const allCars = [
  { make: 'Honda', model: 'CR-V', amount: 14, price: 24045 },
  { make: 'Honda', model: 'Accord', amount: 2, price: 22455 },
  { make: 'Mazda', model: 'Mazda 6', amount: 8, price: 24195 },
  { make: 'Mazda', model: 'CX-9', amount: 7, price: 31520 },
  { make: 'Toyota', model: '4Runner', amount: 19, price: 34210 },
  { make: 'Toyota', model: 'Sequoia', amount: 16, price: 45560 },
  { make: 'Toyota', model: 'Tacoma', amount: 4, price: 24320 },
  { make: 'Ford', model: 'F-150', amount: 11, price: 27110 },
  { make: 'Ford', model: 'Fusion', amount: 13, price: 22120 },
  { make: 'Ford', model: 'Explorer', amount: 6, price: 31660 },
];


TODO: Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із змінним
TODO: значенням властивості price залежно від переданої знижки. Метод для копії structuredClone.


const makeCarsWithDiscount = (cars, discount) => {
  cars = structuredClone(cars);

  return cars.map(car => {
    car.price = car.price - car.price * discount;

    return car;
  });
};

console.table(makeCarsWithDiscount(allCars, 0.2));
console.table(makeCarsWithDiscount(allCars, 0.4));

console.table(allCars);


 Метод flatMap

const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

console.log('tweets:', tweets);

const tags = tweets.flatMap(tweet => tweet.tags);

console.log('tags:', tags);


 Метод filter

 - Поелементно перебирає оригінальний массив
 - Повертає новий масив (з елементами або порожній)
 - Додає в масив, що повертається, елементи, які задовольняють умові коллбек-функції
    - якщо коллбек повернув true елемент додається в масив, що повертається
   - якщо коллбек повернув false елемент НЕ додається в масив, що повертається


 const numbers = [5, 10, 15, 20, 25];
 const filteredNumbers = numbers.filter(num => num >= 15);

 console.log('numbers: ', numbers);
 console.log('filteredNumbers: ', filteredNumbers);


 ---------------------------

const allCars = [
  { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
  { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
  { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
  { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
  { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
  { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
  { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
  { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
  { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
  { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false },
];


TODO: Нехай функція filterByPrice повертає масив автомобілів ціна яких менша ніж
TODO: значення параметра threshold.


 const filterByPrice = (cars, threshold) => {
   cars = structuredClone(cars);

   return cars.filter(car => car.price <= threshold);
 };

 console.table(filterByPrice(allCars, 30000));
 console.table(filterByPrice(allCars, 25000));


TODO: Нехай функція getCarsWithDiscount повертає масив автомобілів
TODO: властивість onSale яких true.


 const getCarsWithDiscount = cars => {
   cars = structuredClone(cars);

   return cars.filter(car => car.onSale);
 };

 console.table(getCarsWithDiscount(allCars));


TODO: Нехай функція getCarsWithType повертає масив автомобілів тип яких збігається
TODO: зі значенням параметра type.


 const getCarsWithType = (cars, type) => {
   cars = structuredClone(cars);

   return cars.filter(car => car.type.toLowerCase() === type.toLowerCase());
 };

 console.table(getCarsWithType(allCars, 'truck'));
 console.table(getCarsWithType(allCars, 'sedan'));
 console.table(getCarsWithType(allCars, 'suv'));

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: false },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: false },
];

console.table(players);


 * Метод every
 *
 * - Поелементно перебирає оригінальний масив
 * - Повертає true якщо всі елементи масиву задовольняють умову


 TODO: Перевірте чи всі гравці онлайн

 const isAllOnline = players.every(player => player.online);

 console.log('isAllOnline: ', isAllOnline);


 * Метод some
 *
 * - Поелементно перебирає оригінальний масив
 * - Повертає true якщо хоча б один елемент масиву задовольняє умову


 TODO: Перевірте чи є хоч хтось онлайн

 const isAnyOnline = players.some(player => player.online);

 console.log('isAnyOnline: ', isAnyOnline);


 * Метод toSorted
 *
 * - Свій порядок сортування чисел
 * - Свій порядок сортування рядків
 * - Сортування об'єктів
 *
 * За замовчуванням:
 * - сортує за зростанням
 * - приводить елементи до рядка і сортує за [Unicode](https://symbl.cc/en/unicode-table/)


 const numbers = [1, 9, 6, 2, 3, 10, 20];
 const sortedNumbers = numbers.toSorted();

 console.log('numbers: ', numbers);
 console.log('sortedNumbers: ', sortedNumbers);

 const letters = ['b', 'd', 'a', 'c', 'X'];
 const sortedLetters = letters.toSorted();

 console.log('letters: ', letters);
 console.log('sortedLetters: ', sortedLetters);


 * compareFunction - функція порівняння (callback)
 * Елементи масиву сортуються відповідно до її значення, що повертається


 const numbers = [1, 6, 2, 3, 9, 10, 22, 34];
 const sortedNumbers = numbers.toSorted((currentEl, nextEl) => {
   return nextEl - currentEl;
 });

 console.log('numbers: ', numbers);
 console.log('sortedNumbers: ', sortedNumbers);

 const letters = ['b', 'd', 'a', 'c', 'X', 'Y', 'A'];
 const sortedLetters = letters.toSorted((currentEl, nextEl) => {
   return nextEl.localeCompare(currentEl);
 });

 console.log('letters:', letters);
 console.log('sortedLetters:', sortedLetters);

 console.log('a'.localeCompare('b'));
 console.log('b'.localeCompare('a'));
 console.log('a'.localeCompare('a'));


 * Сортування масиву об'єктів


 const players = [
   { id: 'player-1', name: 'Mangso', timePlayed: 310, online: false },
   { id: 'player-2', name: 'Mango', timePlayed: 470, online: true },
   { id: 'player-3', name: 'Mango', timePlayed: 230, online: true },
   { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
   { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
 ];

 console.table(players);

 TODO: За ігровим часом
 const sortedByBestPlayers = players.toSorted((currentEl, nextEl) => {
   return currentEl.timePlayed - nextEl.timePlayed;
 });

 console.table(sortedByBestPlayers);

 const sortedByWorstPlayers = players.toSorted((currentEl, nextEl) => {
   return nextEl.timePlayed - currentEl.timePlayed;
 });

 console.table(sortedByWorstPlayers);

 TODO: За першою літерою імені
 const byName = players.toSorted((currentEl, nextEl) => {
   if (currentEl.name === nextEl.name) {
     return currentEl.timePlayed - nextEl.timePlayed;
   }

   return currentEl.name.localeCompare(nextEl.name);
 });

 console.table(byName);


 * Метод reduce
 *
 * - Поелементно перебирає оригінальний масив
 * - Значення, що повертається, залежить від розробника


 const numbers = [5, 10, 15, 20, 25];

 console.log('numbers:', numbers);


  1 Ітерація
    acc = 0;
    el = 5;
    idx = 0;
    arr = [5, 10, 15, 20, 25];

    return 5;

  2 Ітерація
    acc = 5;
    el = 10;
    idx = 1;
    arr = [5, 10, 15, 20, 25];

    return 15;

  3 Ітерація
    acc = 15;
    el = 15;
    idx = 2;
    arr = [5, 10, 15, 20, 25];

    return 30;

  4 Ітерація
    acc = 30;
    el = 20;
    idx = 3;
    arr = [5, 10, 15, 20, 25];

    return 50;

  5 Ітерація
    acc = 50;
    el = 25;
    idx = 4;
    arr = [5, 10, 15, 20, 25];

    return 75;


 const total = numbers.reduce((acc, el, idx, arr) => {
   return acc + el;
 }, 0);

 console.log('total:', total);


TODO: Рахуємо загальну зарплату


 const salary = {
   mango: 100,
   poly: 50,
   ajax: 150,
 };


TODO: Рахуємо загальну кількість годин


 const players = [
   { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
   { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
   { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
   { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
   { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
 ];

 console.table(players);

 const totalTimePlayed = players.reduce((acc, player) => {
   return acc + player.timePlayed;
 }, 0);

 console.log('totalTimePlayed:', totalTimePlayed);


TODO: Рахуємо загальну суму товарів кошика


const cart = [
  { label: 'Apples', price: 100, quantity: 2 },
  { label: 'Bananas', price: 120, quantity: 3 },
  { label: 'Lemons', price: 70, quantity: 4 },
];

console.table(cart);

const totalAmount = cart.reduce((acc, item) => {
  return acc + item.price * item.quantity;
}, 0);

console.log('totalAmount:', totalAmount);


 * Ланцюжки методів


const allCars = [
  { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
  { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
  { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
  { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
  { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
  { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
  { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
  { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
  { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
  { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false },
];

console.table(allCars);


TODO: Нехай функція getModelsOnSale повертає масив моделей автомобілів,
TODO: але тільки тих, які зараз на розпродажі.

 const getModelsOnSale = cars => {

   cars = structuredClone(cars);

   return cars.filter(car => car.onSale).map(car => car.model);
 };

 console.log(getModelsOnSale(allCars));


TODO: Нехай функція getSortedCarsOnSale повертає масив автомобілів
TODO: на розпродажі (властивість onSale, яких true), відсортованих за зростанням ціни.


const getSortedCarsOnSale = cars => {
  cars = structuredClone(cars);

  return cars.filter(car => car.onSale).toSorted((currentEl, nextEl) => currentEl.price - nextEl.price);
};

console.table(getSortedCarsOnSale(allCars));
*/
