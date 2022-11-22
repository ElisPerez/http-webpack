const jokeUrl = 'https://api.chucknorris.io/jokes/random';
const urlUsers = 'https://reqres.in/api/users?page=2';

// Cloudinary - Observación: No se están usando Variables de entorno en realidad, reemplazar process.env.NOMBRE_DE_LA_VARIABLE por el string correspondiente proporsionado por Cloudinary. 👀 (Guiarse del .env.example)
const CLOUDINARY_UPLOAD_PRESET = process.env.CLOUDINARY_UPLOAD_PRESET;
const CLOUDINARY_URL = process.env.CLOUDINARY_URL;

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
  const { data: users } = await resp.json();

  return users;
};

// fileToUpload: File.
const uploadImage = async fileToUpload => {
  const formData = new FormData();
  formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
  formData.append('file', fileToUpload);

  try {
    const res = await fetch(CLOUDINARY_URL, {
      method: 'POST',
      body: formData,
    });

    if (res.ok) {
      const cloudinaryResponse = await res.json();
      // console.log(cloudinaryResponse);

      return cloudinaryResponse.secure_url;
    } else {
      throw await res.json();
    }
  } catch (error) {
    console.log('An error here', error);
    throw error;
  }
};

export { getJoke, getUsers, uploadImage };
