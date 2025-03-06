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

//#endregion

// #region //?_Массиви_Теоргія?//
/* //! Псевдомасив, Масив, Перебір масиву
TODO: Псевдомасив
const foo = function () {
  console.log('arguments:', arguments);
}
foo('Hello', 'World', 'World', 'World', 'World', 'World');
TODO: Створення масиву args
const foo = function () {
  const args = Array.from(arguments); 
  console.log('args:', args);
};
foo('Hello', 'World', 'World1', 'World2', 'World3', 'World4');
TODO: Перебирає кожен аргумент МАСИВУ і виводить в консоль
const foo = function () {
  const args = Array.from(arguments); 
  console.log('args:', args);

  for (const arg of arguments) {
  console.log(arg);
  }
};
foo('Hello', 'World', 'World1', 'World2', 'World3', 'World4');
*/

// #endregion
