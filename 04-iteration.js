/*
 * Перебір об'єкта
 *
 * - Цикл for...in
 * - Метод Object.keys
 * - Метод Object.values
 */

// TODO: Порахуйте загальну кількість відгуків.

//~ Через цикл for...in
// const feedbacks = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// console.log('feedbacks:', feedbacks);

// let totalFeedbacks = 0;

// for (const key in feedbacks) {
//   totalFeedbacks += feedbacks[key];
// }

// console.log('totalFeedbacks:', totalFeedbacks);

//~ Через метод Object.keys()
// const feedbacks = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// console.log('feedbacks:', feedbacks);

// const feedbacksKeys = Object.keys(feedbacks);

// console.log('feedbacksKeys:', feedbacksKeys);

// let totalFeedbacks = 0;

// for (const key of feedbacksKeys) {
//   totalFeedbacks += feedbacks[key];
// }

// console.log('totalFeedbacks:', totalFeedbacks);

//~ Через метод Object.values()
// const feedbacks = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// console.log('feedbacks:', feedbacks);

// const feedbacksValues = Object.values(feedbacks);

// console.log('feedbacksValues:', feedbacksValues);

// let totalFeedbacks = 0;

// for (const value of feedbacksValues) {
//   totalFeedbacks += value;
// }

// console.log('totalFeedbacks:', totalFeedbacks);
