//#region //? Масиви (Array)
/* //! Масив (Array) - Основи
TODO: Масив — це список, у якому можна зберігати кілька значень під одним ім’ям.
 * - Масив — це змінна, яка містить багато елементів (чисел, рядків тощо) у порядку.
 * - Елементи мають номери (індекси), починаючи з 0.
 * - Останній елемент має індекс: довжина масиву мінус 1 (length - 1).
 * - Щоб перезаписати масив, просто присвоюємо йому нові значення через =.

TODO: Створення масиву
let fruits = ['apple', 'banana', 'orange'];
console.log(fruits); // Виводить: ['apple', 'banana', 'orange']

TODO: Доступ до елемента (індекс 1)
console.log(fruits[1]); // Виводить: 'banana'

TODO: Доступ до останнього елемента
console.log(fruits[fruits.length - 1]); // Виводить: 'orange'

TODO: Перезапис одного елемента
fruits[0] = 'pear';
console.log(fruits); // Виводить: ['pear', 'banana', 'orange']

TODO: Повний перезапис масиву
fruits = ['grape', 'kiwi'];
console.log(fruits); // Виводить: ['grape', 'kiwi']

TODO: Останній елемент після перезапису
console.log(fruits[fruits.length - 1]); // Виводить: 'kiwi'
*/
/* //! Array-like Object (Псевдомасив)
TODO: Об’єкт, який виглядає як масив, має числові індекси та властивість length, але не є справжнім масивом.
 * - Псевдомасив — це об’єкт із ключами як числа (0, 1, 2...) і властивістю length.
 * - Не має методів масиву, як push чи slice, але схожий на масив за структурою.
 * - Часто зустрічається в аргументах функцій (arguments) чи результатах DOM-запитів (NodeList).
 * - Можна перетворити в справжній масив за допомогою Array.from або спред-оператора (...).

TODO: Приклад із arguments у функції
function showArgs() {
  console.log(arguments); // Виводить: { '0': 'hello', '1': 'world', length: 2 }
  console.log(arguments[0]); // Виводить: 'hello'
  console.log(arguments.length); // Виводить: 2
}
showArgs('hello', 'world');

TODO: Приклад із NodeList (з DOM)
let divs = document.querySelectorAll('div');
console.log(divs); // Виводить: NodeList (псевдомасив із елементами div)
console.log(divs[0]); // Виводить: перший div (якщо є)
console.log(divs.length); // Виводить: кількість div-ів

TODO: Перетворення псевдомасиву в масив
function convertArgs() {
  let realArray = Array.from(arguments);
  console.log(realArray); // Виводить: ['apple', 'banana']
}
convertArgs('apple', 'banana');
*/
/* //! arguments (Об’єкт аргументів функції)
TODO: Псевдомасив, який містить усі аргументи, передані у функцію.
 * - arguments — це спеціальний об’єкт, доступний усередині функції.
 * - Виглядає як масив: має числові індекси (0, 1, 2...) і властивість length.
 * - Не є справжнім масивом, тому методи типу push чи slice не працюють.
 * - Збирає усі аргументи, навіть якщо їх не вказали в параметрах функції.

TODO: Простий приклад
function showArgs() {
  console.log(arguments); // Виводить: { '0': 'apple', '1': 'banana', length: 2 }
  console.log(arguments[0]); // Виводить: 'apple'
  console.log(arguments.length); // Виводить: 2
}
showArgs('apple', 'banana');

TODO: Приклад із параметрами
function add(a, b) {
  console.log(arguments[0] + arguments[1]); // Виводить: 7
  console.log(arguments.length); // Виводить: 3 (усі передані аргументи)
}
add(2, 5, 10);

TODO: Перетворення в масив
function listArgs() {
  let realArray = Array.from(arguments);
  console.log(realArray); // Виводить: [1, 2, 3]
}
listArgs(1, 2, 3);
*/
/* //! join (Об’єднання елементів масиву в рядок)
TODO: Бере всі елементи масиву і з’єднує їх у один рядок.
 * - Не змінює масив, повертає новий рядок.
 * - За замовчуванням роздільник — кома, але можна вказати інший.
 * - Елементи додаються в порядку їхнього розміщення в масиві.

let fruits = ['apple', 'banana', 'orange'];
console.log(fruits.join()); // Виводить: 'apple,banana,orange'
console.log(fruits.join(' ')); // Виводить: 'apple banana orange'
console.log(fruits.join('-')); // Виводить: 'apple - banana - orange'
*/
/* //! split (Розбиття рядка для створення масиву)
TODO: Розбиває рядок на масив за роздільником (метод рядка, але результат — масив).
 * - Бере рядок і ділить його на частини, повертаючи масив.
 * - Роздільник — символ, за яким ріжеться рядок.
 * - Сам рядок не змінюється, повертається новий масив.

let text = 'apple,banana,orange';
console.log(text.split(',')); // Виводить: ['apple', 'banana', 'orange']

let sentence = 'I love coding';
console.log(sentence.split(' ')); // Виводить: ['I', 'love', 'coding']

let word = 'hello';
console.log(word.split('')); // Виводить: ['h', 'e', 'l', 'l', 'o']

let list = 'cat-dog-bird';
console.log(list.split('-')); // Виводить: ['cat', 'dog', 'bird']

let numbers = '1,2,3,4,5';
console.log(numbers.split(',', 3)); // Виводить: ['1', '2', '3']

console.log(text); // Виводить: 'apple,banana,orange'
*/
/* //! slice (Витягнення частини масиву)
TODO: Копіює частину масиву від одного індексу до іншого і повертає новий масив.
 * - Не змінює початковий масив, створює новий.
 * - Бере елементи від початкового індексу до кінцевого (не включно).
 * - Індекси починаються з 0.

let numbers = [1, 2, 3, 4, 5];
console.log(numbers.slice(1, 4)); // Виводить: [2, 3, 4]
console.log(numbers); // Виводить: [1, 2, 3, 4, 5]
*/
/* //! concat (Об’єднання масивів)
TODO: Об’єднує два або більше масивів у новий масив.
 * - Не змінює старі масиви, повертає новий.
 * - Додає елементи другого масиву в кінець першого.
 * - Можна додавати кілька масивів одразу, і вони об’єднуються по черзі (в порядку вказання).

let arr1 = ['a', 'b'];
let arr2 = ['c', 'd'];
console.log(arr1.concat(arr2)); // Виводить: ['a', 'b', 'c', 'd']

let arr3 = [1, 2];
let arr4 = [3, 4];
let arr5 = [5, 6];
console.log(arr3.concat(arr4, arr5)); // Виводить: [1, 2, 3, 4, 5, 6] (по черзі: arr3, потім arr4, потім arr5)
console.log(arr4.concat(arr3, arr5)); // Виводить: [3, 4, 1, 2, 5, 6] (по черзі: arr4, потім arr3, потім arr5)
*/
/* //! indexOf() (Пошук індексу в масиві)
TODO: Повертає індекс першого входження вказаного елемента в масиві, або -1, якщо елемент не знайдено.
 * - Шукає елемент у масиві і повертає його номер (індекс).
 * - Індекси в масиві починаються з 0.
 * - Приймає необов’язковий другий аргумент — позицію, з якої починати пошук.
 * - Використовує суворе порівняння (===), тобто враховує тип і значення.

console.log([1, 2, 3].indexOf(2)); // Виведе: 1
console.log(['cat', 'dog', 'bird'].indexOf('dog')); // Виведе: 1
console.log([1, 2, 3].indexOf(4)); // Виведе: -1
console.log([1, 2, 2, 3].indexOf(2, 2)); // Виведе: 2 (пошук із позиції 2)

const howIndex = ['B', 'o', 'h', 'd', 'a', 'n'];
console.log(howIndex.indexOf('h')); // Виведе: 2 (перше 'h')
console.log(howIndex.indexOf('a')); // Виведе: 4 (перше 'a')
console.log(howIndex.indexOf('x')); // Виведе: -1 (немає 'x')
console.log(howIndex.indexOf('n', howIndex.length - 1)); // Виведе: 5 (пошук із передостанньої позиції)
*/
/* //! unshift (Додавання елемента на початок масиву)
TODO: Додає один або кілька елементів на початок масиву і повертає нову довжину масиву.
 * - Змінює сам масив, вставляючи елементи на початок.
 * - Елементи додаються в порядку, як їх указали.
 * - Повертає число — нову довжину масиву після додавання.

let fruits = ['banana', 'orange'];
console.log(fruits.unshift('apple')); // Виводить: 3
console.log(fruits); // Виводить: ['apple', 'banana', 'orange']

let numbers = [2, 3];
console.log(numbers.unshift(1)); // Виводить: 3
console.log(numbers); // Виводить: [1, 2, 3]

let empty = [];
console.log(empty.unshift('start')); // Виводить: 1
console.log(empty); // Виводить: ['start']
*/
/* //! push (Додавання елемента в кінець масиву)
TODO: Додає один або кілька елементів у кінець масиву і повертає нову довжину масиву.
 * - Змінює сам масив, додаючи елементи в кінець.
 * - Елементи додаються в порядку, як їх указали.
 * - Повертає число — нову довжину масиву після додавання.

let animals = ['cat', 'dog'];
console.log(animals.push('bird')); // Виводить: 3
console.log(animals); // Виводить: ['cat', 'dog', 'bird']
*/
/* //! shift (Видалення першого елемента масиву)
TODO: Видаляє перший елемент із масиву і повертає його.
 * - Змінює сам масив, прибираючи елемент із початку.
 * - Повертає видалений елемент (можна зберегти в змінну).
 * - Якщо масив порожній, повертає undefined.

let fruits = ['apple', 'banana', 'orange'];
console.log(fruits.shift()); // Виводить: 'apple'
console.log(fruits); // Виводить: ['banana', 'orange']

let numbers = [1, 2, 3];
console.log(numbers.shift()); // Виводить: 1
console.log(numbers); // Виводить: [2, 3]

let empty = [];
console.log(empty.shift()); // Виводить: undefined
console.log(empty); // Виводить: []
*/
/* //! pop (Видалення останнього елемента масиву)
TODO: Видаляє останній елемент із масиву і повертає його.
 * - Змінює сам масив, прибираючи елемент із кінця.
 * - Повертає видалений елемент (можна зберегти в змінну).
 * - Якщо масив порожній, повертає undefined.

let fruits = ['apple', 'banana', 'orange'];
console.log(fruits.pop()); // Виводить: 'orange'
console.log(fruits); // Виводить: ['apple', 'banana']

let numbers = [1, 2, 3];
console.log(numbers.pop()); // Виводить: 3
console.log(numbers); // Виводить: [1, 2]

let empty = [];
console.log(empty.pop()); // Виводить: undefined
console.log(empty); // Виводить: []
*/
/* //! forEach (Перебирання елементів масиву)
TODO: Виконує задану функцію для кожного елемента масиву, нічого не повертаючи.
 * - array.forEach(callback) — метод масиву, який викликає функцію callback для кожного елемента.
 * - Не змінює оригінальний масив напряму, але функція всередині може його змінити.
 * - Не створює новий масив, повертає undefined.
 * - Корисно для виконання дій із кожним елементом, наприклад, виведення в консоль.

TODO: Синтаксис:
array.forEach((element, index, array) => {
  Виконуємо щось із елементом
});
 * - callback(element, index, array) — функція, яка викликається для кожного елемента:
 *   - element — поточний елемент масиву.
 *   - index — індекс поточного елемента (необов’язковий).
 *   - array — сам масив (необов’язковий).

TODO: Приклади:
let numbers = [1, 2, 3, 4];
numbers.forEach(num => console.log(num * 2)); // Виводить: 2, 4, 6, 8 (по черзі)
console.log(numbers); // Виводить: [1, 2, 3, 4] (оригінал не змінився)

let names = ['josh', 'anna'];
names.forEach(name => console.log(name.toUpperCase())); // Виводить: 'JOSH', 'ANNA' (по черзі)

let fruits = ['apple', 'banana', 'kiwi'];
fruits.forEach((fruit, index) => console.log(`${index}: ${fruit}`)); // Виводить: '0: apple', '1: banana', '2: kiwi'

console.log(numbers.forEach(num => num + 1)); // Виводить: undefined (нічого не повертає)
*/
/* //! map (Перетворення масиву)
TODO: Створює новий масив, застосовуючи функцію до кожного елемента старого масиву.
 * - array.map(callback) — метод масиву, який повертає новий масив із результатами функції callback.
 * - callback(element, index, array) — функція, яка викликається для кожного елемента:
 *   - element — поточний елемент масиву.
 *   - index — індекс поточного елемента (необов’язковий).
 *   - array — сам масив (необов’язковий).
 * - Не змінює оригінальний масив, а створює новий, такої самої довжини
 * - Корисно для перетворення даних, наприклад, подвоєння чисел чи зміни рядків.

TODO: Синтаксис:
array.map((element, index, array) => {
  Повертаємо нове значення для елемента
});

TODO: Приклади:
let numbers = [1, 2, 3, 4];
let doubled = numbers.map(num => num * 2);
console.log(doubled); // Виводить: [2, 4, 6, 8]
console.log(numbers); // Виводить: [1, 2, 3, 4] (оригінал не змінився)

let names = ['josh', 'anna'];
let upperNames = names.map(name => name.toUpperCase());
console.log(upperNames); // Виводить: ['JOSH', 'ANNA']

let fruits = ['apple', 'banana'];
let indexed = fruits.map((fruit, index) => `${index}: ${fruit}`);
console.log(indexed); // Виводить: ['0: apple', '1: banana']
*/
/* //! flatMap (Перетворення та розгортання масиву)
TODO: Створює новий масив, застосовуючи функцію до кожного елемента старого масиву і розгортаючи вкладені масиви на один рівень.
 * - array.flatMap(callback) — метод масиву, який повертає новий масив із результатами функції callback, розплющуючи вкладені масиви.
 * - callback(element, index, array) — функція, яка викликається для кожного елемента:
 *   - element — поточний елемент масиву.
 *   - index — індекс поточного елемента (необов’язковий).
 *   - array — сам масив (необов’язковий).
 * - Не змінює оригінальний масив, а створює новий.
 * - Корисно для перетворення даних із розгортанням, наприклад, подвоєння чисел у плоскому списку.
 * - Відмінність від map: map залишає вкладені масиви як є, flatMap розгортає їх на один рівень.

TODO: Синтаксис:
array.flatMap((element, index, array) => {
  Повертаємо значення (може бути масивом, який розгорнеться)
});

TODO: Приклади:
let numbers = [1, 2, 3, 4];
let doubled = numbers.flatMap(num => [num, num * 2]);
console.log(doubled); // Виводить: [1, 2, 2, 4, 3, 6, 4, 8]
console.log(numbers); // Виводить: [1, 2, 3, 4] (оригінал не змінився)

let names = ['josh', 'anna'];
let splitNames = names.flatMap(name => name.split(''));
console.log(splitNames); // Виводить: ['j', 'o', 's', 'h', 'a', 'n', 'n', 'a']

let fruits = ['apple', 'banana'];
let indexed = fruits.flatMap((fruit, index) => [`${index}: ${fruit}`]);
console.log(indexed); // Виводить: ['0: apple', '1: banana']
*/
/* //! filter (Фільтрація елементів масиву)
TODO: Створює новий масив із елементами, відібраними за певним критерієм із колекції.
 * - array.filter(callback) — метод масиву, який використовується для єдиної операції — фільтрації масиву, що відповідають умові колбек-функції.
 * - Не змінює оригінальний масив.
 * - Поелементно перебирає оригінальний масив.
 * - Повертає новий масив із елементами, які задовольняють умову.
 * - Якщо колбек повернув true, елемент додається в масив, що повертається.
 * - Якщо колбек повернув false, елемент не додається в масив, що повертається.
 * - Якщо жоден елемент не задовольнив умову, повертає порожній масив.

TODO: Синтаксис:
array.filter((element, index, array) => {
  Повертаємо true, якщо елемент залишається, або false, якщо його прибрати
});
 * - callback(element, index, array) — функція, яка викликається для кожного елемента:
 *   - element — поточний елемент масиву.
 *   - index — індекс поточного елемента (необов’язковий).
 *   - array — сам масив (необов’язковий).

TODO: Приклади:
let numbers = [1, 6, 3, 8, 4];
let bigNumbers = numbers.filter(num => num > 5);
console.log(bigNumbers); // Виводить: [6, 8] (елементи > 5)
console.log(numbers); // Виводить: [1, 6, 3, 8, 4] (оригінал не змінився)

let names = ['josh', 'anna', 'bob'];
let longNames = names.filter(name => name.length > 3);
console.log(longNames); // Виводить: ['josh', 'anna'] (імена довші за 3 символи)

let fruits = ['apple', 'banana', 'kiwi'];
let indexedFilter = fruits.filter((fruit, index) => index > 0);
console.log(indexedFilter); // Виводить: ['banana', 'kiwi'] (елементи з індексом > 0)

let smallNumbers = [1, 2, 3];
let noneFit = smallNumbers.filter(num => num > 5);
console.log(noneFit); // Виводить: [] (жоден елемент не підійшов)
*/
/* //! find (Пошук першого елемента в масиві)
TODO: Знаходить і повертає перший елемент масиву, який відповідає умові, заданій у функції.
 * - array.find(callback) — метод масиву, який використовується для єдиної операції — пошуку першого відповідного елемента, що відповідає умові колбек-функції.
 * - Не змінює оригінальний масив.
 * - Поелементно перебирає оригінальний масив.
 * - Повертає перший елемент, який задовольняє умову, або undefined, якщо такого немає.
 * - Якщо колбек повернув true, повертається поточний елемент і перебирання зупиняється.
 * - Якщо колбек повернув false для всіх елементів, повертається undefined.
 * - Різниця з filter: filter повертає масив усіх відповідних елементів, find — лише перший елемент.

TODO: Синтаксис:
array.find((element, index, array) => {
  Повертаємо true, якщо елемент підходить, або false, якщо ні
});
 * - callback(element, index, array) — функція, яка викликається для кожного елемента:
 *   - element — поточний елемент масиву.
 *   - index — індекс поточного елемента (необов’язковий).
 *   - array — сам масив (необов’язковий).

TODO: Приклади:
let numbers = [1, 6, 3, 8, 4];
let firstBig = numbers.find(num => num > 5);
console.log(firstBig); // Виводить: 6 (перший елемент > 5)
console.log(numbers); // Виводить: [1, 6, 3, 8, 4] (оригінал не змінився)

let names = ['josh', 'anna', 'bob'];
let longName = names.find(name => name.length > 3);
console.log(longName); // Виводить: 'josh' (перше ім’я довше 3 символів)

let fruits = ['apple', 'banana', 'kiwi'];
let foundFruit = fruits.find((fruit, index) => index > 0);
console.log(foundFruit); // Виводить: 'banana' (перший елемент із індексом > 0)

let smallNumbers = [1, 2, 3];
let notFound = smallNumbers.find(num => num > 5);
console.log(notFound); // Виводить: undefined (жоден елемент не підійшов)
*/
/* //! every (Перевірка всіх елементів масиву)
TODO: Перевіряє, чи всі елементи масиву відповідають умові, заданій у функції, і повертає true або false.
 * - array.every(callback) — метод масиву, який повертає true, якщо кожен елемент проходить перевірку callback.
 * - Не змінює оригінальний масив.
 * - Повертає true, якщо всі елементи задовольняють умову, і false, якщо хоча б один ні.
 * - Зупиняється, щойно знаходить перший елемент, який не підходить.
 * - Корисно для перевірки, наприклад, чи всі числа більше 0.

TODO: Синтаксис:
array.every((element, index, array) => {
  Повертаємо true, якщо елемент підходить, або false, якщо ні
});
 * - callback(element, index, array) — функція, яка викликається для кожного елемента:
 *   - element — поточний елемент масиву.
 *   - index — індекс поточного елемента (необов’язковий).
 *   - array — сам масив (необов’язковий).

TODO: Приклади:
let numbers = [2, 4, 6, 8];
let allEven = numbers.every(num => num % 2 === 0);
console.log(allEven); // Виводить: true (усі числа парні)
console.log(numbers); // Виводить: [2, 4, 6, 8] (оригінал не змінився)

let mixed = [2, 4, 5, 8];
let allEvenMixed = mixed.every(num => num % 2 === 0);
console.log(allEvenMixed); // Виводить: false (5 — непарне)

let names = ['josh', 'anna', 'bob'];
let allLong = names.every(name => name.length > 2);
console.log(allLong); // Виводить: true (усі імена довші за 2 символи)

let fruits = ['apple', 'banana', 'kiwi'];
let allShort = fruits.every(fruit => fruit.length < 4);
console.log(allShort); // Виводить: false (apple і banana довші за 4)
*/
/* //! some (Перевірка хоча б одного елемента масиву)
TODO: Перевіряє, чи хоча б один елемент масиву відповідає умові, заданій у функції, і повертає true або false.
 * - array.some(callback) — метод масиву, який повертає true, якщо хоча б один елемент проходить перевірку callback.
 * - callback(element, index, array) — функція, яка викликається для кожного елемента:
 *   - element — поточний елемент масиву.
 *   - index — індекс поточного елемента (необов’язковий).
 *   - array — сам масив (необов’язковий).
 * - Не змінює оригінальний масив.
 * - Повертає true, якщо хоча б один елемент задовольняє умову, і false, якщо жоден.
 * - Зупиняється, щойно знаходить перший елемент, який підходить.
 * - Корисно для перевірки, наприклад, чи є в масиві число більше 5.

TODO: Синтаксис:
array.some((element, index, array) => {
  Повертаємо true, якщо елемент підходить, або false, якщо ні
});

TODO: Приклади:
let numbers = [1, 3, 5, 8];
let hasBig = numbers.some(num => num > 5);
console.log(hasBig); // Виводить: true (8 > 5)
console.log(numbers); // Виводить: [1, 3, 5, 8] (оригінал не змінився)

let mixed = [1, 2, 3, 4];
let hasEven = mixed.some(num => num % 2 === 0);
console.log(hasEven); // Виводить: true (2 — парне)

let names = ['josh', 'anna', 'bob'];
let hasLong = names.some(name => name.length > 4);
console.log(hasLong); // Виводить: true ('josh' має 4 символи, але 'anna' ні, зупиняється на першому true)

let fruits = ['apple', 'banana', 'kiwi'];
let hasShort = fruits.some(fruit => fruit.length < 4);
console.log(hasShort); // Виводить: true ('kiwi' має 4, але зупиняється раніше, якщо є коротше)
*/
/* //! reduce (Агрегація значень у масиві)
TODO: Метод reduce() використовується для обчислення єдиного значення на основі всіх елементів масиву.
 * - array.reduce(callback, initialValue) — виконує передану функцію-колбек для кожного елемента масиву, накопичуючи результат.
 * - callback(accumulator, element, index, array) — функція, яка викликається для кожного елемента:
 *   - accumulator — проміжний результат, що зберігає значення між викликами.
 *   - element — поточний елемент масиву.
 *   - index — індекс поточного елемента (необов’язковий).
 *   - array — сам масив (необов’язковий).
 * - initialValue — початкове значення для accumulator (необов’язковий параметр).
 * - Не змінює оригінальний масив.
 * - Використовується для підсумовування, знаходження максимального значення, зведення масиву в об’єкт тощо.

TODO: Синтаксис:
array.reduce((accumulator, element, index, array) => {
  Оновлення accumulator на основі element
}, initialValue);

TODO: Приклади:
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // Виводить: 15 (1 + 2 + 3 + 4 + 5)

let max = numbers.reduce((acc, num) => (num > acc ? num : acc), numbers[0]);
console.log(max); // Виводить: 5 (максимальне число)

let words = ['Hello', 'World'];
let sentence = words.reduce((acc, word) => acc + ' ' + word);
console.log(sentence); // Виводить: "Hello World"

let products = [
  { name: 'Laptop', price: 1000 },
  { name: 'Mouse', price: 50 },
  { name: 'Keyboard', price: 150 }
];
let totalPrice = products.reduce((acc, product) => acc + product.price, 0);
console.log(totalPrice); // Виводить: 1200 (сума всіх цін)

let letters = ['a', 'b', 'c', 'a', 'b', 'a'];
let count = letters.reduce((acc, letter) => {
  acc[letter] = (acc[letter] || 0) + 1;
  return acc;
}, {});
console.log(count); // Виводить: { a: 3, b: 2, c: 1 }
*/
/* //! toSorted (Сортування масиву без зміни оригіналу)
TODO: Метод toSorted() створює новий відсортований масив, не змінюючи вихідний.
 * - array.toSorted(compareFunction) — повертає новий масив з елементами, відсортованими за переданою функцією порівняння.
 * - compareFunction(a, b) — функція порівняння, яка визначає порядок сортування:
 *   - Повертає від’ємне число, якщо a має бути перед b.
 *   - Повертає позитивне число, якщо a має бути після b.
 *   - Повертає 0, якщо порядок не змінюється.
 * - Якщо compareFunction не передано, елементи сортуються як рядки за Unicode.
 * - Оригінальний масив не змінюється (на відміну від sort()).
 * - Корисно, якщо потрібно зберегти вихідний масив недоторканим.

TODO: Синтаксис:
array.toSorted((a, b) => {
  Логіка сортування
});

TODO: Приклади:
let numbers = [5, 3, 8, 1, 2];
let sortedNumbers = numbers.toSorted((a, b) => a - b);
console.log(sortedNumbers); // Виводить: [1, 2, 3, 5, 8]
console.log(numbers); // Виводить: [5, 3, 8, 1, 2] (не змінився)

let words = ['banana', 'apple', 'Cherry'];
let sortedWords = words.toSorted();
console.log(sortedWords); // Виводить: ["Cherry", "apple", "banana"] (сортує як рядки за Unicode)

let users = [
  { name: 'Anna', age: 25 },
  { name: 'Bob', age: 22 },
  { name: 'Charlie', age: 30 }
];
let sortedUsers = users.toSorted((a, b) => a.age - b.age);
console.log(sortedUsers);
/* Виводить:
[
  { name: 'Bob', age: 22 },
  { name: 'Anna', age: 25 },
  { name: 'Charlie', age: 30 }
]
*/
//#endregion

// #region //? Массиви (Практика)
/*
this
*/
// #endregion
