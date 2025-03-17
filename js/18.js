//#region //?  (Практика)
/* //! Arrays (Копіювання масиву за посиланням)
TODO: Створити два масиви, де другий є копією першого за посиланням, додати елемент до першого масиву та перевірити зміни в обох.
 * - Створити масив arr1 із початковими значеннями [1, 2, 3].
 * - Привласнити arr2 значення arr1 (копіювання за посиланням).
 * - Вивести обидва масиви в консоль до і після додавання елемента до arr1.
 * - Перевірити, чи arr1 і arr2 є одним і тим самим масивом (за посиланням).
 * - Корисно для розуміння роботи посилань у масивах JavaScript.

TODO: Task
const arr1 = [1, 2, 3];
function checkArrayReference() {
}

checkArrayReference(); // Виводить: arr1: [1, 2, 3], arr2: [1, 2, 3], arr1: [1, 2, 3, 20], arr2: [1, 2, 3, 20], true

TODO: Answer - Var 1 (з додаванням через індекс)
const arr1 = [1, 2, 3];
function checkArrayReference() {
  const arr2 = arr1;
  console.log('arr1:', arr1);
  console.log('arr2:', arr2);
  arr1[arr1.length] = 20; // Додаємо елемент через індекс
  console.log('arr1:', arr1);
  console.log('arr2:', arr2);
  console.log(arr1 === arr2);
}

checkArrayReference(); // Виводить: arr1: [1, 2, 3], arr2: [1, 2, 3], arr1: [1, 2, 3, 20], arr2: [1, 2, 3, 20], true

TODO: Answer - Var 2 (з методом push)
const arr1 = [1, 2, 3];
function checkArrayReference() {
  const arr2 = arr1;
  console.log('arr1:', arr1);
  console.log('arr2:', arr2);
  arr1.push(20); // Додаємо елемент через push
  console.log('arr1:', arr1);
  console.log('arr2:', arr2);
  console.log(arr1 === arr2);
}

checkArrayReference(); // Виводить: arr1: [1, 2, 3], arr2: [1, 2, 3], arr1: [1, 2, 3, 20], arr2: [1, 2, 3, 20], true
*/
/* //! for/for...of (Перебір масиву з нумерацією)
TODO: Напиши скрипт для перебору масиву fruits. Для кожного елемента масиву виведи в консоль рядок у форматі номер_елемента: значення_елемента. Нумерація елементів повинна починатися з 1.
 * - Дано масив fruits із фруктами (наприклад, ['🍎', '🍇', '🍑', ...]).
 * - Перебрати всі елементи масиву.
 * - Вивести для кожного елемента рядок у форматі "номер: значення", де номер починається з 1.
 * - Нічого не повертає, лише виводить результат у консоль.
 * - Корисно для відображення пронумерованого списку елементів.

TODO: Task
const fruits = ['🍎', '🍇', '🍑', '🍌', '🍎', '🍋'];
function printFruitsNumbered() {
}

printFruitsNumbered(); // Виводить: 1: 🍎, 2: 🍇, 3: 🍑, 4: 🍌, 5: 🍎, 6: 🍋

TODO: Answer - Var 1 (з for...of)
const fruits = ['🍎', '🍇', '🍑', '🍌', '🍎', '🍋'];
function printFruitsNumbered() {
  let fruitNumber = 1; // Починаємо нумерацію з 1
  for (const fruit of fruits) {
    console.log(`${fruitNumber}: ${fruit}`);
    fruitNumber++; // Збільшуємо лічильник
  }
}

printFruitsNumbered(); // Виводить: 1: 🍎, 2: 🍇, 3: 🍑, 4: 🍌, 5: 🍎, 6: 🍋

TODO: Answer - Var 2 (з for)
const fruits = ['🍎', '🍇', '🍑', '🍌', '🍎', '🍋'];
function printFruitsNumbered() {
  for (let i = 0; i < fruits.length; i++) {
    console.log(`${i + 1}: ${fruits[i]}`); // i + 1, щоб почати з 1, а не з 0
  }
}

printFruitsNumbered(); // Виводить: 1: 🍎, 2: 🍇, 3: 🍑, 4: 🍌, 5: 🍎, 6: 🍋
*/
/* //! Обчислення площі прямокутника
TODO: Напиши скрипт для обчислення площі прямокутника зі сторонами, значення яких зберігаються у змінній values у вигляді рядка. Значення гарантовано розділені пробілом.
 * - Дано рядок values, який містить два числа (довжину і ширину), розділені пробілом (наприклад, '8 11').
 * - Розділити рядок на масив чисел.
 * - Перетворити елементи масиву в числа і знайти добуток (площу прямокутника).
 * - Повернути результат обчислення.
 * - Корисно для обробки даних із рядка та виконання математичних операцій.

TODO: Task
const values = '8 11';
function calculateRectangleArea() {
}

console.log(calculateRectangleArea()); // Виводить: 88 (8 * 11)

TODO: Answer
const values = '8 11';
function calculateRectangleArea() {
  const sidesArr = values.split(' '); // Розділяємо рядок на масив
  const rectangleArea = Number(sidesArr[0]) * Number(sidesArr[1]); // Перетворюємо в числа і множимо
  return rectangleArea;
}

console.log(calculateRectangleArea()); // Виводить: 88 (8 * 11)
*/
/* //! for/for...of (Перебір масиву елементів)
TODO: Напиши скрипт для перебору масиву friends і виведи кожен елемент у консоль.
 * - Дано масив friends із іменами друзів (наприклад, ['Mango', 'Kiwi', 'Poly', 'Ajax']).
 * - Перебрати всі елементи масиву.
 * - Вивести кожен елемент у окремому рядку в консоль.
 * - Нічого не повертає, лише виводить результат.
 * - Корисно для базового перебору масиву та виведення його вмісту.

TODO: Task
const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
function printFriends() {
}

printFriends(); // Виводить: Mango, Kiwi, Poly, Ajax

TODO: Answer - Var 1 (з for)
const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
function printFriends() {
  console.log('friends:', friends); // Виводимо масив для наочності
  for (let i = 0; i < friends.length; i++) {
    console.log(friends[i]);
  }
}

printFriends(); // Виводить: friends: ['Mango', 'Kiwi', 'Poly', 'Ajax'], Mango, Kiwi, Poly, Ajax

TODO: Answer - Var 2 (з for...of)
const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
function printFriends() {
  for (const item of friends) {
    console.log(item);
  }
}

printFriends(); // Виводить: Mango, Kiwi, Poly, Ajax
*/
/* //! for (Виведення імен та телефонів)
TODO: Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача із рядків, розділених комами.
 * - Дано два рядки: names (імена) та phones (телефони), розділені комами.
 * - Кількість імен та телефонів однакова, їх порядковий номер указує на відповідність.
 * - Перетворити рядки в масиви за допомогою split().
 * - Перебрати масив імен і вивести для кожного імені відповідний номер телефону.
 * - Корисно для обробки парного списку даних із рядків.

TODO: Task
const names = 'Jacob,William,Solomon,Artemis';
const phones = '89001234567,89001112233,890055566377,890055566300';
function printNamesAndPhones() {
}

printNamesAndPhones(); // Виводить: Jacob - 89001234567, William - 89001112233, Solomon - 890055566377, Artemis - 890055566300

TODO: Answer - Var 1 (з for)
const names = 'Jacob,William,Solomon,Artemis';
const phones = '89001234567,89001112233,890055566377,890055566300';
function printNamesAndPhones() {
  console.log('names:', names);
  console.log('phones:', phones);
  const namesArr = names.split(',');
  const phonesArr = phones.split(',');
  console.log('namesArr:', namesArr);
  console.log('phonesArr:', phonesArr);
  for (let i = 0; i < namesArr.length; i++) {
    console.log(`${namesArr[i]} - ${phonesArr[i]}`);
  }
}

printNamesAndPhones(); // Виводить: Jacob - 89001234567, William - 89001112233, Solomon - 890055566377, Artemis - 890055566300
*/
/* //! Підрахунок суми парних чисел у масиві
TODO: Напиши скрипт, який підраховує суму всіх парних чисел у масиві.
 * - Дано масив numbers із цілими числами (наприклад, [1, 5, 8, 9, 12, 4, ...]).
 * - Перебрати всі елементи масиву.
 * - Знайти парні числа (ті, що діляться на 2 без остачі).
 * - Порахувати їхню суму.
 * - Повернути результат обчислення.
 * - Корисно для аналізу числових даних і роботи з умовами.

TODO: Task
const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
function sumEvenNumbers() {
}

console.log(sumEvenNumbers()); // Виводить: 86 (8 + 12 + 4 + 30 + 18 + 14)

TODO: Answer
const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
function sumEvenNumbers() {
  let total = 0; // Початкова сума
  for (const num of numbers) { // Перебираємо масив
    if (num % 2 === 0) { // Перевіряємо, чи парне число
      total += num; // Додаємо до суми
    }
  }
  return total; // Повертаємо результат
}

console.log(sumEvenNumbers()); // Виводить: 86 (8 + 12 + 4 + 30 + 18 + 14)
*/
/* //! Task #7 split() join() indexOf() for()
TODO: Напиши скрипт, який виводить у консоль усі слова рядка крім першого і останнього. Результуючий рядок не повинен починатися або закінчуватися символом пробілу. Скрипт повинен працювати для будь-якого рядка.
 * - Дано рядок із кількома словами, розділеними пробілами (наприклад, 'Welcome to the future').
 * - Розділити рядок на масив слів.
 * - Взяти всі слова, крім першого і останнього.
 * - Об’єднати їх у новий рядок без зайвих пробілів на початку чи в кінці.
 * - Повернути результат.
 * - Корисно для обробки тексту та вилучення середньої частини рядка.

TODO: Task
const string = 'Welcome to the future';
function getMiddleWords() {
}

console.log(getMiddleWords()); // Виводить: to the

TODO: Answer - Var 1
const string = 'Welcome to the future';
function getMiddleWords() {
  const wordsArr = string.split(' '); // Розділяємо рядок на масив слів
  let resultStr = '';
  for (let i = 1; i < wordsArr.length - 1; i++) {
    resultStr += ` ${wordsArr[i]}`; // Додаємо слова з пробілом
  }
  return resultStr.trim(); // Видаляємо зайві пробіли
}

console.log(getMiddleWords()); // Виводить: to the

TODO: Answer - Var 2
const string = 'Welcome to the future';
function getMiddleWords() {
  let wordsArr = string.split(' '); // Розділяємо рядок на масив слів
  wordsArr = wordsArr.slice(1, wordsArr.length - 1); // Беремо середні слова
  return wordsArr.join(' '); // Об’єднуємо з пробілом
}

console.log(getMiddleWords()); // Виводить: to the

TODO: Answer - Var 3
const string = 'Welcome to the future';
function getMiddleWords() {
  const firstSpace = string.indexOf(' '); // Знаходимо перший пробіл
  const lastSpace = string.lastIndexOf(' '); // Знаходимо останній пробіл
  return string.slice(firstSpace + 1, lastSpace); // Витягуємо середину
}

console.log(getMiddleWords()); // Виводить: to the
*/
/* //! Task #8 for()
TODO: Напиши скрипт, який «розгортає» рядок (зворотній порядок літер) та виводить її в консоль.
 * - Дано рядок (наприклад, 'Welcome to the future').
 * - Перебрати всі символи рядка в зворотному порядку.
 * - Скласти новий рядок із символів у зворотній послідовності.
 * - Повернути результат.
 * - Корисно для роботи з текстом і створення дзеркальних рядків.

TODO: Task
const string = 'Welcome to the future';
function reverseString() {
}

console.log(reverseString()); // Виводить: erutuf eht ot emocleW

TODO: Answer - Var 1
const string = 'Welcome to the future';
function reverseString() {
  const lettersArr = string.split(''); // Розділяємо на масив символів
  let reversedStr = '';
  for (let i = lettersArr.length - 1; i >= 0; i--) {
    reversedStr += lettersArr[i]; // Додаємо символи в зворотному порядку
  }
  return reversedStr;
}

console.log(reverseString()); // Виводить: erutuf eht ot emocleW

TODO: Answer - Var 2
const string = 'Welcome to the future';
function reverseString() {
  let reversedStr = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reversedStr += string[i]; // Беремо символи напряму із рядка
  }
  return reversedStr;
}

console.log(reverseString()); // Виводить: erutuf eht ot emocleW
*/
/* //! Task #9 for()
TODO: Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.
 * - Дано масив чисел (наприклад, [17, -10, 94, -30, 1, 23, -20]).
 * - Перебрати всі елементи масиву.
 * - Знайти найменше число, порівнюючи елементи.
 * - Повернути найменше число.
 * - Корисно для аналізу числових даних.

TODO: Task
const values = [17, -10, 94, -30, 1, 23, -20];
function findMinNumber() {
}

console.log(findMinNumber()); // Виводить: -30

TODO: Answer
const values = [17, -10, 94, -30, 1, 23, -20];
function findMinNumber() {
  let min = values[0]; // Починаємо з першого елемента
  for (let i = 1; i < values.length; i++) {
    if (values[i] < min) { // Якщо поточне менше, оновлюємо min
      min = values[i];
    }
  }
  return min;
}

console.log(findMinNumber()); // Виводить: -30
*/
/* //! Task #10 for()
TODO: У нас є декілька масивів із зарплатами працівників із різних відділів, потрібно порахувати загальну суму зарплат.
 * - Дано два масиви зарплат: managerSalaries і developersSalaries.
 * - Перебрати всі елементи обох масивів.
 * - Додати кожну зарплату до загальної суми.
 * - Повернути загальну суму.
 * - Корисно для підсумовування даних із кількох джерел.

TODO: Task
const managerSalaries = [100, 150, 250, 400, 500];
const developersSalaries = [800, 1500, 4000];
function calculateTotalSalaries() {
}

console.log(calculateTotalSalaries()); // Виводить: 7700 (100 + 150 + 250 + 400 + 500 + 800 + 1500 + 4000)

TODO: Answer
const managerSalaries = [100, 150, 250, 400, 500];
const developersSalaries = [800, 1500, 4000];
function calculateTotalSalaries() {
  let total = 0; // Початкова сума
  for (const salary of managerSalaries) {
    total += salary; // Додаємо зарплати менеджерів
  }
  for (const salary of developersSalaries) {
    total += salary; // Додаємо зарплати розробників
  }
  return total;
}

console.log(calculateTotalSalaries()); // Виводить: 7700 (100 + 150 + 250 + 400 + 500 + 800 + 1500 + 4000)
*/
/* //! Task #11 push()
TODO: Створіть масив styles з елементами «Джаз» та «Блюз». Додайте "Рок-н-рол" в кінець. Замініть значення "Блюз" на "Класика". Видаліть перший елемент масиву і виведіть його в консоль. Вставте «Реп» і «Реггі» на початок масиву.
 * - Дано початковий масив із двома елементами.
 * - Виконати операції: додавання, заміна, видалення, вставка.
 * - Повернути змінений масив.
 * - Корисно для роботи з масивами та їх модифікації.

TODO: Task
function modifyStyles() {
  const styles = ['Джаз', 'Блюз'];
}

console.log(modifyStyles()); // Виводить: ["Реп", "Реггі", "Класика", "Рок-н-рол"]

TODO: Answer
function modifyStyles() {
  const styles = ['Джаз', 'Блюз'];
  styles.push('Рок-н-рол'); // Додаємо в кінець
  const index = styles.indexOf('Блюз'); // Знаходимо індекс "Блюз"
  styles[index] = 'Класика'; // Замінюємо на "Класика"
  const deletedElement = styles.shift(); // Видаляємо перший елемент
  console.log(deletedElement); // Виводить: Джаз
  styles.unshift('Реп', 'Реггі'); // Додаємо на початок
  return styles;
}

console.log(modifyStyles()); // Виводить: ["Реп", "Реггі", "Класика", "Рок-н-рол"]
*/
/* //! Task #12 push() function()
TODO: Створити функцію multiples(m, n), яка повертає масив перших m кратних дійсного числа n. Вважати, що m - натуральне число.
 * - Дано два параметри: m (кількість кратних) і n (число).
 * - Сформувати масив із перших m кратних числа n.
 * - Повернути масив.
 * - Корисно для генерації послідовностей чисел.

TODO: Task
function multiples(m, n) {
}

console.log(multiples(3, 5)); // Виводить: [5, 10, 15]

TODO: Answer - Var 1
function multiples(m, n) {
  const arr = [];
  let startNum = n; // Початкове значення
  for (let i = 0; i < m; i += 1) {
    arr.push(startNum); // Додаємо кратне
    startNum += n; // Збільшуємо на n
  }
  return arr;
}

console.log(multiples(3, 5)); // Виводить: [5, 10, 15]

TODO: Answer - Var 2
function multiples(m, n) {
  const arr = [];
  for (let i = 1; i <= m; i += 1) {
    arr.push(n * i); // Додаємо n помножене на i
  }
  return arr;
}

console.log(multiples(3, 5)); // Виводить: [5, 10, 15]
*/
/* //! Task #13 for() split()
TODO: Перетворити рядок, що містить слова, розділені комами, в масив слів і вивести кожне слово в окремому рядку за допомогою циклу for або for..of.
 * - Дано рядок із словами, розділеними комами (наприклад, 'HTML, JavaScript, CSS, React').
 * - Перетворити рядок у масив слів.
 * - Вивести кожне слово в консоль окремо.
 * - Нічого не повертати, лише виводити.
 * - Корисно для обробки списків у текстовому форматі.

TODO: Task
const str = 'HTML, JavaScript, CSS, React';
function printWords() {
}

printWords(); // Виводить: HTML, JavaScript, CSS, React

TODO: Answer - Var 1
const str = 'HTML, JavaScript, CSS, React';
function printWords() {
  const array = str.split(','); // Розділяємо на масив
  for (let index = 0; index < array.length; index++) {
    console.log(array[index].trim()); // Виводимо кожне слово, видаляючи зайві пробіли
  }
}

printWords(); // Виводить: HTML, JavaScript, CSS, React

TODO: Answer - Var 2
const str = 'HTML, JavaScript, CSS, React';
function printWords() {
  const array = str.split(','); // Розділяємо на масив
  for (const element of array) {
    console.log(element.trim()); // Виводимо кожне слово, видаляючи зайві пробіли
  }
}

printWords(); // Виводить: HTML, JavaScript, CSS, React
*/
/* //! Task #14 split() join()
TODO: Порахуй кількість слів у рядку, використовуючи методи масивів і створи новий рядок, розділений дефісами у нижньому регістрі.
 * - Дано рядок із словами, розділеними пробілами (наприклад, 'JavaScript is a popular programming language').
 * - Порахувати кількість слів.
 * - Створити новий рядок із дефісами замість пробілів у нижньому регістрі.
 * - Повернути об’єкт із кількістю слів і новим рядком.
 * - Корисно для аналізу та трансформації тексту.

TODO: Task
const message = 'JavaScript is a popular programming language';
function transformString() {
}

console.log(transformString()); // Виводить: { count: 7, transformed: 'javascript-is-a-popular-programming-language' }

TODO: Answer
const message = 'JavaScript is a popular programming language';
function transformString() {
  const words = message.split(' '); // Розділяємо на масив слів
  const count = words.length; // Кількість слів
  const transformed = words.join('-').toLowerCase(); // Об’єднуємо з дефісами і в нижній регістр
  return { count, transformed }; // Повертаємо об’єкт
}

console.log(transformString()); // Виводить: { count: 7, transformed: 'javascript-is-a-popular-programming-language' }
*/
/* //! Task #15 for() if() else{}
TODO: Напишіть скрипт, який замінює регістр кожного символу в рядку на протилежний. Наприклад 'JavaScript' повинен повернути 'jAVAsCRIPT'.
 * - Дано рядок (наприклад, 'JavaScript').
 * - Перебрати кожен символ рядка.
 * - Змінити регістр: великі на малі, малі на великі.
 * - Повернути новий рядок.
 * - Корисно для трансформації тексту.

TODO: Task
const str = 'JavaScript';
function swapCase() {
}

console.log(swapCase()); // Виводить: jAVAsCRIPT

TODO: Answer - Var 1
const str = 'JavaScript';
function swapCase() {
  let updateString = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      updateString += str[i].toLowerCase(); // Великі на малі
    } else {
      updateString += str[i].toUpperCase(); // Малі на великі
    }
  }
  return updateString;
}

console.log(swapCase()); // Виводить: jAVAsCRIPT

TODO: Answer - Var 2
const str = 'JavaScript';
function swapCase() {
  const array = str.split(''); // Розділяємо на масив символів
  const updateArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i].toUpperCase()) {
      updateArray.push(array[i].toLowerCase()); // Великі на малі
    } else {
      updateArray.push(array[i].toUpperCase()); // Малі на великі
    }
  }
  return updateArray.join(''); // Об’єднуємо назад у рядок
}

console.log(swapCase()); // Виводить: jAVAsCRIPT
*/
/* //! Task #16 indexOf()
TODO: Знайти всі елементи масиву, що містять задану підстроку, та об'єднати їх у новий масив, після чого вивести у консоль повідомлення "Масив елементів, що містять підстроку substring: ...". Результат повинен бути розділений комами та пробілами.
 * - Дано масив слів і підстроку для пошуку (наприклад, 'S').
 * - Перебрати масив і знайти елементи, що містять підстроку.
 * - Сформувати новий масив із знайдених елементів.
 * - Вивести повідомлення з результатом.
 * - Корисно для фільтрації текстових даних.

TODO: Task
const wordsArray = ['JavaScript', 'HTML', 'CSS', 'React'];
const substring = 'S';
function findSubstringElements() {
}

findSubstringElements(); // Виводить: Масив елементів, що містять підстроку S: JavaScript, CSS

TODO: Answer
const wordsArray = ['JavaScript', 'HTML', 'CSS', 'React'];
const substring = 'S';
function findSubstringElements() {
  const array = [];
  for (const str of wordsArray) {
    if (str.includes(substring)) { // Перевіряємо наявність підстроки
      array.push(str); // Додаємо в новий масив
    }
  }
  console.log(`Масив елементів, що містять підстроку ${substring}: ${array.join(', ')}`);
}

findSubstringElements(); // Виводить: Масив елементів, що містять підстроку S: JavaScript, CSS
*/
/* //! Task #17 for() if() else{}
TODO: Створи 2 масиви чисел. Об’єднай їх за допомогою методу масиву. Створи нові масиви і за допомогою циклу for або for..of, у перший масив збери усі парні числа, а в другий усі непарні і виведи їх у консоль.
 * - Дано два масиви чисел (наприклад, [1, 2, 3, 5, 4] і [10, 21, 33, 55, 44]).
 * - Об’єднати масиви в один.
 * - Розділити числа: парні в один масив, непарні в інший.
 * - Вивести обидва масиви в консоль.
 * - Корисно для сортування даних за умовою.

TODO: Task
const firstArray = [1, 2, 3, 5, 4];
const secondArray = [10, 21, 33, 55, 44];
function separateNumbers() {
}

separateNumbers(); // Виводить: [2, 4, 10, 44], [1, 3, 5, 21, 33, 55]

TODO: Answer
const firstArray = [1, 2, 3, 5, 4];
const secondArray = [10, 21, 33, 55, 44];
function separateNumbers() {
  const newArray = firstArray.concat(secondArray); // Об’єднуємо масиви
  const evenNumbers = [];
  const oddNumbers = [];
  for (const element of newArray) {
    if (element % 2 === 0) {
      evenNumbers.push(element); // Парні числа
    } else {
      oddNumbers.push(element); // Непарні числа
    }
  }
  console.log(evenNumbers);
  console.log(oddNumbers);
}

separateNumbers(); // Виводить: [2, 4, 10, 44], [1, 3, 5, 21, 33, 55]
*/
/* //! Task #18 for() if() function()
TODO: Напиши функцію findSmallerNumber(numbers), яка шукає найменше число в масиві. Додай перевірку, що функція отримує масив.
 * - Дано масив чисел або інший тип даних (наприклад, [5, '-13', -7, -11, 'a']).
 * - Перевірити, чи аргумент є масивом.
 * - Знайти найменше число в масиві.
 * - Повернути найменше число або повідомлення про помилку.
 * - Корисно для валідації та пошуку мінімуму.

TODO: Task
function findSmallerNumber(numbers) {
}

console.log(findSmallerNumber(0)); // Виводить: number is not Array
console.log(findSmallerNumber([5, -13, -7, -11])); // Виводить: -13

TODO: Answer - Var 1
function findSmallerNumber(numbers) {
  if (!Array.isArray(numbers)) { // Перевірка на масив
    return 'number is not Array';
  }
  let smallNumber = numbers[0]; // Починаємо з першого елемента
  for (let i = 0; i < numbers.length; i++) {
    if (smallNumber > numbers[i]) { // Якщо поточне менше, оновлюємо
      smallNumber = numbers[i];
    }
  }
  return smallNumber;
}

console.log(findSmallerNumber(0)); // Виводить: number is not Array
console.log(findSmallerNumber([5, -13, -7, -11])); // Виводить: -13

TODO: Answer - Var 2
function findSmallerNumber(numbers) {
  if (!Array.isArray(numbers)) { // Перевірка на масив
    return 'number is not Array';
  }
  let smallNumber = numbers[0];
  for (let number of numbers) {
    if (typeof number !== 'number') { // Пропускаємо нечислові значення
      continue;
    }
    if (smallNumber > number) { // Якщо поточне менше, оновлюємо
      smallNumber = number;
    }
  }
  return smallNumber;
}

console.log(findSmallerNumber(0)); // Виводить: number is not Array
console.log(findSmallerNumber([5, '-13', -7, -11, 'a'])); // Виводить: -11
*/
/* //! Task #19 function()
TODO: Напишіть функцію min(a, b), яка повертає менше з чисел a, b. Потрібно додати перевірку, що функція отримує числа.
 * - Дано два аргументи a і b.
 * - Перевірити, чи обидва аргументи є числами.
 * - Повернути менше з чисел або повідомлення про помилку.
 * - Корисно для порівняння чисел із валідацією.

TODO: Task
function min(a, b) {
}

console.log(min(5, 10)); // Виводить: 5
console.log(min('5', 10)); // Виводить: One of parameters is not a number

TODO: Answer
function min(a, b) {
  return typeof a === 'number' && typeof b === 'number' // Перевірка типів
    ? Math.min(a, b) // Повертаємо менше число
    : 'One of parameters is not a number'; // Повідомлення про помилку
}

console.log(min(5, 10)); // Виводить: 5
console.log(min('5', 10)); // Виводить: One of parameters is not a number
*/
/* //! Task #20 Паліндром
TODO: Потрібно перевірити, чи є речення паліндромом.
 * - Дано рядок (наприклад, 'Я несу гусеня').
 * - Перетворити рядок у нижній регістр і видалити пробіли.
 * - Перевірити, чи рядок читається однаково в обох напрямках.
 * - Повернути true, якщо це паліндром, і false, якщо ні.
 * - Корисно для аналізу тексту та перевірки симетрії.

TODO: Task
const str = 'Я несу гусеня';
function isPalindrom() {
}

console.log(isPalindrom()); // Виводить: true

TODO: Answer
const str = 'Я несу гусеня';
function isPalindrom() {
  const updateString = str.toLowerCase().replaceAll(' ', ''); // Переводимо в нижній регістр і видаляємо пробіли
  const array = [];
  for (let i = 0; i < updateString.length; i++) {
    array.push(updateString[updateString.length - 1 - i]); // Формуємо зворотний рядок
  }
  let reversedString = array.join('');
  return updateString === reversedString; // Порівнюємо
}

console.log(isPalindrom()); // Виводить: true
*/
/* //! Task #21 function() for() if()
TODO: Напиши функцію, яка перевіряє, чи елементи з першого масиву є квадратами елементів другого масиву.
 * - Дано два масиви чисел (наприклад, [11, 9, 3] і [121, 81, 9]).
 * - Перевірити, чи кожен елемент першого масиву, піднесений до квадрата, відповідає елементу другого масиву.
 * - Повернути true, якщо масиви відповідають умові, і false, якщо ні.
 * - Корисно для порівняння даних із математичними операціями.

TODO: Task
const numbers = [11, 9, 3];
const numbers2 = [121, 81, 9];
function checkSquares() {
}

console.log(checkSquares()); // Виводить: true

TODO: Answer - Var 1
const numbers = [11, 9, 3];
const numbers2 = [121, 81, 9];
function checkSquares() {
  if (numbers.length !== numbers2.length) { // Перевірка довжини
    return false;
  }
  const powNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    powNumbers.push(numbers[i] * numbers[i]); // Підносимо до квадрата
  }
  for (let i = 0; i < numbers.length; i++) {
    if (powNumbers[i] !== numbers2[i]) { // Порівнюємо
      return false;
    }
  }
  return true;
}

console.log(checkSquares()); // Виводить: true

TODO: Answer - Var 2
const numbers = [11, 9, 3];
const numbers2 = [121, 81, 9];
function checkSquares() {
  if (numbers.length !== numbers2.length) { // Перевірка довжини
    return false;
  }
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] !== Math.sqrt(numbers2[i])) { // Перевірка квадратного кореня
      return false;
    }
  }
  return true;
}

console.log(checkSquares()); // Виводить: true
*/
/* //! Task #22 function() for()
TODO: Напиши функцію, яка сумуватиме сусідні числа і додасть їх у новий масив.
 * - Дано масив чисел (наприклад, [22, 11, 34, 5, 12]).
 * - Скласти суми сусідніх чисел (перше з другим, друге з третім тощо).
 * - Додати суми в новий масив.
 * - Повернути масив сум.
 * - Корисно для обробки послідовностей чисел.

TODO: Task
const someArr = [22, 11, 34, 5, 12];
function sumNeighbors() {
}

console.log(sumNeighbors()); // Виводить: [33, 45, 39, 17]

TODO: Answer - Var 1
const someArr = [22, 11, 34, 5, 12];
function sumNeighbors() {
  const sum = [];
  for (let i = 0; i < someArr.length - 1; i++) {
    sum.push(someArr[i] + someArr[i + 1]); // Сума сусідніх чисел
  }
  return sum;
}

console.log(sumNeighbors()); // Виводить: [33, 45, 39, 17]
*/
/* //! Task #23 length() ? :
TODO: У коді вже є змінна arr, яка містить масив. Необхідно вивести передостаннє значення масиву змінної arr, якщо воно є. Якщо такого значення в масиві немає, потрібно вивести null.
 * - Дано масив arr із числами.
 * - Перевірити, чи є в масиві принаймні два елементи.
 * - Повернути передостанній елемент або null.
 * - Корисно для доступу до елементів масиву з умовою.

TODO: Task
const arr = [35, 9, -25, 0];
function getPenultimate() {
}

console.log(getPenultimate()); // Виводить: -25

TODO: Answer
const arr = [35, 9, -25, 0];
function getPenultimate() {
  return arr.length >= 2 ? arr[arr.length - 2] : null; // Умовний оператор для перевірки
}

console.log(getPenultimate()); // Виводить: -25
*/
/* //! Task #24 for() of() reduce()
TODO: Напишіть функцію, яка приймає масив чисел та повертає суму чисел. Числа можуть бути негативними чи нецілими. Якщо масив не містить чисел, слід повернути 0.
 * - Дано масив чисел (наприклад, [1, 5.2, 4, 0, -1]).
 * - Порахувати суму всіх елементів.
 * - Повернути 0, якщо масив порожній.
 * - Повернути суму чисел.
 * - Корисно для підсумовування числових даних.

TODO: Task
function sum(numbers) {
}

console.log(sum([1, 5.2, 4, 0, -1])); // Виводить: 9.2

TODO: Answer - Var 1
function sum(numbers) {
  let total = 0; // Початкова сума
  for (let num of numbers) {
    total += num; // Додаємо кожне число
  }
  return total;
}

console.log(sum([1, 5.2, 4, 0, -1])); // Виводить: 9.2

TODO: Answer - Var 2
function sum(numbers) {
  return numbers.reduce((acc, num) => acc + num, 0); // Сума через reduce
}

console.log(sum([1, 5.2, 4, 0, -1])); // Виводить: 9.2
*/
/* //! Task #25 function() for() of() Псевдомасив
TODO: Напиши функцію add для складання довільної кількості аргументів (чисел).
 * - Функція приймає довільну кількість чисел як аргументи.
 * - Скласти всі аргументи в суму.
 * - Повернути результат.
 * - Корисно для роботи з псевдомасивами arguments.

TODO: Task
function add() {
}

console.log(add(1, 2, 3)); // Виводить: 6

TODO: Answer
function add() {
  let total = 0; // Початкова сума
  for (const arg of arguments) { // Перебираємо псевдомасив
    total += arg; // Додаємо кожен аргумент
  }
  return total;
}

console.log(add(1, 2, 3)); // Виводить: 6
*/
/* //! Task #26 function() for() of() Псевдомасив
TODO: Створіть функцію calculateAverage(), яка приймає довільну кількість числових аргументів та розраховує середнє арифметичне.
 * - Функція приймає довільну кількість чисел як аргументи.
 * - Порахувати суму всіх аргументів.
 * - Розділити суму на кількість аргументів.
 * - Повернути середнє арифметичне.
 * - Корисно для обчислень із псевдомасивами.

TODO: Task
function calculateAverage() {
}

console.log(calculateAverage(1, 2, 3, 4)); // Виводить: 2.5

TODO: Answer
function calculateAverage() {
  let total = 0; // Початкова сума
  for (const arg of arguments) { // Перебираємо псевдомасив
    total += arg; // Додаємо кожен аргумент
  }
  return total / arguments.length; // Ділимо на кількість
}

console.log(calculateAverage(1, 2, 3, 4)); // Виводить: 2.5
*/
/* //! Task #27 function() split()
TODO: Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами, значення яких буде передано до параметра dimensions у вигляді рядка. Значення гарантовано розділені пробілом.
 * - Дано рядок dimensions із двома числами, розділеними пробілом (наприклад, '8 11').
 * - Розділити рядок на масив чисел.
 * - Перетворити елементи в числа і знайти добуток.
 * - Повернути площу прямокутника.
 * - Корисно для обробки числових даних із рядка.

TODO: Task
function getRectArea(dimensions) {
}

console.log(getRectArea('8 11')); // Виводить: 88

TODO: Answer
function getRectArea(dimensions) {
  const sidesArr = dimensions.split(' '); // Розділяємо рядок
  return Number(sidesArr[0]) * Number(sidesArr[1]); // Перетворюємо в числа і множимо
}

console.log(getRectArea('8 11')); // Виводить: 88
*/
/* //! Task #28 function() for()
TODO: Напиши функцію logItems(items), яка отримує масив та використовує цикл, який для кожного елемента масиву буде виводити в консоль повідомлення у форматі <номер елемента> - <значення елемента>. Нумерація елементів повинна починатися з 1.
 * - Дано масив елементів (наприклад, ['Mango', 'Poly', 'Ajax']).
 * - Перебрати масив і вивести кожен елемент із номером, починаючи з 1.
 * - Нічого не повертати, лише виводити в консоль.
 * - Корисно для відображення пронумерованих списків.

TODO: Task
function logItems(items) {
}

logItems(['Mango', 'Poly', 'Ajax']); // Виводить: 1 - Mango, 2 - Poly, 3 - Ajax

TODO: Answer
function logItems(items) {
  for (let i = 0; i < items.length; i++) {
    console.log(`${i + 1} - ${items[i]}`); // Виводимо номер і значення
  }
}

logItems(['Mango', 'Poly', 'Ajax']); // Виводить: 1 - Mango, 2 - Poly, 3 - Ajax
*/
/* //! Task #29 function() for() split()
TODO: Напиши функцію printInfo(names, phones) яка виводить у консоль ім'я та телефонний номер користувача. У параметри names та phones будуть передані рядки імен та телефонних номерів, розділені комами. Порядковий номер імен та телефонів у рядках вказують на відповідність. Кількість імен та телефонів гарантовано однакова.
 * - Дано два рядки: names і phones, розділені комами.
 * - Перетворити рядки в масиви.
 * - Вивести пари ім’я-телефон у форматі "ім’я - телефон".
 * - Нічого не повертати, лише виводити.
 * - Корисно для обробки парного списку даних.

TODO: Task
function printInfo(names, phones) {
}

printInfo('Jacob,William,Solomon,Artemis', '89001234567,89001112233,890055566377,890055566300'); // Виводить: Jacob - 89001234567, William - 89001112233, Solomon - 890055566377, Artemis - 890055566300

TODO: Answer
function printInfo(names, phones) {
  names = names.split(','); // Розділяємо імена
  phones = phones.split(','); // Розділяємо телефони
  for (let i = 0; i < names.length; i++) {
    console.log(`${names[i]} - ${phones[i]}`); // Виводимо пари
  }
}

printInfo('Jacob,William,Solomon,Artemis', '89001234567,89001112233,890055566377,890055566300'); // Виводить: Jacob - 89001234567, William - 89001112233, Solomon - 890055566377, Artemis - 890055566300
*/
/* //! for (Перевірка паліндрому)
TODO: Перевірити, чи є рядок паліндромом, ігноруючи пробіли та регістр.
 * - Дано рядок, який може містити пробіли та літери в різному регістрі.
 * - Видалити пробіли та привести рядок до нижнього регістру.
 * - Порівняти рядок із його зворотною версією.
 * - Повернути true, якщо рядок є паліндромом, і false, якщо ні.
 * - Корисно для перевірки симетричності тексту.

TODO: Task
const str = 'Я несу гусеня';
function isPalindrom(string) {
}

console.log(isPalindrom(str)); // Виводить: true

TODO: Answer - Var 1 (з циклом від початку)
const str = 'Я несу гусеня';
function isPalindrom(string) {
  const newStr = string.replaceAll(' ', '').toLowerCase();
  let reversedString = '';
  for (let i = 0; i < newStr.length; i++) {
    reversedString += newStr[newStr.length - 1 - i];
  }
  console.log(newStr);         // янесугусеня
  console.log(reversedString); // янесугусеня
  return newStr === reversedString;
}

console.log(isPalindrom(str)); // Виводить: true

TODO: Answer - Var 2 (з циклом від кінця)
const str = 'Я несу гусеня';
function isPalindrom(string) {
  const newStr = string.replaceAll(' ', '').toLowerCase();
  let reversedString = '';
  for (let i = newStr.length - 1; i >= 0; i--) {
    reversedString += newStr[i];
  }
  console.log(newStr);         // янесугусеня
  console.log(reversedString); // янесугусеня
  return newStr === reversedString;
}

console.log(isPalindrom(str)); // Виводить: true

TODO: Answer - Var 3 (з перевіркою половини)
const str = 'Я несу гусеня';
function isPalindrom(string) {
  const newStr = string.replaceAll(' ', '').toLowerCase();
  for (let i = 0; i < Math.floor(newStr.length / 2); i++) {
    if (newStr[i] !== newStr[newStr.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrom(str)); // Виводить: true
*/
//#endregion

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
