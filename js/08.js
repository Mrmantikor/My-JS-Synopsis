// #region //? Function (Теорія)
/* //! Function Arguments and Parameters (Аргументи та параметри функції)
TODO: Параметри — це змінні, визначені у функції, а аргументи — це значення, передані при її виклику.
 * - Параметри — це "місця" у функції, куди передаються дані (назви в дужках при оголошенні).
 * - Аргументи — це конкретні значення, які передаються в функцію під час її виклику.
 * - Параметри необов’язкові, якщо їх немає — функція працює без них.
 * - Аргументів може бути більше або менше, ніж параметрів (надлишок ігнорується, брак — undefined).
 * - Корисно для передачі даних у функцію, щоб вона могла їх обробити.

TODO: Синтаксис:
function ім’я(параметр1, параметр2) {
  Робота з параметрами
}
Виклик: ім’я(аргумент1, аргумент2);

TODO: Приклади:
function greet(name, age) {
  console.log(`Привіт, ${name}, тобі ${age} років`);
}
greet('Josh', 25); // Виводить: 'Привіт, Josh, тобі 25 років'

function add(a, b) {
  console.log(a + b);
}
add(3, 4); // Виводить: 7

function sayHi(name) {
  console.log('Hi, ' + name);
}
sayHi('Anna'); // Виводить: 'Hi, Anna'
sayHi(); // Виводить: 'Hi, undefined' (немає аргументу для name)

function listArgs(a, b, c) {
  console.log(a, b, c);
}
listArgs(1, 2, 3, 4); // Виводить: 1 2 3 (4 ігнорується)
*/
/* //! return (Повернення значення з функції)
TODO: Завершує функцію і повертає значення туди, де її викликали.
 * - `return` — команда, яка каже функції, що повернути як результат.
 * - Після `return` функція зупиняється, код далі не виконується.
 * - Якщо `return` немає або він без значення, функція повертає `undefined`.
 * - Може повертати будь-що: число, рядок, масив, об’єкт тощо.
 * - Корисно для отримання результату роботи функції.

TODO: Синтаксис:
function ім’я() {
  return значення; // Повертаємо щось
}

TODO: 1. Простий приклад return
function sayHello() {
  return 'Hello';
}
console.log(sayHello()); // Виводить: 'Hello'

TODO: 2. Приклад неявного повернення (implicit return у стрілочній функції)
const double = (num) => num * 2;
console.log(double(5)); // Виводить: 10
*/
/* //! Function Declaration (Оголошення функції)
TODO: Спосіб створення функції з використанням ключового слова function та імені.
 * - Function Declaration — це спосіб оголосити функцію, яка має ім’я і може бути викликана будь-де в коді.
 * - Завдяки "підняттю" (hoisting) функцію можна викликати до її оголошення в коді.
 * - Може приймати параметри та повертати значення через return.
 * - Виконує код у своєму тілі, коли її викликають за ім’ям.
 * - Корисно для створення повторно використовуваних блоків коду.

TODO: Синтаксис:
function ім’я(параметр1, параметр2) {
  Код функції
  return результат; // Необов’язково
}

TODO: Простий приклад Function Declaration
function sayHello() {
  return 'Привіт!';
}
console.log(sayHello()); // Виводить: 'Привіт!'

TODO: Приклад із параметрами та hoisting
console.log(add(3, 4)); // Виводить: 7 (працює до оголошення завдяки hoisting)
function add(a, b) {
  return a + b;
}

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
TODO: Спосіб створення функції шляхом присвоєння її змінній.
 * - Function Expression — це коли функція створюється як значення змінної, а не оголошується напряму.
 * - Не піднімається (no hoisting), тому викликати можна лише після оголошення.
 * - Може бути іменованою (з назвою) або анонімною (без назви).
 * - Виконується, коли викликають змінну, якій присвоєно функцію.
 * - Корисно для передачі функцій як значень чи використання в умовах.

TODO: Синтаксис:
const ім’я = function [назва](параметр1, параметр2) {
  Код функції
  return результат; // Необов’язково
};

TODO: Приклад 1. Простий приклад Function Expression
const sayHello = function() {
  return 'Привіт!';
};
console.log(sayHello()); // Виводить: 'Привіт!'

TODO: Приклад 2. Приклад із параметрами (анонімна функція)
const add = function(a, b) {
  return a + b;
};
console.log(add(3, 4)); // Виводить: 7

TODO: Приклад 3. Оголошення функцій через Function Expression
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
TODO: Компактний спосіб створення функцій із використанням стрілки =>.
 * - Arrow Function — це коротший запис функції через =>, без ключового слова function.
 * - Не має власного `this`, бере його з зовнішнього контексту.
 * - Не піднімається (no hoisting), виклик можливий лише після оголошення.
 * - Підтримує неявне повернення (implicit return), якщо немає фігурних дужок.
 * - Корисно для коротких функцій, передачі в методи типу map чи filter.

TODO: Синтаксис:
const ім’я = (параметр1, параметр2) => {
    Код функції
  return результат; // Необов’язково
};
  Або з неявним поверненням: const ім’я = (параметр) => результат;

TODO: Приклад 1. Простий приклад Arrow Function
const sayHello = () => {
  return 'Привіт!';
};
console.log(sayHello()); // Виводить: 'Привіт!'

TODO: Приклад 2. Приклад із параметрами та неявним поверненням
const add = (a, b) => a + b;
console.log(add(3, 4)); // Виводить: 7

TODO: Приклад 3. Оголошення функцій через Arrow Function
const greetUser = (firstName, lastName) => {
  console.log(`Welcome ${firstName} ${lastName}`);
};

const greetUser1 = (firstName, lastName) => {
  console.log(`Welcome ${firstName} ${lastName}`);
};

const greetUser2 = (firstName, lastName) => {
  console.log(`Welcome ${firstName} ${lastName}`);
};

TODO: Виклики функцій (можливі лише після оголошення)
greetUser('Oleksii', 'Repin');    // Виведе: 'Welcome Oleksii Repin'
greetUser1('Phoebe', 'Howell');   // Виведе: 'Welcome Phoebe Howell'
greetUser2('Garrett', 'Cooper');  // Виведе: 'Welcome Garrett Cooper'
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
/* //! Pure Arrow Function (Чиста стрілочна функція)
TODO: Чиста функція, написана у вигляді стрілки, яка завжди повертає однаковий результат для тих самих вхідних даних і не змінює нічого поза собою.
 * - Чиста стрілочна функція — це короткий запис функції через =>, яка залежить тільки від своїх аргументів.
 * - Не змінює зовнішні змінні чи стан (наприклад, не ламає масиви чи об’єкти поза собою).
 * - Завжди дає той самий результат, якщо дати їй ті самі значення.
 * - Не має "побічних ефектів" (наприклад, не виводить у консоль чи не змінює глобальні дані).

TODO: Приклад чистої стрілочної функції
const add = (a, b) => a + b;
console.log(add(2, 3)); // Виводить: 5
console.log(add(2, 3)); // Виводить: 5 (той самий результат)

TODO: Ще один приклад чистої стрілочної функції
const double = number => number * 2;
console.log(double(5)); // Виводить: 10
console.log(double(5)); // Виводить: 10 (той самий результат)

TODO: Приклад із масивом (не змінює оригінал)
const getFirst = arr => arr[0];
let numbers = [1, 2, 3];
console.log(getFirst(numbers)); // Виводить: 1
console.log(numbers); // Виводить: [1, 2, 3] (масив не змінився)
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
/* //! Callback (Колбек-функція)
TODO: Функція, яка передається як аргумент в іншу функцію і викликається пізніше.
 * - Callback — це функція, яку передають іншій функції, щоб виконати її в потрібний момент.
 * - Виконується після завершення певної дії (асинхронної чи синхронної).
 * - Не має власного часу виклику, залежить від функції, якій її передали.
 * - Часто використовується в методах масиву (map, filter) чи асинхронному коді (setTimeout).
 * - Корисно для обробки результатів, подій чи затримок.

TODO: Синтаксис:
function ім’я(параметр, callback) {
    Код
  callback(); // Виклик колбеку
}
  Виклик: ім’я(значення, функція);

TODO: Приклад 1. Простий приклад Callback
function sayHello(callback) {
  console.log('Готуємося...');
  callback();
};
sayHello(function() {
  console.log('Привіт!');
}); // Виводить: 'Готуємося...' і 'Привіт!'

TODO: Приклад 2. Приклад із параметрами
function processNumber(num, callback) {
  const result = num * 2;
  callback(result);
};
processNumber(5, function(res) {
  console.log('Результат: ' + res);
}); // Виводить: 'Результат: 10'

TODO: Приклад 3. Оголошення функцій через Callback
const greetUser = function (firstName, lastName, callback) {
  callback(`Welcome ${firstName} ${lastName}`);
};

const greetUser1 = function (firstName, lastName, callback) {
  callback(`Welcome ${firstName} ${lastName}`);
};

const greetUser2 = function (firstName, lastName, callback) {
  callback(`Welcome ${firstName} ${lastName}`);
};

TODO: Виклики функцій (можливі лише після оголошення)
greetUser('Oleksii', 'Repin', function(message) {
  console.log(message);
}); // Виведе: 'Welcome Oleksii Repin'

greetUser1('Phoebe', 'Howell', function(message) {
  console.log(message);
}); // Виведе: 'Welcome Phoebe Howell'

greetUser2('Garrett', 'Cooper', function(message) {
  console.log(message);
}); // Виведе: 'Welcome Garrett Cooper'
*/
