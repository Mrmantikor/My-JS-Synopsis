/* //! for...in (Перебір властивостей об’єкта)
TODO: Конструкція, яка дозволяє перебрати всі перелічувані властивості об’єкта, включаючи успадковані.
 * - Що це таке: for...in — цикл, який ітерується по ключах перелічуваних властивостей об’єкта.
 * - Як працює: Проходить по всіх власних і успадкованих перелічуваних ключах у довільному порядку.
 * - Основні особливості: Перебирає лише перелічувані властивості; не включає ключі-символи.
 * - Корисно для: Аналізу структури об’єкта, роботи з ключами чи значеннями, але з обережністю через успадкування.

TODO: Синтаксис:
  Базовий синтаксис циклу
for (const key in obj) {
    console.log(key); // Виводить ключ
    console.log(obj[key]); // Виводить значення за ключем
}
  obj — об’єкт, чиї властивості перебираються

TODO: Приклад 1. Базовий об’єкт
const user = { name: "Alice", age: 25, city: "Kyiv" };
  Перебираємо ключі об’єкта
for (const key in user) {
    console.log(key); // Виводить: "name", "age", "city"
    console.log(user[key]); // Виводить: "Alice", 25, "Kyiv"
}

TODO: Приклад 2. Успадковані властивості
const parent = { country: "Ukraine" };
const child = Object.create(parent);
child.name = "Bob";
  Перебираємо ключі, включаючи успадковані
for (const key in child) {
    console.log(key); // Виводить: "name", "country"
    console.log(child[key]); // Виводить: "Bob", "Ukraine"
}

TODO: Приклад 3. Об’єкт із неперелічуваною властивістю
const obj = { a: 1 };
Object.defineProperty(obj, "b", { value: 2, enumerable: false });
  Перебираємо лише перелічувані властивості
for (const key in obj) {
    console.log(key); // Виводить: "a"
    console.log(obj[key]); // Виводить: 1
}
*/
/* //! Object.keys() (Отримання ключів об’єкта)
TODO: Метод, який повертає масив ключів перелічуваних властивостей об’єкта; повертає порожній масив [], якщо об’єкт не має властивостей.
 * - Що це таке: Object.keys() створює масив із ключами власних перелічуваних властивостей об’єкта.
 * - Як працює: Приймає об’єкт і повертає масив рядків, що представляють ключі, у порядку їх додавання (для числових — за зростанням).
 * - Основні особливості: Включає лише власні перелічувані властивості; ігнорує успадковані чи неперелічувані.
 * - Корисно для: Отримання списку ключів для ітерації, аналізу структури об’єкта чи доступу до значень.

TODO: Синтаксис:
  Базовий виклик методу
const keys = Object.keys(obj); // Повертає масив ключів перелічуваних властивостей
  obj — об’єкт, з якого витягуються ключі

TODO: Приклад 1. Базовий об’єкт
const user = { name: "Alice", age: 25, city: "Kyiv" };
  Отримуємо масив ключів
console.log(Object.keys(user)); // Виводить: ["name", "age", "city"] — ключі об’єкта

TODO: Приклад 2. Об’єкт із числовими ключами
const data = { 1: "one", 2: "two", 0: "zero" };
  Повертає ключі в порядку зростання для числових значень
console.log(Object.keys(data)); // Виводить: ["0", "1", "2"]

TODO: Приклад 3. Порожній об’єкт
const empty = {};
  Повертає порожній масив, якщо немає перелічуваних властивостей
console.log(Object.keys(empty)); // Виводить: []
*/
/* //! Object.values() (Отримання значень об’єкта)
TODO: Метод, який повертає масив значень перелічуваних властивостей об’єкта; повертає порожній масив [], якщо об’єкт не має властивостей.
 * - Що це таке: Object.values() створює масив із значеннями властивостей об’єкта; повертає порожній масив [], якщо об’єкт не має властивостей.
 * - Як працює: Приймає об’єкт і повертає масив значень у порядку додавання ключів (для рядкових ключів — порядок перелічення).
 * - Основні особливості: Перебирає лише власні перелічувані властивості; не включає успадковані чи неперелічувані властивості.
 * - Корисно для: Роботи з об’єктами, коли потрібен список значень без ключів, наприклад, для аналізу вмісту чи ітерації.

TODO: Синтаксис:
  Базовий виклик методу
const values = Object.values(obj); // Повертає масив значень перелічуваних властивостей
  obj — об’єкт, з якого витягуються значення

TODO: Приклад 1. Базовий об’єкт
const user = { name: "Alice", age: 25, city: "Kyiv" };
  Отримуємо масив значень
console.log(Object.values(user)); // Виводить: ["Alice", 25, "Kyiv"] — значення властивостей

TODO: Приклад 2. Об’єкт із числовими ключами
const data = { 1: "one", 2: "two", 0: "zero" };
  Повертає значення в порядку числових ключів (0, 1, 2)
console.log(Object.values(data)); // Виводить: ["zero", "one", "two"]

TODO: Приклад 3. Порожній об’єкт
const empty = {};
  Повертає порожній масив, якщо немає перелічуваних властивостей
console.log(Object.values(empty)); // Виводить: []
*/
