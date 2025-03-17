// #region // Масиви (Практика)
/* //! Task #1
TODO: Створити два масиви, де другий є копією першого, додати елемент до першого масиву та перевірити зміни в обох.
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
TODO: Перебрати масив friends і вивести кожен елемент у консоль.
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

/* //! Task #4 split()
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
TODO: Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача. У змінних names та phones зберігаються рядки імен та телефонних номерів, розділені комами.
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
TODO: Напиши скрипт, який виводить у консоль усі слова рядка крім першого і останнього. Результуючий рядок не повинен починатися або закінчуватися пробілом.
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
TODO: Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати для будь-якого масиву чисел.
const values = [17, -10, 94, -30, 1, 23, -20];
let min = values[0];
for (let i = 1; i < values.length; i++) {
  if (values[i] < min) {
    min = values[i];
  }
}
console.log('values:', values);
console.log('min:', min);
*/

/* //! Task #10 for()
TODO: Порахувати загальну суму зарплат із кількох масивів працівників різних відділів.
const managerSalaries = [100, 150, 250, 400, 500];
const developersSalaries = [800, 1500, 4000];
let total = 0;
for (const salary of managerSalaries) {
  total += salary;
}
for (const salary of developersSalaries) {
  total += salary;
}
console.log('total:', total);
*/

/* //! Task #11 push()
TODO: Створити масив styles, додати та змінити елементи, видалити перший і вставити нові на початок.
const styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-рол');
const index = styles.indexOf('Блюз');
styles[index] = 'Класика';
const deleteElement = styles.shift();
styles.unshift('Реп', 'Реггі');
console.log(styles);
*/

/* //! Task #12 push() function()
TODO: Створити функцію multiples(m, n), яка повертає масив перших m кратних числа n.
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
TODO: Перетворити рядок слів, розділених комами, в масив і вивести кожне слово в окремому рядку.
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
TODO: Порахувати кількість слів у рядку і створити новий рядок, розділений дефісами у нижньому регістрі.
const message = 'JavaScript is a popular programming language.';
const newMessage = message.split(' ').join('-').toLowerCase();
console.log(newMessage);
const arrayLength = message.split(' ').length;
console.log(arrayLength);
*/

/* //! Task #15 for() if() else{}
TODO: Замінити регістр кожного символу в рядку на протилежний (наприклад, 'JavaScript' → 'jAVAsCRIPT').
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
TODO: Знайти всі елементи масиву, що містять задану підстроку, та об'єднати їх у новий масив.
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

/* //! Task #17 for() if() else{}
TODO: Об’єднати два масиви чисел і розподілити парні та непарні числа в окремі масиви.
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
TODO: Написати функцію findSmallerNumber(numbers), яка шукає найменше число в масиві з перевіркою на масив.
TODO – Var 1 (Шукає найменшу строку)
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
TODO – Var 2 (Шукає найменше число)
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
TODO: Написати функцію min(a, b), яка повертає менше з чисел a, b із перевіркою на числа.
const compareNumbers = function (a, b) {
  return typeof a === "number" && typeof b === "number"
    ? Math.min(a, b)
    : "One of parameters is not a number";
};
console.log(compareNumbers(5, 3));
*/

/* //! Task #20 Паліндром
TODO: Перевірити, чи є речення паліндромом.
const str = 'Я несу гусеня';
const isPalindrom = function (str) {
  const updateString = str.toLowerCase().replaceAll(" ", "");
  const array = [];
  for (let i = 0; i < updateString.length; i++) {
    array.push(updateString[updateString.length - 1 - i]);
  }
  let reversedString = array.join("");
  return updateString === reversedString;
};
console.log(isPalindrom(str));
*/

/* //! Task #21 function() for() if()
TODO: Перевірити, чи елементи одного масиву є квадратами елементів іншого.
TODO – Var 1 
const numbers = [11, 9, 3, 121, 33, 24, 20];
const numbers2 = [121, 81, 9, 14641, 1089, 576, 400];
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
}
console.log(check(numbers, numbers2));
TODO – Var 2
const numbers = [11, 9, 3, 121, 33, 24, 20];
const numbers2 = [121, 81, 9, 14641, 1089, 576, 400];
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
}
console.log(check(numbers, numbers2));
*/

/* //! Task #22 function() for()
TODO: Написати функцію, яка сумуватиме сусідні числа і пушитиме їх у новий масив.
TODO – Var 1
const someArr = [22, 11, 34, 5, 12];
function sumNeighbors(array) {
  const sum = [];
  for (let i = 0; i < array.length - 1; i++) {
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
    sum.push(array[i] + (array[i + 1] || 0));
  }
  return sum;
}
console.log(sumNeighbors(someArr));
*/

/* //! Task #23 length() ? :
TODO: Вивести передостаннє значення масиву або null, якщо його немає.
const arr = [35, 9, -25, 0];
console.log(arr.length >= 2 ? arr[arr.length - 2] : null);
*/

/* //! Task #24 for() of() reduce()
TODO: Написати функцію, яка повертає суму чисел у масиві, повертаючи 0 для порожнього масиву.
TODO – Var 1
function sum(numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}
console.log(sum([1, 5.2, 4, 0, -1]));
console.log(sum([]));
TODO – Var 2
function sum(numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum([1, 5.2, 4, 0, -1]));
console.log(sum([]));
*/

/* //! Task #25 function() for() of() Псевдомасив
TODO: Написати функцію add для складання довільної кількості аргументів (чисел).
const add = function () {
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
TODO: Створити функцію calculateAverage(), яка розраховує середнє арифметичне довільної кількості аргументів.
const calculateAverage = function () {
  let total = 0;
  for (const arg of arguments) {
    total += arg;
  }
  return total / arguments.length;
};
console.log(calculateAverage(1, 2, 3, 4));
console.log(calculateAverage(14, 8, 2));
console.log(calculateAverage(27, 43, 2, 8, 36));
*/

/* //! Task #27 function() split()
TODO: Написати функцію getRectArea(dimensions) для обчислення площі прямокутника з рядка.
const getRectArea = function (dimensions) {
  const sidesArr = dimensions.split(' ');
  return Number(sidesArr[0]) * Number(sidesArr[1]);
};
console.log(getRectArea('8 11'));
console.log(getRectArea('18 11'));
console.log(getRectArea('8 21'));
*/

/* //! Task #28 function() for()
TODO: Написати функцію logItems(items), яка виводить елементи масиву з номерами, починаючи з 1.
const logItems = function (items) {
  for (let i = 0; i < items.length; i++) {
    console.log(`${i + 1} - ${items[i]}`);
  }
};
logItems(['Mango', 'Poly', 'Ajax']);
logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);
*/

/* //! Task #29 function() for() split()
TODO: Написати функцію printInfo(names, phones), яка виводить імена та номери телефонів.
const printInfo = function (names, phones) {
  names = names.split(',');
  phones = phones.split(',');
  for (let i = 0; i < names.length; i++) {
    console.log(`${names[i]} - ${phones[i]}`);
  }
};
printInfo('Jacob,William,Solomon,Artemis', '89001234567,89001112233,890055566377,890055566300');
*/
// #endregion

// #region // Об'єкти (Практика)
/* //! Task #1
TODO: Пошук друга по імені в масиві об’єктів.
const friends = [
  { name: 'John', online: true },
  { name: 'Alice', online: false },
  { name: 'Bob', online: true },
  { name: 'Charlie', online: false },
];
const findFriendByName = function (allFriends, friendName) {
  for (const friend of allFriends) {
    if (friend.name.toLowerCase() === friendName.toLowerCase()) {
      return friend;
    }
  }
  return 'none';
};
console.log(findFriendByName(friends, 'John'));
*/

/* //! Task #2
TODO: Отримати імена всіх друзів із масиву об’єктів.
const friends = [
  { name: 'John', online: true },
  { name: 'Alice', online: false },
  { name: 'Bob', online: true },
  { name: 'Charlie', online: false },
];
const getAllNames = function (allFriends) {
  const allNames = [];
  for (const friend of allFriends) {
    allNames.push(friend.name);
  }
  return allNames;
};
console.log(getAllNames(friends));
*/

/* //! Task #3
TODO: Отримати імена друзів, які онлайн.
const friends = [
  { name: 'John', online: true },
  { name: 'Alice', online: false },
  { name: 'Bob', online: true },
  { name: 'Charlie', online: false },
];
const getOnlineFriends = function (allFriends) {
  const friendsNames = [];
  for (const friend of allFriends) {
    if (friend.online) {
      friendsNames.push(friend.name);
    }
  }
  return friendsNames;
};
console.log(getOnlineFriends(friends));
*/

/* //! Task #4
TODO: Порахувати суму всіх зарплат у об’єкті.
TODO – Var 1 Object.entries()
const salaries = {
  Mango: 100,
  Poly: 160,
  Ajax: 222,
};
let sum = 0;
const array = Object.entries(salaries);
for (const arrayElement of array) {
  sum += arrayElement[1];
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
TODO: Сформувати масив об’єктів у форматі [key, value] із заданого об’єкта.
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
*/

/* //! Task #6
TODO: Обчислити загальну вартість каменів за назвою в масиві об’єктів.
const stones = [
  { name: 'Аконіт', price: 100, quantity: 10 },
 arthritis arthritis  { name: 'Смарагд', price: 1300, quantity: 4 },
  { name: 'Діамант', price: 2700, quantity: 3 },
  { name: 'Сапфір', price: 400, quantity: 7 },
  { name: 'Щебінь', price: 200, quantity: 2 },
];
const calcTotalPrice = function (allStones, stoneName) {
  stoneName = stoneName.toLowerCase();
  for (const stone of allStones) {
    if (stone.name.toLowerCase() === stoneName) {
      return stone.price * stone.quantity;
    }
  }
};
console.log(calcTotalPrice(stones, 'Діамант'));
*/

/* //! Task #7
TODO: Створити об’єкт із методом для обчислення площі прямокутника.
const rectangle = {
  width: 27,
  height: 23,
  calculateArea() {
    return this.width * this.height;
  }
};
console.log(rectangle.calculateArea());
*/

/* //! Task #8
TODO: Створити об’єкт bankAccount із методами для поповнення та зняття грошей.
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
TODO: Перевірити, чи має об’єкт заданий ключ.
TODO – Var 1
const obj = {
  name: 'Igor',
  car: 'Mercedes',
  carColor: 'black',
};
const checkObj = function (obj, key) {
  const keys = Object.keys(obj);
  for (const item of keys) {
    if (item === key) {
      return true;
    }
  }
  return false;
};
console.log(checkObj(obj, "car"));
TODO – Var 2
const obj = {
  name: 'Igor',
  car: 'Mercedes',
  carColor: 'black',
};
const checkObj = function (obj, key) {
  return Object.keys(obj).includes(key);
};
console.log(checkObj(obj, "car"));
*/
// #endregion

// #region // Об'єкти (Теорія)
/* //! dot notation
human.mood = "happy";
const human = {
  name: "Mango",
  hobby: "reading",
  age: 20,
  greet() {
    console.log(`Hello ${human.name}`);
  }
};
human.greet();
*/

/* //! brackets notation
human["mood"] = "happy";
const human = {
  name: "Mango",
  hobby: "reading",
  age: 20,
  greet() {
    console.log(`Hello ${human.name}`);
  }
};
human.greet();
*/

/* //! compound brackets notation
const userMood = "mood";
human[userMood] = "happy";
const human = {
  name: "Mango",
  hobby: "reading",
  age: 20,
  greet() {
    console.log(`Hello ${human.name}`);
  }
};
human.greet();
console.log(human);
*/

/* //! for...in
TODO: Порахуйте загальну кількість відгуків.
const feedbacks = {
  good: 5,
  neutral: 10,
  bad: 3,
};
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

// #region // Questions (Практика)
/* //! Question #1
TODO: Перевірити, чи є речення паліндромом.
const str = 'Я несу гусеня';
TODO – Var 1
function isPalindrom(string) {
  const newStr = string.replaceAll(' ', '').toLowerCase();
  let reversedString = '';
  for (let i = 0; i < newStr.length; i++) {
    reversedString += newStr[newStr.length - 1 - i];
  }
  return newStr === reversedString;
}
console.log(isPalindrom(str));
TODO – Var 2
function isPalindrom(string) {
  const newStr = string.replaceAll(' ', '').toLowerCase();
  let reversedString = '';
  for (let i = newStr.length - 1; i >= 0; i--) {
    reversedString += newStr[i];
  }
  return newStr === reversedString;
}
console.log(isPalindrom(str));
TODO – Var 3
function isPalindrom(string) {
  const newStr = string.replaceAll(' ', '').toLowerCase();
  for (let i = 0; i < Math.floor(newStr.length / 2); i++) {
    if (newStr[i] !== newStr[newStr.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
console.log(isPalindrom(str));
*/

/* //! Question #2
TODO: Вивести трикутник із зірочок від 1 до 7.
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

/* //! Question #3
TODO: Порахувати суму чисел від 12 до 27.
const num1 = 12;
const num2 = 27;
let sum = 0;
for (let i = num1; i <= num2; i++) {
  sum += i;
}
console.log(sum);
*/

/* //! Question #4
TODO: Перевірити, чи закохані Тіммі та Сара (парна + непарна кількість пелюсток).
TODO – Var 1
function checkLove(flower1, flower2) {
  return flower1 % 2 !== flower2 % 2;
}
console.log(checkLove(2, 3));
TODO – Var 2
function checkLove(flower1, flower2) {
  if ((flower1 % 2 === 0 && flower2 % 2 !== 0) || (flower1 % 2 !== 0 && flower2 % 2 === 0)) {
    return true;
  }
  return false;
}
console.log(checkLove(3, 3));
*/

/* //! Question #5
TODO: Запитати напій у користувача і вивести ціну за допомогою switch.
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
    console.log('Що це?');
}
console.log(price);
*/

/* //! Question #6
TODO: Перевірити наявність підрядка в рядку та знайти його позицію.
const languages = 'HTML, CSS, JS, PHP, React, Vue, Node.js, C, C++';
function findSubString(string, subString) {
  if (string.includes(subString)) {
    return string.indexOf(subString);
  }
  return 'Not found';
}
console.log(findSubString(languages, 'JS'));
*/

/* //! Question #7
TODO: Дізнатися, на що закінчується рядок (%, rem, em, px).
const str = '24px';
const result = str.slice(-2);
console.log(result);
*/

/* //! Question #8
TODO: Замінити всі входження 'dog' на 'monkey' у рядку.
const str = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
console.log(str.replaceAll('dog', 'monkey'));
*/

/* //! Question #9 Логічні оператори
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

/* //! Question #10 Перетворення типів
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

/* //! Question #11
TODO: Перевірити, чи число поза діапазоном 10-20.
let num = 25;
console.log(num < 10 || num > 20);
*/
// #endregion

// #region // Додаткові задачі (без номерів)
/* //! Високосні роки
TODO: Вивести високосні роки від 1700 до 2025.
for (let i = 1700; i <= 2025; i++) {
  if (i % 400 === 0 || (i % 100 !== 0 && i % 4 === 0)) {
    console.log('високосний', i);
  }
}
*/

/* //! Перевірка логіну та пароля
TODO: Перевірити логін і пароль через prompt.
const userLogin = prompt('Enter login!');
if (userLogin === 'Адмін') {
  const userPassword = prompt('Enter your password');
  if (userPassword === 'Я головний') {
    console.log('Здрастуйте!');
  } else if (userPassword === null || userPassword === '') {
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

/* //! Квадрат із плюсів
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
