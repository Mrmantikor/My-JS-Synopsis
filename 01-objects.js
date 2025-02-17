/*
 * Об'єкти
 *
 * - Створення об'єкта
 * - Доступ до властивостей через крапку
 * - Доступ до властивостей через квадратні дужки
 * - Вкладені властивості
 * - Доступ до вкладених властивостей
 * - Зміна значення властивостей
 * - Додавання властивостей
 */

const filmHarryPotter = {
  title: 'Harry Potter',
  description: 'some description',
  rating: 9,
  actors: ['Nannie Lambert', 'William Davis', 'Willie Joseph'],
  translations: {
    en: 'https://films.com/harry-potter/en',
    uk: 'https://films.com/harry-potter/uk',
  },
};

console.log(filmHarryPotter);

filmHarryPotter.rating = 10;
filmHarryPotter.actors.push('Stella Nelson');

filmHarryPotter.isAdult = false;

console.log(filmHarryPotter);

// console.log(filmHarryPotter.translations.uk);
// console.log(filmHarryPotter.translations.en);

// console.log(filmHarryPotter.title);
// console.log(filmHarryPotter.rating);
// console.log(filmHarryPotter.someProp);

// console.log(filmHarryPotter['title']);
// console.log(filmHarryPotter['rating']);
// console.log(filmHarryPotter['someProp']);

// const key = 'description';

// console.log(filmHarryPotter.key);
// console.log(filmHarryPotter[key]);
