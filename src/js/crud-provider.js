const urlCRUD = 'https://reqres.in/api/users';

const getUser = async id => {
  const res = await fetch(`${urlCRUD}/${id}`);
  const { data } = await res.json();

  return data;
};

export { getUser };
