const urlCRUD = 'https://reqres.in/api/users';

const getUser = async id => {
  const res = await fetch(`${urlCRUD}/${id}`);
  const { data } = await res.json();

  return data;
};

const createUser = async user => {
  const res = await fetch(urlCRUD, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'aplication/json',
    },
  });

  return await res.json();
};

export { getUser, createUser };
