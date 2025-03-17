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
/* //! arguments (Об’єкт аргументів функції)
TODO: Спеціальний об’єкт у функціях, який автоматично збирає всі передані аргументи, навіть не вказані в параметрах.
 * - Доступний лише всередині функцій (крім стрілочних), містить аргументи за індексами (0, 1, 2...).
 * - Має властивість length, що показує кількість аргументів.
 * - Як псевдомасив, не підтримує методи масивів (push, map тощо) — потрібне перетворення.
 * - Корисно для гнучкої обробки різної кількості аргументів без їх явного визначення.
 * - У сучасному коді часто замінюється рест-параметрами (...args), які створюють справжній масив.

TODO: Синтаксис:
arguments[індекс]; // Доступ до аргументів
let realArray = Array.from(arguments); // Перетворення в масив

TODO: Приклад 1. Збирання всіх аргументів
function showArgs() {
  console.log(arguments); // Виводить: { '0': 'sun', '1': 'moon', length: 2 }
  console.log(arguments[1]); // Виводить: 'moon'
}
showArgs('sun', 'moon');

TODO: Приклад 2. Робота із зайвими аргументами
function add(a, b) {
  let sum = arguments[0] + arguments[1]; // Лише a і b
  console.log(sum); // Виводить: 5
  console.log(arguments.length); // Виводить: 3 (враховує всі)
}
add(2, 3, 10);

TODO: Приклад 3. Перетворення для обробки
function multiplyArgs() {
  let argsArray = Array.from(arguments);
  console.log(argsArray.reduce((acc, num) => acc * num, 1)); // Виводить: 24
}
multiplyArgs(2, 3, 4);
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
/* //! Callback (Колбек-функція) (Синхронний колбек)
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
function зробити(дія) {
  console.log('Роблю щось...');
  дія(); // Виклик callback
}

  Виклик з callback
зробити(function () {
  console.log('Закінчив!');
});


TODO: Приклад 2. Приклад із параметрами
function processNumber(num, callback) {
  const result = num * 2;
  callback(result);
};
processNumber(5, function(res) {
  console.log('Результат: ' + res);
}); // Виводить: 'Результат: 10'

*/
/* //! Callback (Асинхронний колбек-функція)
TODO: Функція, яка передається як аргумент і викликається після завершення асинхронної операції.
 * - Асинхронний Callback — це функція, передана іншій функції, яка виконується пізніше, після певної затримки чи події.
 * - Виконується не одразу, а коли завершиться асинхронна дія (наприклад, таймер чи запит).
 * - Залежить від зовнішніх умов, таких як час чи відповідь сервера.
 * - Часто використовується з setTimeout, fetch або подіями (наприклад, кліками).
 * - Корисно для обробки результатів затримок, подій чи асинхронних даних.

TODO: Синтаксис:
function ім’я(параметр, callback) {
    Асинхронна операція
  callback(значення); // Виклик колбеку після завершення
}
  Виклик: ім’я(значення, функція);

TODO: Приклад 1. Простий приклад асинхронного Callback
function waitAndSay(callback) {
  setTimeout(function() {
    callback('Привіт після затримки!');
  }, 1000); // Виклик через 1 секунду
};
  Виклик з callback
waitAndSay(function(message) {
  console.log(message);
}); // Виводить: 'Привіт після затримки!' через 1 секунду

TODO: Приклад 2. Приклад із параметрами
function delayDouble(num, callback) {
  setTimeout(function() {
    const result = num * 2;
    callback(result);
  }, 2000); // Виклик через 2 секунди
};
delayDouble(5, function(res) {
  console.log('Результат: ' + res);
}); // Виводить: 'Результат: 10' через 2 секунди

TODO: Приклад 3. Оголошення асинхронного Callback із рядками
function makeCoffee(firstName, lastName, callback) {
  console.log(`Варимо каву для ${firstName} ${lastName}...`);
  setTimeout(function() {
    callback(`Кава готова для ${firstName} ${lastName}!`);
  }, 3000); // Виклик через 3 секунди
};
  Виклик з callback
makeCoffee('Oleksii', 'Repin', function(message) {
  console.log(message);
}); // Виводить: 'Варимо каву для Oleksii Repin...' і через 3 секунди 'Кава готова для Oleksii Repin!'
*/
/* //! Pure Arrow Function (Чиста стрілочна функція)
TODO: Чиста функція, написана у вигляді стрілки, яка завжди повертає однаковий результат для тих самих вхідних даних і не змінює нічого поза собою.
 * - Чиста стрілочна функція — це короткий запис функції через =>, яка залежить тільки від своїх аргументів.
 * - Не змінює зовнішні змінні чи стан (наприклад, не ламає масиви чи об’єкти поза собою).
 * - Завжди дає той самий результат, якщо дати їй ті самі значення.
 * - Не має "побічних ефектів" (наприклад, не виводить у консоль чи не змінює глобальні дані).
 * - Корисно для передбачуваних обчислень чи роботи з даними.

TODO: Синтаксис:
const ім’я = (параметр1, параметр2) => результат;

TODO: Приклад 1. Простий приклад чистої стрілочної функції
const add = (a, b) => a + b;
console.log(add(2, 3)); // Виводить: 5
console.log(add(2, 3)); // Виводить: 5 (той самий результат)

TODO: Приклад 2. Приклад із одним параметром
const double = (number) => number * 2;
console.log(double(5)); // Виводить: 10
console.log(double(5)); // Виводить: 10 (той самий результат)

TODO: Приклад 3. Оголошення чистої стрілочної функції з масивом
const getFirst = (arr) => arr[0];
const getLength = (arr) => arr.length;
const squareFirst = (arr) => arr[0] * arr[0];

TODO: Виклики функцій (можливі лише після оголошення)
let numbers = [1, 2, 3];
console.log(getFirst(numbers));    // Виведе: 1
console.log(getLength(numbers));   // Виведе: 3
console.log(squareFirst(numbers)); // Виведе: 1 (1 * 1)
console.log(numbers);              // Виведе: [1, 2, 3] (масив не змінився)
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
