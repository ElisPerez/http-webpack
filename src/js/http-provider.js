const jokeUrl = 'https://api.chucknorris.io/jokes/random';

const getJoke = async () => {
  try {
    const res = await fetch(jokeUrl);
    if (!res.ok) throw 'No se pudo realizar la petición';

    const { icon_url, id, value } = await res.json();

    return { icon_url, id, value };
  } catch (error) {
    throw error;
  }
};

export { getJoke };
