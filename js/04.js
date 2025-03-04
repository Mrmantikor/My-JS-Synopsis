/* //! length
const str = 'Love is Java Skript';
console.log(str.length);
console.log(str[0]);
console.log(str.at(0));
console.log(str.at(-1));
console.log(str[str.length - 1]);

const num = 25.25;
console.log(String(num));

TODO – Дізнайтесь довжину рядка message.
const message = 'This string is 28 chars long';
const messageLength = message.length;
console.log(message);
console.log(messageLength);

*/
/* //! toLocaleLowerCase(), toLocaleUpperCase()
const strLowerCase = 'You NOT Love is Java Skript?!';
console.log(strLowerCase.toLowerCase());
console.log(strLowerCase.toLocaleLowerCase()); // Коррекиніше працює з нестандартними буквами
console.log(strLowerCase.toUpperCase());
console.log(strLowerCase.toLocaleUpperCase()); // Коррекиніше працює з нестандартними буквами*/
/* //! trim() 
const methodTrim = '  You NOT Love is Java Skript?!  '; // Прибирає пробілі спочатку і в кінці
console.log(methodTrim.trim());
//
const str = '    Вже полюбив JS? :)    ';
console.log(str.length);
console.log(str.trim().length);
//
const str1 = '  Як у тебе справи?  ';
console.log(str1.length);
console.log(str1.trim().length);
*/
/* //! repeat() 
const methodRepeat = 'You NOT Love is Java Skript?!';
console.log(methodRepeat.repeat(3));
*/
/* //! + - / * % **
TODO – Дано 90 хвилин, дізнайтеся скільки в цьому числі міститься годин і хвилин. Результат виведіть у консоль.
const totalMinutes = 90;
const hours = Math.floor(totalMinutes / 60);
const minutes = totalMinutes % 60;
console.log(hours);
console.log(minutes);
console.log(hours, ':', minutes); 
*/

/* //! Math.random()
TODO – від -10 до 10 рандомне число
const min = -10;
const max = 10;
const random = Math.trunc(Math.random() * (max - min) + min);
console.log(random);
TODO – 
const num = 24.3456;
console.log(num);
console.log(num * 100);
console.log(Math.trunc(num));
console.log(Math.trunc(num * 100));
console.log(Math.trunc(num * 100) / 100);
*/
/* //! charCodeAt() Юнікод
console.log('a', 'a'.charCodeAt(0));
console.log('b', 'b'.charCodeAt(0));
console.log('1'.charCodeAt(0));
 */
/* //! time() timeEnd()
console.time('for...of');
console.timeEnd('for...of');
*/
/* //! parseFloat(), 
const str = '52.86';
console.log(Number(str));
console.log(Number.parseFloat(str));
TODO – Дізнайтесь числове значення висоти елемента.
let elementHeight = '200.74px';
elementHeight = Number.parseFloat(elementHeight);
console.log('elementHeight:', elementHeight);
TODO – Попросіть користувача ввести два числа, складіть їх та виведіть результат у консоль.
const numA = Number.parseFloat(prompt('Введіть перше число!'));
const numB = Number.parseFloat(prompt('Введіть друге число!'));
console.log('numA:', numA);
console.log('numB:', numB);
const result = numA + numB;
console.log('result:', result);
*/
/* //! parseInt()
const str = '52.86';
console.log(Number(str));
console.log(Number.parseInt(str));
TODO – Дізнайтесь числове значення ширини елемента.
let elementWidth = '50px';
elementWidth = Number.parseInt(elementWidth);
console.log('elementWidth:', elementWidth);
*/

//#region //! Alert, Prompt, Confirm
/* //! Alert
alert('Hello World!');
*/
/* //! Prompt
prompt(`yes or no`); 
TODO –
const firstName = prompt('Як вас звати?');
console.log(firstName);
TODO – Попросіть користувача ввести число. Виведіть результат у консоль. Приведіть рядок до числа.
const userInput = Number(prompt('Введіть якесь число!'));
console.log(userInput);
*/
/* //! Confirm
confirm(`yes and text`); 

const isAdult = confirm('Чи є вам 18?');
console.log(isAdult);
*/
//#endregion

/* //! Concat()
TODO: Краще використовувати + замість Concat()
const num = +prompt('Enter a number');
console.log(`Введіть ${num} і вийде ${num + 10}`);
 */
// #region //?_Function_Теоргія?//
/* //! Function Declaration() 
TODO: (Можна викликати ДО оголошення функції в коді). Перевага в тому, що окремо в коді можна створити "Регіон" з аргументами і окремо "Регіон" з функціями
greetUser('Oleksii', 'Repin');
greetUser1('Phoebe', 'Howell');
greetUser2('Garrett', 'Cooper');

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
/* //! Function Expression ()
TODO: Викликати тільки ПІСЛЯ оголошення в коді. Все те саме, що і в Function Declaration(), тільки навпаки, інтерпретатор спочатку прочитає функцію і потім виведе її результат.
const greetUser = function (firstName, lastName) {
  console.log(`Welcome ${firstName} ${lastName}`);
};
const greetUser1 = function (firstName, lastName) {
  console.log(`Welcome ${firstName} ${lastName}`);
};
const greetUser2 = function (firstName, lastName) {
  console.log(`Welcome ${firstName} ${lastName}`);
};

greetUser('Oleksii', 'Repin');
greetUser1('Phoebe', 'Howell');
greetUser2('Garrett', 'Cooper');
*/
/* //! Стек викликів, Порядок виконання
TODO: http://latentflip.com/loupe/
const fn1 = function () {
  console.log('fn1 execution');

  console.log('Before fn2 execution');
  fn2();
  console.log('After fn2 execution');
};

const fn2 = function () {
  console.log('fn2 execution');

  console.log('Before fn3 execution');
  fn3();
  console.log('After fn3 execution');
};

const fn3 = function () {
  console.log('fn3 execution');
};

console.log('Before fn1 execution');
fn1();
console.log('After fn1 execution');


/* //!
*/
/* //!
 */
// #endregion
// #region //?_Function_Практика?//
/* //!
 */
// #endregion
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
/* //! join()
const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];
const result = courses.join('-');
console.log('courses:', courses);
console.log('result:', result);
*/
/* //! split()
const phoneNumbers = '+380961111111,+380961111111,+380961111111,+380961111111';

const phoneNumbersArr = phoneNumbers.split(',');

console.log('phoneNumbers:', phoneNumbers);
console.log('phoneNumbersArr:', phoneNumbersArr);
*/
/* //! slice()
const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];
const coursesCopy = courses.slice(1, 3);

console.log('courses:', courses);
console.log('coursesCopy:', coursesCopy);

coursesCopy[0] = 'SASS';

console.log('courses:', courses);
console.log('coursesCopy:', coursesCopy);
*/
/* //! concat()
const oldCourses = ['HTML', 'CSS'];
const newCourses = ['JavaScript', 'React', 'PostgreSQL'];
const allCourses = oldCourses.concat(newCourses);

console.log('oldCourses:', oldCourses);
console.log('newCourses:', newCourses);
console.log('allCourses:', allCourses);
*/
/* //! indexOf()
const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

console.log('courses:', courses);
console.log(courses.indexOf('NodeJS'));
*/
/* //! push()/pop() та unshift()/shift()

const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

console.log('courses:', courses);

courses.unshift('NodeJS', 'PHP');

console.log('courses:', courses);

courses.shift();

console.log('courses:', courses);
*/
// #endregion
// #region //?_Массиви_Практика?//
/* //! Основні положення
TODO: Оголошення масиву
const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];
console.log('courses: ', courses);
console.log(courses[0]);
TODO: Перезапис масиву
const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];
courses[4] = 'Node.js';
console.log(courses);
TODO: Довжина масиву
const coursesLength = courses.length;
console.log(coursesLength);
TODO: Перший 'Статичний'
const firstElementOfCourse = courses[0];
console.log(firstElementOfCourse);
TODO: Останній 'Статичний'
const lastElementOfCourse = courses[4];
console.log(lastElementOfCourse);
TODO: Останній 'Динамічний'
const lastElementOfCourse = courses[courses.length - 1];
console.log(lastElementOfCourse);
TODO: Додавати 'Статично'
courses[courses.length] = 'SASS';
console.log(courses);
TODO: Додавати 'Динамічно'
courses[20] = 'SASS';
console.log(courses);
*/
/* //! Task #1
TODO: Створіть масив arr1 = [1, 2, 3]. Створіть та привласніть масиву arr2 -> масив arr1. Виведіть до консолі обидва цих масива. Додайте елемент в масив arr1 і ще раз виведете обидва масиви в консоль
const arr1 = [1, 2, 3];
const arr2 = arr1;

console.log('arr1:', arr1);
console.log('arr2:', arr2);

arr1[arr1.length] = 20;

console.log('arr1:', arr1);
console.log('arr2:', arr2);

console.log(arr1 === arr2);
*/
/* //! Task #2 for()
TODO: Напиши скрипт для перебору масиву fruits. Для кожного елемента масиву виведи в консоль рядок у форматі номер_елемента: значення_елемента. Нумерація елементів повинна починатися з 1.

TODO – Var 1
const fruits = ['🍎', '🍇', '🍑', '🍌', '🍎', '🍋'];
console.log('fruits:', fruits);
let fruitNumber = 1;
for (const fruit of fruits) {
  console.log(`${fruitNumber}: ${fruit}`);
  fruitNumber++;
}
TODO – Var 2
const fruits = ['🍎', '🍇', '🍑', '🍌', '🍎', '🍋'];
console.log('fruits:', fruits);
for (let i = 0; i < fruits.length; i++) {
  console.log(`${i + 1}: ${fruits[i]}`);
}
*/
/* //! Task #3 for(of)
TODO – Var 1
const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
console.log('friends:', friends);
for (let i = 0; i < friends.length; i++) {
  console.log(friends[i]);
}
TODO – Var 2
const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
for (const item of friends) {
  console.log(item);
}
*/
/* //! Task #4 split ()
TODO: Напиши скрипт для обчислення площі прямокутника зі сторонами, значення яких зберігаються у змінній values у вигляді рядка. Значення гарантовано розділені пробілом.
const values = '8 11';
const sidesArr = values.split(' ');
console.log('values:', values);
console.log('sidesArr:', sidesArr);
const rectangleArea = Number(sidesArr[0]) * Number(sidesArr[1]);
console.log('rectangleArea:', rectangleArea);
*/
/* //! Task #5 for(of)
TODO: Напиши скрипт, який підраховує суму всіх парних чисел у масиві.
const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
let total = 0;
for (const num of numbers) {
  if (num % 2 === 0) {
    total += num;
  }
}
console.log('numbers:', numbers);
console.log('total:', total);
 */
/* //! Task #6 for()
TODO: Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача. У змінних names та phones зберігаються рядки імен та телефонних номерів, розділені комами. Порядковий номер імен та телефонів у рядках вказують на відповідність. Кількість імен та телефонів гарантовано однакова.
const names = 'Jacob,William,Solomon,Artemis';
const phones = '89001234567,89001112233,890055566377,890055566300';
console.log('names:', names);
console.log('phones:', phones);
const namesArr = names.split(',');
const phonesArr = phones.split(',');
console.log('namesArr:', namesArr);
console.log('phonesArr:', phonesArr);
for (let i = 0; i < namesArr.length; i++) {
  console.log(`${namesArr[i]} - ${phonesArr[i]}`);
}
*/
/* //! Task #7 split() join() indexOf() for()
TODO: Напиши скрипт, який виводить у консоль усі слова рядка крім першого і останнього. Результуючий рядок не повинен починатися або закінчуватися символ пробілу. Скрипт повинен працювати для будь-якого рядка.
TODO – Var 1
const string = 'Welcome to the future';
const wordsArr = string.split(' ');
let resultStr = '';
console.log('string:', string);
console.log('wordsArr:', wordsArr);
for (let i = 1; i < wordsArr.length - 1; i++) {
  resultStr += ` ${wordsArr[i]}`;
}
resultStr = resultStr.trim();
console.log('resultStr:', resultStr);
TODO – Var 2
const string = 'Welcome to the future';
let wordsArr = string.split(' ');
wordsArr = wordsArr.slice(1, wordsArr.length - 1);
const resultStr = wordsArr.join(' ');
console.log('string:', string);
console.log('wordsArr:', wordsArr);
console.log('resultStr:', resultStr);
TODO – Var 3
const string = 'Welcome to the future';
const firstSpace = string.indexOf(' ');
const lastSpace = string.lastIndexOf(' ');
console.log('string:', string);
console.log('firstSpace:', firstSpace);
console.log('lastSpace:', lastSpace);
const resultStr = string.slice(firstSpace + 1, lastSpace);
console.log('resultStr:', resultStr);
*/
/* //! Task #8 for()
TODO: Напиши скрипт, який «розгортає» рядок (зворотній порядок літер) та виводить її в консоль.
TODO – Var 1
const string = 'Welcome to the future';
const lettersArr = string.split('');
let reversedStr = '';
console.log('string:', string);
console.log('lettersArr:', lettersArr);
for (let i = lettersArr.length - 1; i >= 0; i--) {
  reversedStr += lettersArr[i];
}
console.log('reversedStr:', reversedStr);

TODO – Var 2
const string = 'Welcome to the future';
let reversedStr = '';
for (let i = string.length - 1; i >= 0; i--) {
  reversedStr += string[i];
}
console.log('string:', string);
console.log('reversedStr:', reversedStr);
*/
/* //! Task #9 for()
TODO: Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.
const values = [17, -10, 94, -30, 1, 23, -20];
let max = values[0];
for (let i = 1; i < values.length; i++) {
  if (values[i] > max) {
    max = values[i];
  }
}
console.log('values:', values);
console.log('max:', max);
*/
/* //! Task #10 for()
TODO: У нас є декілько масивів із зарплатами працівників із різних відділів, потрібно порахувати загальну суму зарплат
const managerSalaries = [100, 150, 250, 400, 500];
const developersSalaries = [800, 1500, 4000];
let total = 0;
for (const salary of managerSalaries) {
  total += salary;
}
console.log('total:', total);
for (const salary of developersSalaries) {
  total += salary;
}
console.log('total:', total);
*/
/* //! Task #11 push()
TODO: Створіть масив styles з елементами «Джаз» та «Блюз». Додайте "Рок-н-рол" в кінець. Замініть значення "Блюз" на "Класика". Видалить перший елемент масиву і виведіть його в консоль. Вставте «Реп» і «Реггі» на початок масиву.
const styles = ['Джас', 'Блюз'];
styles.push('Рок-н-рол');
const index = styles.indexOf('Блюз');
styles[index] = 'Класика';
const deleteElement = styles.shift();
styles.unshift('«Реп»', 'Реггі');
console.log(styles);

 */
/* //! Task #12 push() function()
TODO: Створити функцію multiples(m, n), яка повертає масив перших m кратних дійсного числа n. Вважати, що m - натуральне число.
TODO: Наприклад. multiples(3, 5) повинна повернути [5, 10, 15]
TODO – Var 1
function multiples(m, n) {
  const arr = [];
  let startNum = n;
  for (let i = 0; i < m; i += 1) {
    arr.push(startNum);
    startNum += n;
  }
  return arr;
}
console.log(multiples(4, 4));
TODO – Var 2
function multiples(m, n) {
  const arr = [];
  for (let i = 1; i <= m; i += 1) {
    arr.push(n * i);
  }
  return arr;
}
console.log(multiples(4, 4));
 */
/* //! Task #13 for(of) split()
TODO: Перетворити рядок, що містить слова, розділені комами, в масив слів і вивести кожне слово в окремому рядку за допомогою циклу for і for..of.
TODO – Var 1
const str = 'HTML, JavaScript, CSS, React';
const array = str.split(',');
console.log(array);
let longestWord = array[0];
for (let index = 1; index < array.length; index++) {
  const word = array[index];
  if (longestWord.length < array[index].length) {
    longestWord = array[index];
  }
}
console.log(longestWord);
TODO – Var 2
const str = 'HTML, JavaScript, CSS, React';
const array = str.split(',');
console.log(array);
for (let index = 0; index < array.length; index++) {
  const word = array[index];
  console.log(word);
}
TODO – Var 3
const str = 'HTML, JavaScript, CSS, React';
const array = str.split(',');
console.log(array);
for (const element of array) {
  console.log(element);
}
 */
/* //! Task #14 split() join() 
TODO: Порахуй кількість слів у рядку, використовуючи методи масивів і створи новий рядок, роділений дефісами у нижньому регістрі. 
const message = 'JavaScript is a popular programming language.';
const newMessage = message.split(' ').join('-').toLowerCase();
console.log(newMessage);
const arrayLength = message.split(' ').length;
console.log(arrayLength);
 */
/* //! Task #15 for() if() else{}
TODO: Напишіть скрипт, який замінює регістр кожного символу в стороні на протилежний. Наприклад 'JavaScript' повинен повернути 'jAVAsCRIPT'
TODO – Var 1
const str = 'JavaScript';
let updateString = '';
for (let i = 0; i < str.length; i++) {
  if (str[i] === str[i].toUpperCase()) {
    updateString += str[i].toLowerCase();
  } else {
    updateString += str[i].toUpperCase();
  }
}
console.log(updateString);
TODO – Var 2
const str = 'JavaScript';
let updateString = '';
const array = str.split('');
const updateArray = [];
for (let i = 0; i < array.length; i++) {
  if (array[i] === array[i].toUpperCase()) {
    updateArray.push(array[i].toLowerCase());
  } else {
    updateArray.push(array[i].toUpperCase());
  }
}
console.log(updateArray.join(''));
 */
/* //! Task #16 indexOf()
TODO: Знайти всі елементи масиву, що містять задану підстроку, та об'єднати їх у новий масив, після чого вивести у консоль лог повідомлення "Масив елементів, що містять підстроку substring: ..." Результат повинен бути розділений комами та пробілами.(використати indexOf)
const wordsArray = ['JavaScript', 'HTML', 'CSS', 'React'];
const substring = 'S';
const array = [];
for (const str of wordsArray) {
  if (str.includes(substring)) {
    array.push(str);
  }
}
console.log(array);
 */
/* //! Task #16 for() function()
TODO: Напишіть функцію, яка розіб'є рядок на масив по 2 букви, якщо в останньої букви немає пари, то повинна записатися 1 буква. Дана рядок 'abc' - поверне ['ab', 'c']. Якщо в останньої літери немає пари, поверне _ рядок 'abc' - поверне ['ab', 'c_']
function getLetters(str) {
  const array = [];
  for (let i = 0; i < str.length; i += 2) {
    console.log('first letter', str[i]);
    console.log('second letter', str[i + 1] || '_');
    array.push(str[1] + (str[i + 1] || '_'));
  }
  return array;
}
console.log(getLetters('abc'));
 */
/* //! Task #17 for() if() else{}
TODO: Створи 2 масиви чисел. Обьеднай їх за допомогою методу масиву. Створи нові масив і за допомогою циклу for або for..of,  в перший масив збери усі парні числи, а в другій усі не парні і виведи їх в консоль.
const firstArray = [1, 2, 3, 5, 4];
const secondArray = [10, 21, 33, 55, 44];
const newArray = firstArray.concat(secondArray);
const evenNumbers = [];
const oddNumbers = [];
for (const element of newArray) {
  if (element % 2 === 0) {
    evenNumbers.push(element);
  } else {
    oddNumbers.push(element);
  }
}
console.log(evenNumbers);
console.log(oddNumbers);
 */
/* //! Task #18 for() if() function()
TODO: Напиши функцію findSmallerNumber(numbers) яка шукає найменше число в масиві. Додай перевірку що функція отримує масив console.log(Array.isArray(0));
TODO – Var 1 (Шукає саму найменьшу строку)
const findSmallerNumber = function(numbers){
    if(!Array.isArray(numbers)){
       return 'number is not Array'; 
    }
    let smallNumber = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        if(smallNumber > numbers[i]){
            smallNumber = numbers[i];
        }
    }
    return smallNumber;
}
console.log(findSmallerNumber(0));
console.log(findSmallerNumber([5,'-13',-7,-11,'a']));
TODO – Var 2 (Шукає саме найменьше число)
const findSmallerNumber = function(numbers){
    if(!Array.isArray(numbers)){
        return 'number is not Array';
    }
    let smallNumber = numbers[0];
    for(let number of numbers){
        if(typeof number !== 'number'){
            continue;
        }
        if(smallNumber > number){
            smallNumber = number;
        }
    }
    return smallNumber;
}
console.log(findSmallerNumber(0));
console.log(findSmallerNumber([5,'-13',-7,-11,'a']));
 */
/* //! Task #19 function()
TODO: Напишіть функцію min(a, b), яка повертає менше з чисел a, b Потрібно додати перевірку, що функція отримує числа
const compareNumbers = function (a, b) {
  return typeof a === "number" && typeof b === "number"
    ? Math.min(a, b)
    : "One of parameters is not a number";
};
console.log(compareNumbers());
 */
/* //! Task #20 Палінром
TODO: Потрібно перевітири чи є речення палінром
const str = 'Я несу гусеня';
янесугусеня
const str = 'Де помити мопед';
const str = 'І була пані на палубІ';
const str = 'Поліна неси Ром!'
const isPalindrom = function (str) {
  const updateSring = str.toLowerCase().replaceAll(" ", "");
  const array = [];
  for (let i = 0; i < updateSring.length; i++) {
    array.push(updateSring[updateSring.length - 1 - i]);
  }
  let reversedString = array.join("");
  return updateSring === reversedString;
};
console.log(isPalindrom(str));
 */
/* //! Task #21 function() for() if()
TODO: напиши функцію яка перевірить чи однакові масиви елементи з першого масива це елементи другого масива в квадраті
TODO – Var 1 
const numbers = [11, 9, 3, 121, 33, 24, 20];
const numbers2 = [121, 81, 9, 14641, 1089, 576, 576];

function check(numbers, numbers2) {
  const powNumbers = [];
  if (numbers.length !== numbers2.length) {
    return false;
  }
  for (let i = 0; i < numbers.length; i++) {
    powNumbers.push(numbers[i] * numbers[i]);
  }
  for (let i = 0; i < numbers.length; i++) {
    if (powNumbers[i] !== numbers2[i]) {
      return false;
    }
  }
  return true;
  console.log(powNumbers);
}
console.log(check(numbers, numbers2));
TODO – Var 2
const numbers = [11, 9, 3, 121, 33, 24, 20];
const numbers2 = [121, 81, 9, 14641, 1089, 576, 576];
function check(numbers, numbers2) {
  if (numbers.length !== numbers2.length) {
    return false;
  }
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] !== Math.sqrt(numbers2[i])) {
      return false;
    }
  }
  return true;
    console.log(powNumbers);
}
console.log(check(numbers, numbers2));
 */
/* //! Task #22 function() for()
TODO: напиши функцію яка сумуватиме сусідні числа і пушити в новий масив
TODO – Var 1
const someArr = [22, 11, 34, 5, 12];
function sumNeighbors(array) {
  const sum = [];
  for (let i = 0; i < array.length - 1; i++) {
    console.log("first", array[i]);
    console.log("second", array[i + 1]);
    console.log("---");
    sum.push(array[i] + array[i + 1]);
  }
  return sum;
}
console.log(sumNeighbors(someArr));
TODO – Var 2
const someArr = [22, 11, 34, 5, 12];
function sumNeighbors(array) {
  const sum = [];
  for (let i = 0; i < array.length; i += 2) {
    console.log("first", array[i]);
    console.log("second", array[i + 1] || 0);
    console.log("---");
    sum.push(array[i] + (array[i + 1] || 0));
  }
  return sum;
}
console.log(sumNeighbors(someArr));
 */
/* //! Task #23 length() ? :
TODO: У коді вже є змінна arr, яка містить масив. Необхідно вивести передостаннє значення масиву змінної arr, якщо воно є. Якщо такого значення в масиві немає, потрібно вивести null. Примітка: Змінна arr вже створена, вам створювати її не потрібно.
const arr = [35, 9, -25, 0];
console.log(arr.length >= 2 ? arr[arr.length - 2] : null);
 */
/* //! Task #24 for() of() reduce()
TODO: Напишіть функцію, яка приймає масив чисел та повертає суму чисел. Числа можуть бути негативними чи нецілими. Якщо масив не містить чисел, слід повернути 0.
TODO – Var 1
function sum(numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}
console.log(sum([1, 5.2, 4, 0, -1]));
console.log(sum([0]));
console.log(sum([-2.398]));
TODO – Var 2
function sum(numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum([1, 5.2, 4, 0, -1]));
console.log(sum([0]));
console.log(sum([-2.398]));
*/
/* //! Task #25 function() for() of() Псевдомасив
TODO: Напиши функцію add для складання довільної кількості аргументів (чисел)
const add = function () {
  console.log('arguments:', arguments);

  let total = 0;

  for (const arg of arguments) {
    total += arg;
  }

  return total;
};

console.log(add(1, 2, 3));
console.log(add(1, 2, 4, 5, 6));
*/
/* //! Task #26 function() for() of() Псевдомасив
TODO: Створіть функцію calculateAverage(), яка приймає довільну кількість числових аргументів та розраховує середнє арефметичне.
const calculateAverage = function () {
  console.log('arguments:', arguments);

  let total = 0;

  for (const arg of arguments) {
    total += arg;
  }

  return total / arguments.length;
};

console.log(calculateAverage(1, 2, 3, 4)); // 2.5
console.log(calculateAverage(14, 8, 2)); // 8
console.log(calculateAverage(27, 43, 2, 8, 36)); // 23.2
*/
/* //! Task #27 function() split()
TODO: Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами, значення яких буде передано до параметра dimensions у вигляді рядка. Значення гарантовано розділені пробілом.

const getRectArea = function (dimensions) {
  const sidesArr = dimensions.split(' ');

  return Number(sidesArr[0]) * Number(sidesArr[1]);
};

console.log(getRectArea('8 11')); // 88
console.log(getRectArea('18 11')); // 198
console.log(getRectArea('8 21')); // 168
 */
/* //! Task #28 function() for()
TODO: Напиши функцію logItems(items), яка отримує масив та використовує цикл, який для кожного елемента масиву буде виводити в консоль повідомлення у форматі <номер елемента> - <значення елемента>. Нумерація елементів повинна починатися з 1. Наприклад для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено 1 - Mango, а для індексу 2 виведе 3 - Ajax.
const logItems = function (items) {
  console.log('items:', items);

  for (let i = 0; i < items.length; i++) {
    console.log(`${i + 1} - ${items[i]}`);
  }
};

logItems(['Mango', 'Poly', 'Ajax']);
logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);
 */
/* //! Task #29 function() for() split()
TODO: Напиши функцію printInfo(names, phones) яка виводить у консоль ім'я та телефонний номер користувача. У параметри names та phones будуть передані рядки імен та телефонних номерів, розділені комами. Порядковий номер імен та телефонів у рядках вказують на відповідність. Кількість імен та телефонів гарантовано однакова.
const printInfo = function (names, phones) {
  names = names.split(',');
  phones = phones.split(',');

  for (let i = 0; i < names.length; i++) {
    console.log(`${names[i]} - ${phones[i]}`);
  }
};

printInfo('Jacob,William,Solomon,Artemis', '89001234567,89001112233,890055566377,890055566300');
printInfo('Marion,Eugenia,Dean,Jesus', '8577702524,9125002644,2028646420,9364154932');
 */
/* //! Task #30
 */
/* //! Task #31
 */
/* //! Task #32
 */
/* //! Task #33
 */
// #endregion
// #region //?_Об'єкти_Теоргія?//
/* //! dot notation  
human.mood = "happy";

 const human = {
     name: "Mango",
     hobby: "reading",
     age: 20,
     greet(){
         console.log(`Hello ${human.name}`);
     }
};
human.greet()
*/
/* //! brackets notation
human["mood"] = "happy";

 const human = {
     name: "Mango",
     hobby: "reading",
     age: 20,
     greet(){
         console.log(`Hello ${human.name}`);
     }
};
human.greet()
*/
/* //! compound brackets notation
const userMood = "mood";
human[userMood] = "happy";

 const human = {
     name: "Mango",
     hobby: "reading",
     age: 20,
     greet(){
         console.log(`Hello ${human.name}`);
     }
};
human.greet()
 console.log(human);
*/
/* //! for...in
TODO: Порахуйте загальну кількість відгуків.
const feedbacks = {
  good: 5,
  neutral: 10,
  bad: 3,
};

console.log('feedbacks:', feedbacks);

let totalFeedbacks = 0;

for (const key in feedbacks) {
  totalFeedbacks += feedbacks[key];
}

console.log('totalFeedbacks:', totalFeedbacks);
*/
/* //! Object.keys()
TODO: Порахуйте загальну кількість відгуків.
const feedbacks = {
  good: 5,
  neutral: 10,
  bad: 3,
};

const feedbacksKeys = Object.keys(feedbacks);

let totalFeedbacks = 0;

for (const key of feedbacksKeys) {
  totalFeedbacks += feedbacks[key];
}

console.log('totalFeedbacks:', totalFeedbacks);
*/
/* //! Object.values()
TODO: Порахуйте загальну кількість відгуків.
const feedbacks = {
  good: 5,
  neutral: 10,
  bad: 3,
};

const feedbacksValues = Object.values(feedbacks);

let totalFeedbacks = 0;

for (const value of feedbacksValues) {
  totalFeedbacks += value;
}

console.log(totalFeedbacks);
*/
// #endregion
// #region //?_Об'єкти_Практика?//
/* //! Task #1
TODO: Пошук друга по імені
const friends = [
  { name: 'John', online: true },
  { name: 'Alice', online: false },
  { name: 'Bob', online: true },
  { name: 'Charlie', online: false },
]

console.table(friends)


const findFriendByName = function (allFriends, friendName) {
  for (const friend of allFriends) {
    if (friend.name.toLowerCase() === friendName.toLowerCase()) {
      return friend;
    }
  }
  return `none`
}

console.log(findFriendByName(friends, 'John'));
*/
/* //! Task #2
TODO: Отримуємо імена всіх друзів
const friends = [
  { name: 'John', online: true },
  { name: 'Alice', online: false },
  { name: 'Bob', online: true },
  { name: 'Charlie', online: false },
]
const getAllNames = function (allFriends) {
  const allNames = []
  for (const friend of allFriends) {
    allNames.push(friend.name)
  }
  return allNames
}
console.log(getAllNames(friends));
*/
/* //! Task #3
TODO: Отримати імена друзів які онлайн

const friends = [
  { name: 'John', online: true },
  { name: 'Alice', online: false },
  { name: 'Bob', online: true },
  { name: 'Charlie', online: false },
]
const getOnlimeFriends = function (allFriends) {
  const friendsNames = [];

  for (const friend of allFriends) {
    if (friend.online) {
      friendsNames.push(friend.name)
    }
  }
  return friendsNames;
}
console.log(getOnlimeFriends(friends));
*/
/* //! Task #4
TODO: У нас є об'єкт, у якому зберігатимуться зарплати нашої команди. Напишіть код для сумування всіх зарплат і збережіть його результат у змінній sum. Якщо об'єкт salaries порожній, то результат має бути 0
TODO – Var 1 Object.entries()
const salaries = {
    Mango: 100,
    Poly: 160,
    Ajax: 222 ,
};
let sum = 0;
const array = Object.entries(salaries);
for (const arrayElement of array) {
    sum+=arrayElement[1];
}
console.log(sum);
TODO – Var 2 Object.keys()
const salaries = {
    Mango: 100,
    Poly: 160,
    Ajax: 222,
};

const keys = Object.keys(salaries);
let sum = 0;
for (let i = 0; i < keys.length; i++) {
    sum += salaries[keys[i]];
}

console.log(sum);
*/
/* //! Task #5
TODO: Напишіть функцію, яка приймає як параметр об'єкт та формує об'єкти у новому масиві у форматі [key, value]
const user = {
  name: 'John',
  surName: 'Stones',
  age: 20,
  hobby: 'tenis',
  haveCar: true,
  merried: false,
};
const getArray = function (obj) {
  const newArray = [];
  const keys = Object.keys(obj);

  for (const key of keys) {
    newArray.push({ [key]: obj[key] });
  }
  return newArray;
};

console.log(getArray(user));
/*/
/* //! Task #6
TODO: Напишіть функцію calcTotalPrice(stones, stoneName), яка приймає масив обʼєктів та рядок з назвою каменю. Функція рахує і повертає загальну вартість каміння з таким імʼям, ціною та кількістю з обʼєкта
const stones = [
  { name: 'Аконіт', price: 100, quantity: 10 },
  { name: 'Смарагд', price: 1300, quantity: 4 },
  { name: 'Діамант', price: 2700, quantity: 3 },
  { name: 'Сапфір', price: 400, quantity: 7 },
  { name: 'Щебінь', price: 200, quantity: 2 },
]

const calcTotalPrice = function (allStones, stoneName) {
  stoneName = stoneName.toLowerCase();
  for (const stone of allStones) {
    if (stone.name.toLowerCase() === stoneName) {
      return stone.price * stone.quantity;
    }
  }
}
console. log(calcTotalPrice(stones, 'Діамант'));
console. log(calcTotalPrice(stones, 'СмаРагд'));
console. log(calcTotalPrice(stones, 'аконіт'));
*/
/* //! Task #7
TODO: Створіть обєкт з властивостями "довжина" та "ширина", напишіть метод "CalculateArea", який буде обчислювати площу прямокутника на основі його довжини та ширини
const rectangle = {
  width: 27,
  height: 23,
  calculateArea() {
    return this.width * this.height;
  }
}
console.log(rectangle.calculateArea());
*/
/* //! Task #8
TODO: Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance". Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок, та метод "withdraw", який дозволяє знімати гроші з рахунку. Методи повинні спрацьовувати при натисканні на кнопки “поповнити рахунок” та отримати ‘готівку’ відповідно.Після проведення операції виводити повідомлення про залишок на рахунку.
const bankAccount = {
  ownerName: 'John Doe',
  accountNumber: '21',
  balance: 23098,
  deposit(sum) {
    this.balance += sum;
  },
  withdraw(sum) {
    this.balance -= sum;
  },
};

bankAccount.deposit(234);
console.log(bankAccount);

bankAccount.withdraw(234);
console.log(bankAccount);
*/
/* //! Task #9 Object.keys()
TODO: Потрібно написати функцію, яка приймає 2 параметри obj і key, яка буде перебирати об'єкт. Якщо об'єкт має такий ключ - поверне true
TODO – Var 1
const obj = {
    name: 'Igor',
    car: 'Mercedes',
    carColor: 'black',
  };

 const checkObj = function (obj, key){
     const keys = Object.keys(obj);
     for (const item of keys){
         if (item === key){
             return true;
         }
     }
     return false;
}
 
console.log(checkObj(obj, "car"));
TODO – Var 2
const obj = {
    name: 'Igor',
    car: 'Mercedes',
    carColor: 'black',
  };

 const checkObj = function (obj, key){
     return Object.keys(obj).includes(key);
 }
console.log(checkObj(obj, "car"));
*/

/* //! масив.forEach(el, idx, arr)
TODO: масив.forEach(function(element, index, array) => {ТУТ код});
 * - Поелементно перебирає оригінальний масив
 * - Не змінює оригінальний масив (але може змінювати його елементи, якщо вони є об'єктами)
 * - Не повертає новий масив, а просто виконує передану функцію для кожного елемента масиву
 * - На відміну від map(), метод forEach() не створює і не повертає новий масив, а лише виконує функцію для кожного елемента.
TODO: Створіть новий масив, в якому усі елементи масиву numbers будуть помножені на 2.
const numbers = [1, 2, 3, 4, 5];
const doubleNumbers = [];
numbers.forEach(el => doubleNumbers.push(el * 2));

console.log('numbers:', numbers);
console.log('doubleNumbers:', doubleNumbers);
*/
/* //! масив.map(el, idx, arr)
TODO: масив.map((element, index, array) => {ТУТ код});
 * - Поелементо перебирає оригінальний масив
 * - Не змінює оригінальний масив
 * - Повертає новий масив такої ж довжини
TODO: Створіть новий масив, в якому усі елементи масиву numbers будуть помножені на 2.
const numbers = [1, 2, 3, 4, 5];
const doubleNumbers = numbers.map(el => el * 2);

console.log('numbers:', numbers);
console.log('doubleNumbers:', doubleNumbers);

TODO: Нехай функція getModels повертає масив моделей (поле model) всіх автомобілів.
const allCars = [
  { make: 'Honda', model: 'Accord', amount: 2, price: 22455 },
  { make: 'Mazda', model: 'Mazda 6', amount: 8, price: 24195 },
  { make: 'Mazda', model: 'CX-9', amount: 7, price: 31520 },
  { make: 'Toyota', model: '4Runner', amount: 19, price: 34210 },
  { make: 'Toyota', model: 'Sequoia', amount: 16, price: 45560 },
  { make: 'Toyota', model: 'Tacoma', amount: 4, price: 24320 },
  { make: 'Ford', model: 'F-150', amount: 11, price: 27110 },
  { make: 'Ford', model: 'Fusion', amount: 13, price: 22120 },
  { make: 'Ford', model: 'Explorer', amount: 6, price: 31660 },
  { make: 'Honda', model: 'CR-V', amount: 14, price: 24045 },
];

  .//!  Повна версія
const getModels = cars => {
  const allModels = cars.map((el, idx, arr) => {
    return el.model;
  });
  return allModels;
};

console.log(getModels(allCars));

  .//!  Скорочена версія
const getModels = cars => cars.map(car => car.model);

console.log(getModels(allCars));
*/
/* //! const newObj = structuredClone(originalObj);
TODO: const новийОб'єкт = structuredClone(оригінальнийОб'єкт);
 * - Глибоко копіює об'єкт або масив, створюючи незалежну копію
 * - Не змінює оригінальний об'єкт або масив
 * - Повертає новий об'єкт або масив, який є точною копією вихідного
TODO: 
const original = { name: "John", details: { age: 30 } };
const copy = structuredClone(original);
copy.details.age = 35;

console.log(original.details.age); // 30 (оригінал не змінився)
console.log(copy.details.age); // 35 (зміни тільки в копії)
*/

//#endregion

/* //! localeCompare()
TODO: Правильне порівняння строк
console.log('Hallo'.localeCompare('Hello'));
*/
/* //! Question 1
TODO Потрібно перевітири чи є речення палінром
const str = 'Я несу гусеня'; //! янесугусеня
const str = 'Де помити мопед';
const str = 'І була пані на палубІ';
const str = 'Поліна неси Ром!';
TODO – Var 1
function isPalindrom(string) {
  const newStr = string.replaceAll(' ', '').toLowerCase();
  let reversedString = '';
  for (let i = 0; i < newStr.length; i++) {
    reversedString += newStr[newStr.length - 1 - i];
  }
  console.log(newStr);
  console.log(reversedString);
  return newStr === reversedString;
}
console.log(isPalindrom(str));
TODO – var 2
function isPalindrom(string) {
  const newStr = string.replaceAll(' ', '').toLowerCase();
  let reversedString = '';
  for (let i = newStr.length - 1; i >= 0; i--) {
    reversedString += newStr[i];
  }
  console.log(newStr);
  console.log(reversedString);
  return newStr === reversedString;
}
console.log(isPalindrom(str));
TODO – var 3
function isPalindrom(string) {
  const newStr = string.replaceAll(' ', '').toLowerCase();
  for (let i = 0; i < Math.floor(newStr.length / 2); i++) {
    if (newStr[i] !== newStr[newStr.length - 1 - i]) {
      return false;
    }
    // console.log(i);
    // console.log(newStr.length - 1 - i);
    // console.log('-------');
  }
  return true;
}
console.log(isPalindrom(str));
*/
/* //! Question 2
TODO Виведіть методом console.log() зірочки від 1 до 7 штук у вигляді трикутника таким чином:
*
**
***
****
*****
TODO – Var 1
let str = '*';
while (str.length < 8) {
  console.log(str);
  str += '*';
}
TODO – Var 2
let str = '*';
do {
  console.log(str);
  str += '*';
} while (str.length < 8);
TODO – Var 3
let str = '*';
for (let i = 0; i < 7; i++) {
  console.log(str);
  str += '*';
}
*/
/* //! Question 3
TODO Порахуйте суму чисел від 12 до 27 = 312
TODO – Var 1 (Не правильно, запитати)
const num1 = 12;
const num2 = 27;
let sum = 0;
for (let i = num1; i < num2; i++) {
  if (i % 2 !== 0) {
    sum += i;
  }
}
TODO – Var 2 (Не правильно, запитати)
for (let i = num1; i < num2; i++) {
  if (i % 2 === 0) {
    continue;
  }
  sum += i;
}
console.log(sum);
*/
/* //! Question 4
TODO Тіммі та Сара думають, що вони закохані, але в тому місці, де вони живуть, вони дізнаються лише тоді, коли зірвуть по одній квітці. Якщо одна з квіток має парну кількість пелюсток, а інша - непарну, то це означає, що вони закохані. Напишіть функцію, яка отримує кількість пелюсток кожної квітки і повертає true, якщо вони закохані, і false, якщо ні.
TODO – Var 1
function checkLove(flower1, flower2) {
  return flower1 % 2 !== flower2 % 2;
}
console.log(checkLove(2, 3));
TODO – Var 2
function checkLove(flower1, flower2) {
  if (
    (flower1 % 2 === 0 && flower2 % 2 !== 0) ||
    (flower1 % 2 !== 0 && flower2 % 2 === 0)
  ) {
    return true;
  }
  return false;
}
console.log(checkLove(3, 3));
*/
/* //! Question 5
TODO Запитай користувача у модальному вікні, який з напоїв він бажає придбати - "Кава", "Чай" чи "Сік",та залежно від виду напою оголоси суму досплати. Використовувати switch.
let drink = prompt('Що бажаєте?')?.toLowerCase();
let price = 0;
switch (drink) {
  case 'кава':
    price = 1;
    break;
  case 'чай':
    price = 2;
    break;
  case 'сік':
    price = 3;
    break;
  default:
    'Що це?';
}
console.log(price);
*/
/* //! Question 6 
TODO Є рядок 'HTML, CSS, JS, PHP, React, Vue, Node.js, C, C++'. Дізнайтеся, чи є в цьому рядку мова: 'JavaScript', або 'JS'? Якщо є, дізнайтесь позицію на якій перебуває цей підрядок.
const languages = 'HTML, CSS, JS, PHP, React, Vue, Node.js, C, C++';
function fineSubString(string, subString) {
  if (string.includes(subString)) {
    return string.indexOf(subString);
  }
  return 'Not found';
}
console.log(fineSubString(languages, 'JS'));
*/
/* //! Question 7
TODO У нас є рядок '24px', дізнайтеся на що закінчується цей рядок, на: %, rem, em або px;
const str = '24px';
const result = str.startsWith('2');
console.log(result);
 */
/* //! Question 8
TODO У нас є рядок: 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?'. Замініть усі входження dog на monkey.
const str = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
console.log(str.replace('The', 'On'));
console.log(str.replaceAll('dog', 'monkey'));
 */
/* //! Question 9 Логічні оператори
console.log(true && 3);
console.log(false && 3);
console.log(true && 4 && "kiwi");
console.log((true && 0) || "kiwi");
console.log(true || 3);
console.log(true || 3 || 4);
console.log(true || false || 7);
console.log(null || 2 || undefined);
console.log((1 && null && 2) >= 0);
console.log(null || (2 && 3) || 4);
 */
/* //! Question 10 Перетворення типів
console.log(2 + 5 + '' + 1 + 0);
console.log('' + 1 - 0);
console.log(true + false);
console.log(6 / Number.parseInt('3px'));
console.log('2' * '3');
console.log(4 + 5 + 'px');
console.log('$' + 4 + 5);
console.log('4' - 2);
console.log('4px' - 2);
console.log(7 / 0);
console.log('  -9  ' + 5);
console.log(null + 1);
console.log(undefined + 1);
console.log('' + 1);
console.log(3 > 2 > 1);
console.log(3 > 2 && 2 > 1);
 */
/* //! Question 10 Передостання цифра
TODO У вас є змінна num, вам необхідно отримати передостанню цифру з цього числа і вивести цифру в консоль.
TODO Умова: 1) Змінна num вже створена для вас у коді. 2) Якщо число немає передостанньої цифри, потрібно вивести 0. 3) Використовувати тількі методи * / - + % , Math.floor, Math.round, Math.trunc, Math.ceil
let num = 528;
let num = 18;
let num = 6;
TODO – Var 1
console.log(Math.trunc((num % 100) / 10));

 */
/* //! Question 11
TODO: Задана змінна num, яка містить кілька. Вам необхідно вивести в консоль true, якщо це число знаходиться поза діапазоном: від 10 до 20 включно, інакше потрібно вивести false.
TODO: Примітка!!! 1) Число вважається поза діапазоном, якщо воно строго менше 10 або строго більше 20. 2) Створювати змінну num не потрібно, вона вже створена за вас.
let num = 25; // true
let num = 10; // false
TODO – Var 1
console.log(num < 10 || num > 20);
TODO – Var 2
console.log(!(num >= 10 && num <= 20));
*/
/* //! Question 10
 */
/* //! Question 10
 */
/* //! Question Function
TODO – Напишіть функцію isAdult(age), яка буде перевіряти вік користувач. Якщо користувачу більше 18 років, то функція повертає true інакше false.
function isAdult(userAge) {
  return userAge >= 18;
}
console.log(isAdult(29)); // true
console.log(isAdult(18)); // true
console.log(isAdult(7)); // false

TODO – Напишіть функцію isNumberEven(num), яка перевіряє число на парність. Якщо число парне, то функція повертає true інакше false.
function isNumberEven(num) {
  return num % 2 === 0;
}
console.log(isNumberEven(10)); // true
console.log(isNumberEven(15)); // false
console.log(isNumberEven(100)); // true
TODO – Напишіть функцію getRectArea(sideA, sideB) для обчислення площі прямокутника. Сторони прямокутника будуть переденні до параметрів sideA та sideB.
function getRectArea(sideA, sideB) {
  return sideA * sideB;
}
console.log(getRectArea(8, 11)); // 88
console.log(getRectArea(18, 11)); // 198
console.log(getRectArea(8, 21)); // 168
TODO: Напишіть функцію toCelsius(fahrenheit), яка буде переводити градуси Фаренгейта в градуси Цельсія.Заокругліть значення до однієї цифри після коми.
function toCelsius(fahrenheit) {
  const celsius = (fahrenheit - 32) * (5 / 9);

  return Number(celsius.toFixed(1));
}
console.log(toCelsius(10)); // -12.2
console.log(toCelsius(0)); // -17.8
console.log(toCelsius(-10)); // -23.3
TODO: Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс маси тіла людини. Для цього необхідно розділити вагу на квадрат висоти. Вага та висота будуть спеціально передані як рядки. Не цілі числа можуть бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової частини може бути кома. Індекс маси тіла необхідно округлити до однієї цифри після коми.
function calcBMI(weight, height) {
  weight = Number(weight.replace(',', '.'));
  height = Number(height.replace(',', '.'));
  const bodyIndex = weight / height ** 2;
  return bodyIndex.toFixed(1);
}
const bmi = calcBMI('88,3', '1.75');
console.log(bmi); // 28.8
const num = 10;
console.log(num.toFixed(2));
*/
/* //! 

let num = 5;
const prefix = ++num;
console.log('num: ', num);
console.log('prefix: ', prefix);

let num = 5;
const postfix = num++;
console.log('num: ', num);
console.log('postfix: ', postfix);
*/

/*
TODO – Var 1
const languagesStr = 'HTML, CSS, JS, JS, PHP, React, Vue, Node.js, C, C++';

let uniqueLetters = '';

for (let i = 0; i < languagesStr.length; i += 1) {
  if (uniqueLetters.includes(languagesStr[i])) {
    continue;
  }
  uniqueLetters += languagesStr[i];
}
console.log(uniqueLetters);
TODO – Var 2
const languagesStr = 'HTML, CSS, JS, JS, PHP, React, Vue, Node.js, C, C++';

let uniqueLetters = '';
for (let i = 0; i < languagesStr.length; i += 1) {
  if (!uniqueLetters.includes(languagesStr[i])) {
    uniqueLetters += languagesStr[i];
  }
}

console.log(uniqueLetters);

TODO – Var 3
const languagesStr = 'HTML, CSS, JS, JS, PHP, React, Vue, Node.js, C, C++';

let uniqueLetters = '';

for (let i = 0; i < languagesStr.length; i += 1) {
  if (i === languagesStr.indexOf(languagesStr[i])) {
    uniqueLetters += languagesStr[i];
  }
}

console.log(uniqueLetters);
*/
/*
TODO: Напишіть програму яка буде виводити в консоль високосні роки в проміжку від  1700 до 2025. Рік, номер якого кратний 400, - високосний; Інші роки, номер яких кратний 100, - невисокосні (наприклад, роки 1700, 1800, 1900, 2100, 2200, 2300);Інші роки, номер яких кратний 4, - високосні, всі інші роки - невисокосні.
TODO – Var
for (let i = 1700; i <= 2025; i++) {
  if (i % 400 === 0) {
    console.log('високосний', i);
  }

  if (i % 100 !== 0 && i % 4 === 0) {
    console.log('високосний', i);
  }
}
*/
/*
TODO: Напишіть код, який запитуватиме Логін за допомогою prompt і логувати результат в консоль браузера, Якщо відвідувач вводить "Адмін", то prompt запитує пароль. Якщо нічого не ввели або натиснута клавіша Esc - вивести стороку "Скасовано"; Інакше виявити рядок - "Я вас не знаю". Пароль перевіряти так: Якщо введено пароль "Я головний",то вивести рядок - "Здрастуйте!". Якщо нічого не ввели або натиснута клавіша Esc, вивести стороку - "Скасовано", інакше виводити рядок "Невірний пароль!

const userLogin = prompt('Enter login!');
let strAdmin = 'Адмін';
if (userLogin === strAdmin) {
  const userPassword = prompt('Enter your password');
  if (userPassword === 'Я головний') {
    console.log('Здрастуйте!');
  } else if (userLogin === null || userLogin === '') {
    console.log('Скасовано');
  } else {
    console.log('Невірний пароль!');
  }
} else if (userLogin === null || userLogin === '') {
  console.log('Скасовано');
} else {
  console.log('Я вас не знаю');
}
*/
/*
function generateSquare(number) {
  let str = '';
  for (let i = 0; i < number; i++) {
    str += '+'.repeat(number) + '\n';
    if (i !== number - 1) str += '\n';
  }
  console.log(str);
}
generateSquare(3);

function generateSquare(number) {
  let str = '';
  const repeatString = '+'.repeat(number);
  for (let i = 0; i < number; i++) {
    str += repeatString;
    if (i !== number - 1) str += '\n';
  }
  console.log(str);
}
generateSquare(3);
*/
