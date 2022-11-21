import './css/style.css';

const jokeUrl = 'https://api.chucknorris.io/jokes/random';

/* ¿Qué es la RESPONSE? */
// fetch(jokeUrl).then(response => {
//   console.log(response);
// });

/* La DATA */
// fetch(jokeUrl).then(response => {
//   response.json().then(data => {
//     console.log(data);
//   });
// });

/* Destructuring the DATA */
// fetch(jokeUrl).then(response => {
//   response.json().then(({ id, value }) => {
//     console.log(id);
//     console.log(value);
//   });
// });

/* Eficiente forma de usar el FETCH */
// fetch(jokeUrl)
//   .then(res => res.json())
//   .then(console.log);

/** Destructuring Data */
fetch(jokeUrl)
  .then(res => res.json())
  .then(({ id, value }) => {
    console.log({ id, value });
  });
