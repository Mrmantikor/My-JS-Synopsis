// #region Преобразование строки в число
const userInput = Number(prompt('Enter your username'));
console.log(userInput);

let elementWidth = '50px';
elementWidth = Number.parseInt(elementWidth);
console.log('elementWidth:', elementWidth);
// #endregion

// #region Function
function greatUser(firstName) {
  console.log(firstName);

  alert(`Welkome ${firstName}`);
}
greatUser('Diana');
greatUser('Bohdan');
//
function Suma(a, b) {
  return a + b;
}
const result = Suma(1, 2);
console.log(result);
//
function makeMessage(name, price) {
  return `Message if ${name} and ${price}`;
}
console.log('Suzanna', '3000$');
//
function num(n) {
  return n % 2 === 0;
}
console.log(num(99));
//
const userPassword = 'admin';
const password = prompt('Enter your password');
function checkPassword(pass) {
  return pass === userPassword;
}
console.log(checkPassword(password)); // true or false
// #endregion

// #region Return >=
function checkAge(god) {
  if (god >= 18) {
    return true; // Возвращает логическое значение true
  } else {
    return false; // Можно вернуть сообщение или false
  }
}
console.log(checkAge(20)); // Вывод: true
console.log(checkAge(15)); // Вывод: false
// #endregion
// #region if, else if, else + виводити в браузер вікно
const grade = Number(prompt('Enter the number'));

function mes(grade) {
  if (grade >= 90) {
    return true;
  } else if (grade >= 85) {
    return `Maybe`;
  } else {
    // можна писати без else, якщо використовуємо return
    return false;
  }
}
console.log(mes(grade));
// Number(prompt('Enter the number')); це дає змогу виводити вікно через браузер в яке можна вписувати властивості

// #endregion

const message = 'JavaScript is awesome';
console.log(message.length);

const message1 = 'JavaScript is awesome';
console.log(message1.toUpperCase());

const fullName = 'Jacob Mercer';
console.log(fullName.slice(0, 4));
console.log(fullName.slice(0, 9));
console.log(fullName.slice(0, fullName.length));

const mes = 'Welcome to Bahamas!';
console.log(mes.toLowerCase());
console.log(mes);
console.log(mes.toUpperCase());

const brandName = 'samsung';
const userInput = 'saMsUng';
const lowercaseInput = userInput.toLowerCase();

console.log(brandName);
console.log(userInput);
console.log(userInput === brandName);
console.log(lowercaseInput);
console.log(lowercaseInput === brandName);

// #region
function normalizeInput(input, to) {
  if (to === 'upper') {
    return input.toUpperCase();
  } else {
    return input.toLowerCase();
  }
}

console.log(normalizeInput("This ISN'T SpaM", 'lower')); // "this isn't spam"
console.log(normalizeInput("This ISN'T SpaM", 'upper')); // "THIS ISN'T SPAM"
console.log(normalizeInput('Big SALE', 'lower')); // "big sale"
console.log(normalizeInput('Big SALE', 'upper')); // "BIG SALE"
console.log(normalizeInput('Stay Awhile and Listen', 'lower')); // "stay awhile and listen"
console.log(normalizeInput('Stay Awhile and Listen', 'upper')); // "STAY AWHILE AND LISTEN"
// #endregion

// #region
const username = 'Jacob Mercer';
console.log(username.includes(`Jacob`));
console.log(username.includes(`John`));
console.log(username.includes(`Mercer`));
console.log(username.includes(`Doe`));
console.log(username.includes(`Jacob`));

// #endregion

// #region
function checkForName(fullName, firstName) {
  const lowerFullName = fullName.toLowerCase();
  const lowerFirstName = firstName.toLowerCase();
  return lowerFullName.includes(lowerFirstName);
}

console.log(checkForName('Jason Neis', 'Jason')); // true
console.log(checkForName('Jason Neis', 'jAsOn')); // true
console.log(checkForName('Jason Neis', 'Jacob')); // false
console.log(checkForName('Caty Stars', 'Caty')); // true
console.log(checkForName('Caty Stars', 'cAtY')); // true
console.log(checkForName('Caty Stars', 'Andromeda')); // false
// #endregion

// #region Цикл While

// Case 1
let count = 0;

while (count <= 10) {
  console.log(`Count: ${count}`);
  count += 1;
}

// Case 2
let clientCounetr = 18;
const maxClients = 25;

while (clientCounetr < maxClients) {
  console.log(clientCounetr);
  clientCounetr += 1;
}

// Case 3
function calculateTotal(number) {
  let sum = 0;
  let c = 1;
  while (c <= number) {
    sum += c;
    c++;
  }
  return sum;
}

console.log(calculateTotal(3));

// Разбор для calculateTotal(3):
// Инициализация:
// number = 3
// sum = 0
// i = 1
// Первый шаг цикла (i = 1):
// Условие i <= number (1 ≤ 3) — истинно.
// sum = sum + i = 0 + 1 = 1.
// Увеличиваем i на 1: i = 2.
// Второй шаг цикла (i = 2):
// Условие i <= number (2 ≤ 3) — истинно.
// sum = sum + i = 1 + 2 = 3.
// Увеличиваем i на 1: i = 3.
// Третий шаг цикла (i = 3):
// Условие i <= number (3 ≤ 3) — истинно.
// sum = sum + i = 3 + 3 = 6.
// Увеличиваем i на 1: i = 4.
// Четвёртый шаг цикла (i = 4):
// Условие i <= number (4 ≤ 3) — ложно.
// Цикл завершается.
// Возврат результата:
// Функция возвращает sum, которое равно 6.
// #endregion
