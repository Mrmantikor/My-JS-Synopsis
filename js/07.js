//#region //? Масиви (Array)
/* //! Масив (Array) - Основи
TODO: Масив — це спеціальна змінна, яка дозволяє зберігати кілька значень у впорядкованому списку.
 * - Містить елементи (числа, рядки тощо), доступні за їхніми індексами, що починаються з 0.
 * - Довжина масиву (length) показує кількість елементів; останній індекс = length - 1.
 * - Можна змінювати окремі елементи через індекс або повністю перезаписати масив новим набором значень.
 * - Корисно для зберігання списків даних, наприклад, імен, чисел чи продуктів.

TODO: Синтаксис:
let array = [елемент1, елемент2, елемент3]; // Створення масиву
array[індекс] = нове_значення; // Зміна елемента
array = [новий_елемент1, новий_елемент2]; // Повний перезапис

TODO: Приклад 1. Створення масиву та доступ до елементів
let colors = ['red', 'blue', 'green'];
console.log(colors[0]); // Виводить: 'red' (перший елемент)
console.log(colors[colors.length - 1]); // Виводить: 'green' (останній елемент)

TODO: Приклад 2. Зміна одного елемента
let animals = ['cat', 'dog', 'bird'];
animals[1] = 'fish';
console.log(animals); // Виводить: ['cat', 'fish', 'bird']

TODO: Приклад 3. Повний перезапис масиву
let numbers = [1, 2, 3];
numbers = [4, 5];
console.log(numbers); // Виводить: [4, 5]
*/
/* //! Array-like Object (Псевдомасив)
TODO: Об’єкт, який схожий на масив завдяки числовим індексам і властивості length, але не має методів масиву.
 * - Має індекси (0, 1, 2...) і властивість length, як у масиву, але це об’єкт.
 * - Не підтримує методи масиву (push, map тощо), тому потрібне перетворення в масив.
 * - Зустрічається в arguments функцій чи DOM-колекціях (NodeList).
 * - Можна перетворити в справжній масив за допомогою Array.from або спред-оператора (...).

TODO: Синтаксис:
  Доступ до псевдомасиву
псевдомасив[індекс];
  Перетворення в масив
let realArray = Array.from(псевдомасив);

TODO: Приклад 1. Псевдомасив arguments у функції
function listItems() {
  console.log(arguments[0]); // Виводить: 'book'
  console.log(arguments.length); // Виводить: 3
}
listItems('book', 'pen', 'notebook');

TODO: Приклад 2. Перетворення arguments у масив
function makeArray() {
  let realArray = Array.from(arguments);
  console.log(realArray); // Виводить: ['milk', 'bread']
}
makeArray('milk', 'bread');

TODO: Приклад 3. Робота з NodeList (з DOM)
let buttons = document.querySelectorAll('button');
console.log(buttons[0]); // Виводить: перший button (якщо є)
console.log(buttons.length); // Виводить: кількість кнопок
*/
/* //! arguments (Об’єкт аргументів функції як псевдомасив)
TODO: Псевдомасив, який виглядає як масив, але є об’єктом, що містить аргументи функції.
 * - Має числові індекси (0, 1, 2...) і властивість length, як у масивів.
 * - Не є справжнім масивом, тому методи типу push, map чи slice недоступні без перетворення.
 * - З’являється автоматично всередині функцій (крім стрілочних) і зберігає передані аргументи.
 * - Корисно знати для роботи з масивоподібними структурами та їх перетворення в масиви.
 * - Перетворюється в масив через Array.from() або спред-оператор (...arguments).

TODO: Синтаксис:
arguments[індекс]; // Доступ до елемента
let realArray = Array.from(arguments); // Перетворення в масив

TODO: Приклад 1. Доступ до елементів як у масиві
function checkArgs() {
  console.log(arguments[0]); // Виводить: 'apple'
  console.log(arguments.length); // Виводить: 2
}
checkArgs('apple', 'banana');

TODO: Приклад 2. Перетворення в масив для методів
function doubleArgs() {
  let argsArray = Array.from(arguments);
  console.log(argsArray.map(x => x * 2)); // Виводить: [2, 4, 6]
}
doubleArgs(1, 2, 3);

TODO: Приклад 3. Порівняння зі справжнім масивом
function compare() {
  let realArray = ['cat', 'dog'];
  console.log(realArray[1]); // Виводить: 'dog' (як у arguments)
  console.log(arguments[1]); // Виводить: 'bird' (теж працює)
}
compare('cat', 'bird');
*/
/* //! join (Об’єднання елементів масиву в рядок)
TODO: Метод масиву, який з’єднує всі його елементи в один рядок із указаним роздільником.
 * - Повертає новий рядок, не змінюючи оригінальний масив.
 * - Якщо роздільник не вказаний, за замовчуванням використовується кома (,).
 * - Роздільник може бути будь-яким рядком (пробіл, тире тощо).
 * - Корисно для створення рядків із даних масиву, наприклад, списків чи речень.

TODO: Синтаксис:
array.join(роздільник);

TODO: Приклад 1. Об’єднання з комою
let colors = ['red', 'blue', 'green'];
console.log(colors.join()); // Виводить: 'red,blue,green'

TODO: Приклад 2. Об’єднання з пробілом
let words = ['I', 'love', 'coding'];
console.log(words.join(' ')); // Виводить: 'I love coding'

TODO: Приклад 3. Об’єднання з тире
let items = ['book', 'pen', 'paper'];
console.log(items.join('-')); // Виводить: 'book-pen-paper'
*/
/* //! split (Розбиття рядка для створення масиву)
TODO: Метод рядка, який розбиває його на масив за вказаним роздільником.
 * - Повертає новий масив, не змінюючи оригінальний рядок.
 * - Роздільник — символ чи рядок, за яким ділиться текст (наприклад, кома, пробіл).
 * - Якщо роздільник — порожній рядок (''), розбиває на окремі символи.
 * - Корисно для перетворення тексту в список елементів.

TODO: Синтаксис:
string.split(роздільник);

TODO: Приклад 1. Розбиття за комою
let list = 'cat,dog,bird';
console.log(list.split(',')); // Виводить: ['cat', 'dog', 'bird']

TODO: Приклад 2. Розбиття за пробілом
let sentence = 'Hello my friend';
console.log(sentence.split(' ')); // Виводить: ['Hello', 'my', 'friend']

TODO: Приклад 3. Розбиття на символи
let word = 'dog';
console.log(word.split('')); // Виводить: ['d', 'o', 'g']
*/
/* //! slice (Витягнення частини масиву)
TODO: Метод масиву, який повертає новий масив із вибраними елементами за вказаними індексами.
 * - Приймає два аргументи: start (з якого індексу почати) і end (до якого, не включно).
 * - Якщо end не вказано, копіює до кінця масиву.
 * - Від’ємні індекси рахуються з кінця (-1 — останній елемент).
 * - Не змінює оригінальний масив, лише повертає копію частини.
 * - Корисно для виділення потрібних шматків масиву.

TODO: Синтаксис:
array.slice(start, end);

TODO: Приклад 1. Від початку до кінця
let numbers = [10, 20, 30, 40, 50];
console.log(numbers.slice(0)); // Виводить: [10, 20, 30, 40, 50]

TODO: Приклад 2. Від середини до кінця
let numbers = [10, 20, 30, 40, 50];
console.log(numbers.slice(2)); // Виводить: [30, 40, 50]

TODO: Приклад 3. Від середини до передостаннього
let numbers = [10, 20, 30, 40, 50];
console.log(numbers.slice(2, -1)); // Виводить: [30, 40]
*/
/* //! concat (Об’єднання масивів)
TODO: Метод масиву, який об’єднує два або більше масивів у новий масив.
 * - Не змінює оригінальні масиви, повертає новий.
 * - Елементи додаються в порядку переданих масивів.
 * - Можна комбінувати кілька масивів одразу.
 * - Корисно для з’єднання списків даних.

TODO: Синтаксис:
array1.concat(array2, array3, ...);

TODO: Приклад 1. Об’єднання двох масивів
let arr1 = ['cat', 'dog'];
let arr2 = ['bird'];
console.log(arr1.concat(arr2)); // Виводить: ['cat', 'dog', 'bird']

TODO: Приклад 2. Об’єднання трьох масивів
let nums1 = [1, 2];
let nums2 = [3, 4];
let nums3 = [5];
console.log(nums1.concat(nums2, nums3)); // Виводить: [1, 2, 3, 4, 5]

TODO: Приклад 3. Об’єднання з порожнім масивом
let letters = ['a', 'b'];
let empty = [];
console.log(letters.concat(empty)); // Виводить: ['a', 'b']
*/
/* //! indexOf (Пошук індексу в масиві)
TODO: Метод масиву, який повертає індекс першого входження елемента або -1, якщо його немає.
 * - Пошук іде за суворим порівнянням (===), враховуючи тип і значення.
 * - Другий аргумент (необов’язковий) — індекс, із якого почати пошук.
 * - Індекси починаються з 0.
 * - Корисно для перевірки наявності елемента в масиві.

TODO: Синтаксис:
array.indexOf(елемент, [початковий_індекс]);

TODO: Приклад 1. Пошук простого елемента
let numbers = [10, 20, 30, 20];
console.log(numbers.indexOf(20)); // Виводить: 1 (перше входження)

TODO: Приклад 2. Пошук із початковим індексом
let letters = ['a', 'b', 'a', 'c'];
console.log(letters.indexOf('a', 1)); // Виводить: 2 (перше 'a' після індексу 1)

TODO: Приклад 3. Елемент відсутній
let fruits = ['apple', 'banana'];
console.log(fruits.indexOf('kiwi')); // Виводить: -1 (немає)
*/
/* //! unshift (Додавання елемента на початок масиву)
TODO: Метод масиву, який додає один або кілька елементів на початок і повертає нову довжину.
 * - Змінює оригінальний масив, зсуваючи існуючі елементи вправо.
 * - Елементи додаються в порядку їх передачі.
 * - Повертає число — нову довжину масиву.
 * - Корисно для додавання елементів на початок списку.

TODO: Синтаксис:
array.unshift(елемент1, елемент2, ...);

TODO: Приклад 1. Додавання одного елемента
let numbers = [2, 3];
console.log(numbers.unshift(1)); // Виводить: 3
console.log(numbers); // Виводить: [1, 2, 3]

TODO: Приклад 2. Додавання кількох елементів
let fruits = ['banana'];
console.log(fruits.unshift('apple', 'kiwi')); // Виводить: 3
console.log(fruits); // Виводить: ['apple', 'kiwi', 'banana']

TODO: Приклад 3. Додавання до порожнього масиву
let empty = [];
console.log(empty.unshift('start')); // Виводить: 1
console.log(empty); // Виводить: ['start']
*/
/* //! push (Додавання елемента в кінець масиву)
TODO: Метод масиву, який додає один або кілька елементів у кінець і повертає нову довжину.
 * - Змінює оригінальний масив, додаючи елементи в кінець.
 * - Елементи додаються в порядку їх передачі.
 * - Повертає число — нову довжину масиву.
 * - Корисно для додавання елементів у список.

TODO: Синтаксис:
array.push(елемент1, елемент2, ...);

TODO: Приклад 1. Додавання одного елемента
let colors = ['red', 'blue'];
console.log(colors.push('green')); // Виводить: 3
console.log(colors); // Виводить: ['red', 'blue', 'green']

TODO: Приклад 2. Додавання кількох елементів
let numbers = [1, 2];
console.log(numbers.push(3, 4)); // Виводить: 4
console.log(numbers); // Виводить: [1, 2, 3, 4]

TODO: Приклад 3. Додавання до порожнього масиву
let empty = [];
console.log(empty.push('end')); // Виводить: 1
console.log(empty); // Виводить: ['end']
*/
/* //! shift (Видалення першого елемента масиву)
TODO: Метод масиву, який видаляє перший елемент і повертає його.
 * - Змінює оригінальний масив, зсуваючи всі елементи вліво.
 * - Повертає видалений елемент, який можна зберегти.
 * - Якщо масив порожній, повертає undefined.
 * - Корисно для роботи з масивом як із чергою.

TODO: Синтаксис:
array.shift();

TODO: Приклад 1. Видалення першого елемента
let fruits = ['apple', 'banana', 'kiwi'];
console.log(fruits.shift()); // Виводить: 'apple'
console.log(fruits); // Виводить: ['banana', 'kiwi']

TODO: Приклад 2. Видалення з масиву з одним елементом
let numbers = [5];
console.log(numbers.shift()); // Виводить: 5
console.log(numbers); // Виводить: []

TODO: Приклад 3. Видалення з порожнього масиву
let empty = [];
console.log(empty.shift()); // Виводить: undefined
console.log(empty); // Виводить: []
*/
/* //! pop (Видалення останнього елемента масиву)
TODO: Метод масиву, який видаляє останній елемент і повертає його.
 * - Змінює оригінальний масив, зменшуючи його довжину.
 * - Повертає видалений елемент, який можна зберегти.
 * - Якщо масив порожній, повертає undefined.
 * - Корисно для роботи з масивом як із стеком.

TODO: Синтаксис:
array.pop();

TODO: Приклад 1. Видалення останнього елемента
let colors = ['red', 'blue', 'green'];
console.log(colors.pop()); // Виводить: 'green'
console.log(colors); // Виводить: ['red', 'blue']

TODO: Приклад 2. Видалення з масиву з одним елементом
let numbers = [10];
console.log(numbers.pop()); // Виводить: 10
console.log(numbers); // Виводить: []

TODO: Приклад 3. Видалення з порожнього масиву
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
