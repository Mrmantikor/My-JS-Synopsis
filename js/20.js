//#region //? JSON
/* //! JSON (JavaScript Object Notation)
TODO: Формат для зберігання та передачі даних у вигляді тексту, схожий на об’єкти JavaScript.
 * - JSON — це текстовий спосіб записати дані, наприклад, об’єкти чи масиви.
 * - Ключі — це завжди рядки, обов’язково в подвійних лапках ("").
 * - Значення рядків — також у подвійних лапках ("").
 * - Числа — цілі чи десяткові (з крапкою), можуть бути негативними.
 * - Булеві значення (true, false) і null записуються як у JavaScript.
 * - Немає коми після останньої властивості об’єкта чи елемента масиву.
 * - Не підтримує undefined чи функції, лише дані (числа, рядки, об’єкти, масиви, null).

let jsonExample = {
  "name": "Josh",
  "weight": 175,
  "age": 30,
  "eyecolor": "brown",
  "isHappy": true,
  "cars": ["Chevy", "Honda"],
  "favoriteBook": {
    "title": "The Last Kingdom",
    "author": "Bernard Cornwell",
    "rating": 8.38
  }
};
*/
/* //! JSON.stringify() (Перетворення даних у рядок JSON)
TODO: Бере JavaScript-дані (об’єкт, масив тощо) і перетворює їх у текстовий рядок JSON.
 * - Перетворює об’єкти, масиви, числа, рядки, булеві значення та null у рядок.
 * - Ключі та рядкові значення завжди записуються в подвійних лапках ("").
 * - Функції та undefined пропускаються або замінюються на null.
 * - Повертає рядок, який можна зберегти чи передати.

let person = {
  name: 'Josh',
  age: 30,
  isHappy: true
};
console.log(JSON.stringify(person)); // Виводить: '{"name":"Josh","age":30,"isHappy":true}'

let fruits = ['apple', 'banana', 'orange'];
console.log(JSON.stringify(fruits)); // Виводить: '["apple","banana","orange"]'

let mixed = { score: 10, note: null, skip: undefined };
console.log(JSON.stringify(mixed)); // Виводить: '{"score":10,"note":null}' (undefined пропущено)
*/
/* //! JSON.parse (Перетворення рядка JSON у дані)
TODO: Бере рядок JSON і перетворює його назад у JavaScript-об’єкт чи масив.
 * - Розбирає рядок JSON і повертає об’єкт, масив чи прості дані (числа, рядки тощо).
 * - Рядок має бути правильним JSON (з лапками, без помилок), інакше буде помилка.
 * - Не працює з функціями чи undefined, бо їх немає в JSON.

let jsonString = '{"name":"Josh","age":30,"isHappy":true}';
let parsedPerson = JSON.parse(jsonString);
console.log(parsedPerson.name); // Виводить: 'Josh'
console.log(parsedPerson.age); // Виводить: 30

let jsonArray = '["apple","banana","orange"]';
let parsedArray = JSON.parse(jsonArray);
console.log(parsedArray[1]); // Виводить: 'banana'

let jsonNull = '{"score":null,"level":5}';
let parsedNull = JSON.parse(jsonNull);
console.log(parsedNull.score); // Виводить: null
*/
/* //! try...catch (Обробка помилок)
TODO: Виконує код і ловить помилки, якщо вони виникають.
 * - try { код } — місце, де пробуємо виконати код.
 * - catch (error) { код } — місце, де обробляємо помилку, якщо вона сталася.
 * - error — змінна, яка містить інформацію про помилку (наприклад, error.message).
 * - Допомагає уникнути зупинки програми через помилки.
.//? Синтаксис:
try {
  /Код, який може викликати помилку/
} catch (error) {
  /Код для обробки помилки/
}

.//? Приклад:
try {
  let result = someVariable + 10; // someVariable не визначена
  console.log(result);
} catch (error) {
  console.log('Помилка:', error.message); // Виводить: 'Помилка: someVariable is not defined'
}
*/
/* //! localStorage (Локальне сховище браузера)
TODO: Місце в браузері для зберігання даних, які залишаються навіть після закриття вкладки.
 * - localStorage — це об’єкт у JavaScript, який дозволяє зберігати дані у вигляді пар "ключ-значення".
 * - Дані зберігаються як рядки і доступні на тому ж сайті (доменi).
 * - Не зникають після перезавантаження сторінки чи закриття браузера, доки їх не видалити.
 * - Максимальний розмір — близько 5-10 МБ (залежить від браузера).

TODO: Збереження даних
localStorage.setItem('name', 'Josh');
console.log(localStorage.getItem('name')); // Виводить: 'Josh'

TODO: Збереження числа (перетворюється в рядок)
localStorage.setItem('age', 25);
console.log(localStorage.getItem('age')); // Виводить: '25'

TODO: Збереження об’єкта через JSON
let user = { name: 'Josh', age: 25 };
localStorage.setItem('user', JSON.stringify(user));
console.log(localStorage.getItem('user')); // Виводить: '{"name":"Josh","age":25}'

TODO: Перевірка, чи є ключ
console.log(localStorage.getItem('score')); // Виводить: null (ключа немає)
*/
/* //! localStorage.setItem(key, value) (Збереження даних у локальному сховищі)
TODO: Зберігає дані (ключ і значення) у локальному сховищі браузера.
 * - setItem(key, value) — метод, який записує пару "ключ-значення".
 * - key — це рядок, назва, під якою зберігається значення.
 * - value — це дані (перетворюються в рядок), які ти хочеш зберегти.
 * - Дані залишаються, доки їх не видалити вручну.

localStorage.setItem('username', 'Josh');
console.log(localStorage.getItem('username')); // Виводить: 'Josh'

localStorage.setItem('age', '30');
console.log(localStorage.getItem('age')); // Виводить: '30'

localStorage.setItem('isHappy', 'true');
console.log(localStorage.getItem('isHappy')); // Виводить: 'true'

TODO: Збереження об’єкта (спочатку перетворюємо в JSON)
let person = { name: 'Josh', age: 30 };
localStorage.setItem('person', JSON.stringify(person));
console.log(localStorage.getItem('person')); // Виводить: '{"name":"Josh","age":30}'
*/
/* //! localStorage.getItem(key) (Отримання даних із локального сховища)
TODO: Дістає значення за вказаним ключем із локального сховища браузера.
 * - getItem(key) — метод, який повертає значення, пов’язане з ключем.
 * - key — це рядок, назва, під якою збережено дані.
 * - Якщо ключа немає, повертає null.
 * - Значення завжди повертається як рядок (або null).

localStorage.setItem('username', 'Josh');
console.log(localStorage.getItem('username')); // Виводить: 'Josh'

localStorage.setItem('age', '30');
console.log(localStorage.getItem('age')); // Виводить: '30'

localStorage.setItem('isHappy', 'true');
console.log(localStorage.getItem('isHappy')); // Виводить: 'true'

TODO: Отримання неіснуючого ключа
console.log(localStorage.getItem('score')); // Виводить: null

TODO: Отримання об’єкта (потрібно розпарсити JSON)
localStorage.setItem('person', JSON.stringify({ name: 'Josh', age: 30 }));
let personData = localStorage.getItem('person');
console.log(personData); // Виводить: '{"name":"Josh","age":30}'
console.log(JSON.parse(personData).name); // Виводить: 'Josh'
*/
/* //! localStorage.removeItem(key) (Видалення даних із локального сховища)
TODO: Видаляє пару "ключ-значення" із локального сховища за вказаним ключем.
 * - removeItem(key) — метод, який прибирає дані, пов’язані з ключем.
 * - key — це рядок, назва, під якою збережено дані.
 * - Якщо ключа немає, нічого не відбувається (без помилок).
 * - Не повертає значення, лише видаляє.

localStorage.setItem('username', 'Josh');
console.log(localStorage.getItem('username')); // Виводить: 'Josh'
localStorage.removeItem('username');
console.log(localStorage.getItem('username')); // Виводить: null

localStorage.setItem('age', '30');
localStorage.setItem('score', '100');
localStorage.removeItem('age');
console.log(localStorage.getItem('age')); // Виводить: null
console.log(localStorage.getItem('score')); // Виводить: '100'

TODO: Видалення неіснуючого ключа
localStorage.removeItem('level'); // Нічого не станеться
console.log(localStorage.getItem('level')); // Виводить: null
*/
/* //! sessionStorage (Сесійне сховище браузера)
TODO: Місце в браузері для зберігання даних, які доступні лише під час однієї сесії (поки вкладка відкрита).
 * - sessionStorage — це об’єкт у JavaScript, який зберігає дані у вигляді пар "ключ-значення".
 * - Дані зберігаються як рядки і доступні лише на тому ж сайті (доменi).
 * - Зникають після закриття вкладки чи браузера.
 * - Максимальний розмір — близько 5-10 МБ (залежить від браузера).

TODO: Збереження даних
sessionStorage.setItem('name', 'Josh');
console.log(sessionStorage.getItem('name')); // Виводить: 'Josh'

TODO: Збереження числа (перетворюється в рядок)
sessionStorage.setItem('age', 25);
console.log(sessionStorage.getItem('age')); // Виводить: '25'

TODO: Збереження об’єкта через JSON
let user = { name: 'Josh', age: 25 };
sessionStorage.setItem('user', JSON.stringify(user));
console.log(sessionStorage.getItem('user')); // Виводить: '{"name":"Josh","age":25}'

TODO: Видалення даних
sessionStorage.removeItem('name');
console.log(sessionStorage.getItem('name')); // Виводить: null
*/
