const jokeUrl = 'https://api.chucknorris.io/jokes/random';

const getJoke = async () => {
  try {
    const res = await fetch(jokeUrl);
    if (!res.ok) throw 'No se pudo realizar la petición';

    return await res.json();
  } catch (error) {
    throw error;
  }
};

export { getJoke };
