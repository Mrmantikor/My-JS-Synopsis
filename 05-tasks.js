/*
TODO: Створи об'єкт person, що містить ім'я, прізвище та вік користувача.
TODO: Виведи його у консоль.
*/

// const person = {
//   firstName: 'Lillie',
//   lastName: 'Cannon',
//   age: 20,
// };

// console.log('person:', person);

/*
TODO: Напиши скрипт, який для об'єкта user, послідовно:
TODO: - додає поле mood зі значенням 'happy'
TODO: - замінює значення hobby на 'skydiving'
TODO: - замінює значення premium на false
TODO: - виводить вміст об'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of
*/

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// console.log('user:', user);

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = !user.premium;

// console.log('user:', user);

// const userKeys = Object.keys(user);

// console.log('userKeys:', userKeys);

// ['name', 'age', 'hobby', 'premium', 'mood']

// for (const key of userKeys) {
//   console.log(`${key}: ${user[key]}`);
// }

//TODO: Зведіть у квадрат кожен елемент цього об'єкта.

// const coordinates = {
//   x: 2,
//   y: 3,
//   z: 4,
// };

// console.log('coordinates:', coordinates);

// const coordinatesKeys = Object.keys(coordinates);

// console.log('coordinatesKeys:', coordinatesKeys);

// // coordinatesKeys = ['x', 'y', 'z'];

// for (const key of coordinatesKeys) {
//   /*
//     1 Ітерація

//       const key = 'x';
//       coordinates['x'] = coordinates['x'] ** 2;

//     2 Ітерація

//       const key = 'y';
//       coordinates['y'] = coordinates['y'] ** 2;

//     2 Ітерація

//       const key = 'z';
//       coordinates['z'] = coordinates['z'] ** 2;
//   */
//   coordinates[key] = coordinates[key] ** 2;
// }

// console.log('coordinates:', coordinates);

/*
TODO: Напиши функцію hasProperty(obj, key), яка перевіряє, чи є певний ключ у переданому об'єкті.
*/

// const hasProperty = function (obj, key) {
//   return obj[key] !== undefined;
// };

// const userAlice = { name: 'Alice', age: 25 };
// const userLeona = { name: 'Leona', age: 25 };

// console.log(hasProperty(userAlice, 'age')); // true
// console.log(hasProperty(userLeona, 'gender')); // false

/*
TODO: Напиши функцію mergeObjects(obj1, obj2), яка об'єднує два об'єкти в один.
*/

//~ Копія обʼєкта з примітивними типами даних
// const user = {
//   firstName: 'Oleksii',
// };

// console.log('user:', user);

// const userCopy = Object.assign({}, user);

// console.log('userCopy:', userCopy);

// userCopy.firstName = 'George';

// console.log('user:', user);
// console.log('userCopy:', userCopy);

//~ Конкатенація обʼєктів
// const objA = {
//   a: 1,
// };
// const objB = {
//   b: 10,
// };

// const mergedObj = Object.assign({}, objA, objB);

// console.log('objA:', objA);
// console.log('objB:', objB);
// console.log('mergedObj:', mergedObj);

//~ Вирішення задачі

// const mergeObjects = function (obj1, obj2) {
//   return Object.assign({}, obj1, obj2);
// };

// console.log(mergeObjects({ a: 1 }, { b: 2 }));

/*
TODO: Напиши функцію isEmptyObject(obj), яка перевіряє, чи містить обʼєкт властивості.
*/

// const isEmptyObject = function (obj) {
//   const objKeys = Object.keys(obj);

//   return objKeys.length === 0;
// };

// console.log(isEmptyObject({})); // true
// console.log(isEmptyObject({ a: 1 })); // false

/*
TODO: У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для
TODO: підсумовування всіх зарплат і збережіть результат у змінній sum.
TODO: Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.
*/

//~ Через for...in
// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// console.log('salaries:', salaries);

// let totalSalary = 0;

// for (const key in salaries) {
//   totalSalary += salaries[key];
// }

// console.log('totalSalary:', totalSalary);

//~ Через Object.keys() та for...of
// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// console.log('salaries:', salaries);

// const salariesKeys = Object.keys(salaries);

// console.log('salariesKeys:', salariesKeys);

// let totalSalary = 0;

// for (const key of salariesKeys) {
//   totalSalary += salaries[key];
// }

// console.log('totalSalary:', totalSalary);

//~ Через Object.values() та for...of
const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

console.log('salaries:', salaries);

const salariesValues = Object.values(salaries);

console.log('salariesValues:', salariesValues);

// let totalSalary = 0;

// for (const value of salariesValues) {
//   totalSalary += value;
// }

// console.log('totalSalary:', totalSalary);
