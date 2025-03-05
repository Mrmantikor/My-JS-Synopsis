// #region //? Function (Теорія)
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
