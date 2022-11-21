const jokeUrl = 'https://api.chucknorris.io/jokes/random';
const urlUsers = 'https://reqres.in/api/users?page=2';

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

const getUsers = async () => {
  const resp = await fetch(urlUsers);
  const { data:users } = await resp.json();

  return users;
};

export { getJoke, getUsers };
