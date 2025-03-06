// #region //? Function (Теорія)
/* //! Аргументи та параметри функції (Function Arguments and Parameters)
TODO: Параметри — це змінні, визначені у функції для прийняття значень, а аргументи — це значення, передані функції при її виклику.
 * - Параметри: оголошуються в оголошенні функції як змінні, які приймають дані.
 * - Аргументи: конкретні значення, передані функції під час виклику.
 * - Кількість параметрів і аргументів може не збігатися: зайві аргументи доступні через об’єкт arguments, а ненадані параметри — undefined.
 * - Використовуються для передачі інформації у функцію для обробки.

TODO: Приклад із параметрами та аргументами
function greetUser(firstName, lastName) { // firstName, lastName — параметри
  console.log(`Welcome ${firstName} ${lastName}`);
}

greetUser('Bohdan', 'Vasylovych'); // 'Bohdan', 'Vasylovych' — аргументи
Результат: Welcome Bohdan Vasylovych

TODO: Приклад із різною кількістю параметрів і аргументів
function showInfo(name, age, city) { // Параметри: name, age, city
  console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
}

showInfo('Anna'); // Аргумент: 'Anna', age і city будуть undefined
Результат: Name: Anna, Age: undefined, City: undefined

showInfo('Oleksii', 25, 'Kyiv', 'Extra'); // 'Extra' — зайвий аргумент
Результат: Name: Oleksii, Age: 25, City: Kyiv
*/
/* //! return (Повернення значення з функції)
TODO: Завершує виконання функції та повертає значення до місця її виклику.
 * - Використовується всередині функції для повернення результату її роботи.
 * - Після return виконання функції припиняється, і подальший код у функції не виконується.
 * - Якщо return не вказано або вказано без значення, функція повертає undefined.
 * - Може повертати будь-який тип даних: число, рядок, об’єкт, функцію тощо.
 * - У стрілочних функціях із одним виразом return автоматичний (без явного написання).

TODO: Простий приклад із return
function add(a, b) {
  return a + b; // Повертає суму і завершує функцію
}

console.log(add(5, 3)); // Виведе: 8

TODO: Приклад із завершенням виконання
function checkAge(age) {
  if (age < 18) {
    return 'Too young'; // Завершує функцію, якщо умова виконана
  }
  console.log('Checking further...');
  return 'Adult'; // Повертається, якщо умова не виконана
}

console.log(checkAge(15)); // Виведе: 'Too young'
console.log(checkAge(20)); // Виведе: Checking further... \n Adult

TODO: Приклад без return
function noReturn() {
  console.log('No return here');
}

console.log(noReturn()); // Виведе: No return here \n undefined

TODO: Приклад із поверненням об’єкта
function createUser(name, age) {
  return { name: name, age: age }; // Повертає об’єкт
}

console.log(createUser('Bohdan', 25)); // Виведе: { name: 'Bohdan', age: 25 }

TODO: Автоматичний return у стрілочній функції
const multiply = (a, b) => a * b; // Без фігурних дужок — автоматичний return
console.log(multiply(4, 5)); // Виведе: 20
*/
/* //! Function Declaration (Оголошення функції)
TODO: Дозволяє викликати функцію до її оголошення в коді завдяки hoisting (підняттю). Перевага: можна організувати код із окремими "регіонами" для аргументів (викликів) і функцій.
 * - Оголошення функції через ключове слово function із назвою та (опціонально) параметрами.
 * - Hoisting: функція доступна в усій області видимості, навіть до її фізичного місця в коді.
 * - Повертає undefined, якщо не вказано return, але може виконувати дії (наприклад, виводити в консоль).
 * - Використовується для структурованого коду, де логіка функцій відділена від їх викликів.

TODO: Виклики функцій (регіон аргументів)
greetUser('Bohdan', 'Vasylovych'); // Виведе: 'Welcome Bohdan Vasylovych'
greetUser1('Sarah', 'Connor');     // Виведе: 'Welcome Sarah Connor'
greetUser2('Bruce', 'Lee');        // Виведе: 'Welcome Bruce Lee'

TODO: Оголошення функцій (регіон функцій)
function greetUser(firstName, lastName) {
  console.log(`Welcome ${firstName} ${lastName}`);
}

function greetUser1(firstName, lastName) {
  console.log(`Welcome ${firstName} ${lastName}`);
}

function greetUser2(firstName, lastName) {
  console.log(`Welcome ${firstName} ${lastName}`);
}
*/
/* //! Function Expression (Функціональний вираз)
TODO: Виклик можливий тільки після оголошення в коді, на відміну від Function Declaration. Інтерпретатор спочатку обробляє оголошення змінної, а потім дозволяє виклик функції.
 * - Оголошення функції через присвоєння анонімної функції змінній (const, let, var).
 * - Hoisting не застосовується до самої функції, лише до змінної (з var — undefined до присвоєння).
 * - Повертає undefined, якщо не вказано return, але виконує дії в тілі функції.
 * - Використовується, коли порядок виклику має відповідати логіці оголошення.

TODO: Оголошення функцій через Function Expression
const greetUser = function (firstName, lastName) {
  console.log(`Welcome ${firstName} ${lastName}`);
};

const greetUser1 = function (firstName, lastName) {
  console.log(`Welcome ${firstName} ${lastName}`);
};

const greetUser2 = function (firstName, lastName) {
  console.log(`Welcome ${firstName} ${lastName}`);
};

TODO: Виклики функцій (можливі лише після оголошення)
greetUser('Oleksii', 'Repin');    // Виведе: 'Welcome Oleksii Repin'
greetUser1('Phoebe', 'Howell');   // Виведе: 'Welcome Phoebe Howell'
greetUser2('Garrett', 'Cooper');  // Виведе: 'Welcome Garrett Cooper'
*/
/* //! Arrow Function (Стрілочна функція)
TODO: Компактний синтаксис для оголошення функцій, введений у ES6, із особливим поводженням із this.
 * - Оголошується через => замість ключового слова function, не має власного this (бере з зовнішнього контексту).
 * - Не піднімається (hoisting не застосовується), виклик можливий лише після оголошення.
 * - Повертає значення автоматично, якщо тіло — один вираз (без фігурних дужок і return).
 * - Використовується для коротких функцій, колбеків і коли потрібен лексичний this.

TODO: Приклад стрілочної функції
const greetUser = (firstName, lastName) => {
  console.log(`Welcome ${firstName} ${lastName}`);
};

TODO: Виклики функції (після оголошення)
greetUser('Oleksii', 'Repin');    // Виведе: 'Welcome Oleksii Repin'
greetUser('Phoebe', 'Howell');    // Виведе: 'Welcome Phoebe Howell'

TODO: Короткий синтаксис для одного виразу
const addNumbers = (a, b) => a + b;
console.log(addNumbers(5, 3));    // Виведе: 8

TODO: З одним параметром (без дужок)
const square = x => x * x;
console.log(square(4));           // Виведе: 16
*/
/* //! Callback (Колбек-функція)
TODO: Функція, передана як аргумент іншій функції, яка викликається після завершення певної дії.
 * - Колбек — це механізм для асинхронного чи відкладеного виконання коду.
 * - Використовується для обробки результатів операцій, які займають час (наприклад, запити до сервера, таймери).
 * - Не має власного this у стрілочних функціях, у звичайних функціях — залежить від контексту виклику.
 * - Може бути синхронним (виклик одразу) або асинхронним (виклик після затримки чи події).
 * - Основна ідея: колбек — це функція, яка "зворотньо викликається" (callback) після завершення роботи основної функції.
 * - Типи колбеків:
 *   - Синхронні: виконуються одразу після основної операції (наприклад, forEach).
 *   - Асинхронні: виконуються після затримки чи події (наприклад, setTimeout, fetch).
 * - Як працює:
 *   - Основна функція приймає колбек як параметр.
 *   - Після завершення роботи викликає колбек із результатом (якщо є).
 *   - Синхронні колбеки обробляються стеком викликів, асинхронні — через Event Loop.
 * - Переваги:
 *   - Гнучкість: дозволяє передавати різну логіку обробки.
 *   - Асинхронність: уникає блокування основного потоку.
 * - Недоліки:
 *   - Callback Hell: вкладені колбеки ускладнюють читання при множинних асинхронних операціях.
 *   - Помилки: без обробки (try/catch чи error-параметр) можуть бути пропущені.
 * - Контекст this:
 *   - У звичайних функціях залежить від способу виклику (call, bind).
 *   - У стрілочних функціях — лексичний, із зовнішнього контексту.
 * - Коли використовувати:
 *   - Прості асинхронні операції (таймери, події).
 *   - Колбеки в методах масиву (forEach, map, filter).
 *   - Старі API без Promises.
*/
/* //! Callback (Колбек-функція) (Синхронний колбек)
TODO: Найпростіший приклад із синхронним колбеком
function sayHello(callback) {
  callback(); // Виклик колбека одразу
}

function hello() {
  console.log('Hello!');
}

sayHello(hello); // Передаємо hello як колбек
Результат: - Hello!

TODO: Приклад трохи складніш:
function processData(data, callback) {
  console.log('Processing data: ' + data);
  callback(data); // Виклик колбека з переданими даними
}

function handleResult(result) {
  console.log('Result handled: ' + result);
}

processData('User Info', handleResult); // Передаємо handleResult як колбек
TODO: Результат:
 * - Processing data: User Info
 * - Result handled: User Info
*/
/* //! Callback (Колбек-функція) (Асинхронний колбек)
TODO: Найпростіший приклад із асинхронним колбеком
function waitAndSay(callback) {
  setTimeout(callback, 1000); // Виклик колбека через 1 секунду
}

function hi() {
  console.log('Hi!');
}

waitAndSay(hi); // Передаємо hi як колбек
Результат:
 * - [через 1 секунду]
 * - Hi!

TODO: Приклад трохи складніш:
function fetchData(url, callback) {
  console.log('Fetching data from: ' + url);
  setTimeout(() => {
    const data = { id: 1, name: 'Bohdan' };
    callback(data); // Виклик колбека після затримки
  }, 2000);
}

function displayData(data) {
  console.log('Data received: ' + JSON.stringify(data));
}

fetchData('http://example.com/api', displayData); // Асинхронний виклик
TODO: Результат:
 * - Fetching data from: http://example.com/api
 * - [через 2 секунди]
 * - Data received: {"id":1,"name":"Bohdan"}
*/

/* //! Стек викликів, функції та порядок виконання (Call Stack Execution)
TODO: Демонструє порядок виконання функцій у стеку викликів JavaScript (візуалізація: http://latentflip.com/loupe/).
 * - Стек викликів (Call Stack): структура даних, яка відстежує виконання функцій у порядку "остання зайшла — перша вийшла" (LIFO).
 * - Кожна функція додається до стеку під час виклику і видаляється після завершення.
 * - Порядок виконання: спочатку зовнішній код, потім вкладені виклики функцій по черзі.
 * - Використовуйте http://latentflip.com/loupe/ для покрокової візуалізації стеку викликів цього коду.
 * 

TODO: Оголошення функцій
const fn1 = function () {
  console.log('fn1 execution');

  console.log('Before fn2 execution');
  fn2(); // Виклик fn2 додається до стеку
  console.log('After fn2 execution');
};

const fn2 = function () {
  console.log('fn2 execution');

  console.log('Before fn3 execution');
  fn3(); // Виклик fn3 додається до стеку
  console.log('After fn3 execution');
};

const fn3 = function () {
  console.log('fn3 execution');
};

TODO: Виконання коду
console.log('Before fn1 execution');
fn1(); // Виклик fn1 додається до стеку
console.log('After fn1 execution');

 Порядок виведення у консоль:
1. 'Before fn1 execution'    // Зовнішній код виконується першим
2. 'fn1 execution'          // fn1 додано до стеку
3. 'Before fn2 execution'   // fn1 викликає fn2
4. 'fn2 execution'          // fn2 додано до стеку
5. 'Before fn3 execution'   // fn2 викликає fn3
6. 'fn3 execution'          // fn3 додано до стеку і завершує виконання
7. 'After fn3 execution'    // fn3 видалено зі стеку, fn2 продовжує
8. 'After fn2 execution'    // fn2 видалено зі стеку, fn1 продовжує
9. 'After fn1 execution'    // fn1 видалено зі стеку, зовнішній код завершує
*/
/* //! Приклад із колбеками та стеком викликів (Call Stack Execution with Callbacks)
TODO: Демонструє порядок виконання функцій із колбеками у стеку викликів JavaScript.
 * - Стек викликів (Call Stack): структура даних, яка відстежує виконання функцій у порядку "остання зайшла — перша вийшла" (LIFO).
 * - Колбек: функція, передана як аргумент іншій функції, викликається після певної дії.
 * - Кожна функція додається до стеку під час виклику і видаляється після завершення.
 * - Порядок виконання: спочатку зовнішній код, потім вкладені виклики через колбеки.

TODO: Оголошення функцій із колбеками
const fn1 = function (callbackFn2) {
  console.log('fn1 execution');
  console.log('Before fn2 execution');
  callbackFn2(); // Виклик колбека fn2 додається до стеку
  console.log('After fn2 execution');
};

const fn2 = function (callbackFn3) {
  console.log('fn2 execution');
  console.log('Before fn3 execution');
  callbackFn3(); // Виклик колбека fn3 додається до стеку
  console.log('After fn3 execution');
};

const fn3 = function () {
  console.log('fn3 execution');
};

TODO: Виклик із передачею колбеків
fn1(() => fn2(fn3)); // Передаємо стрілочну функцію як колбек у fn1, яка викликає fn2 із fn3 як колбеком

Порядок виведення у консоль:
1. 'fn1 execution'          // fn1 додано до стеку
2. 'Before fn2 execution'   // fn1 викликає колбек
3. 'fn2 execution'          // Колбек (стрілочна функція) викликає fn2
4. 'Before fn3 execution'   // fn2 викликає свій колбек
5. 'fn3 execution'          // fn3 додано до стеку і завершує виконання
6. 'After fn3 execution'    // fn3 видалено зі стеку, fn2 продовжує
7. 'After fn2 execution'    // fn2 видалено зі стеку, fn1 продовжує
*/

// #endregion
