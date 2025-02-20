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
