import { getJoke } from './http-provider';

const body = document.body;
let btnNext, olList;

const createJokeHtml = () => {
  const html = `
    <h1>Jokes</h1>
    <hr>
    <button class="btn btn-primary">Next Joke</button>
    <ol class="mt-2 list-group">
    </ol>
  `;

  const divJokes = document.createElement('div');
  divJokes.innerHTML = html;

  body.append(divJokes);
};

const events = () => {
  olList = document.querySelector('ol');
  btnNext = document.querySelector('button');

  btnNext.addEventListener('click', async () => {
    btnNext.disabled = true;

    drawJoke(await getJoke());

    btnNext.disabled = false;
  });
};

// joke: {id, value}
const drawJoke = joke => {
  const olItem = document.createElement('li');
  olItem.innerHTML = `<b>${joke.id}</b>: ${joke.value}`;
  olItem.classList.add('list-group-item', 'bg-dark', 'text-white');

  olList.append(olItem);
};

export const init = () => {
  // Es importante el orden de estas funciones.
  createJokeHtml(); // #1
  events(); // #2
};
