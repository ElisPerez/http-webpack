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
      'Content-Type': 'application/json',
    },
  });

  return await res.json();
};

const updateUser = async (id, user) => {
  const res = await fetch(`${urlCRUD}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return await res.json();
};

const deleteUser = async id => {
  const res = await fetch(`${urlCRUD}/${id}`, {
    method: 'DELETE',
  });

  return res.ok ? 'Successfully Deleted' : 'Could not delete';
};

export { getUser, createUser, updateUser, deleteUser };
