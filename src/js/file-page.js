import { uploadImage } from './http-provider';

const body = document.body;
let inputFile, imgPhoto;

const createInputFileHtml = () => {
  const html = `
  <h1 class="mt-5" >Upload Files</h1>
  <hr />
  <label htmlFor="">Select a picture</label>
  <input type="file" accept="image/png, image/jpeg" />
  <br />
  <img id="photo" class="img-thumbnail" src="" />
  `;

  const div = document.createElement('div');
  div.innerHTML = html;
  body.append(div);

  inputFile = document.querySelector('input');
  imgPhoto = document.querySelector('#photo');
};

const events = () => {
  inputFile.addEventListener('change', e => {
    // console.log(e);
    const file = e.target.files[0];
    // console.log(file);

    uploadImage(file).then(url => (imgPhoto.src = url));
  });
};

export const init = () => {
  createInputFileHtml();
  events();
};
