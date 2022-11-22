# HTTP with Webpack

Aprendiendo HTTP en Javascript con Webpack

## Elis Antonio Perez

Follow me [Instagram](https://instagram.com/elisperezmusic).

### `Web developer`

**Note: God is good!**

# Instructions:

Install Node Modules:

```bash
npm i
```

Run Build:

```bash
npm run build
```

Run Development Mode:

```bash
npm start
```

# Upload files to Cloudirary:

- Link: [https://cloudinary.com/documentation/image_upload_api_reference](https://cloudinary.com/documentation/image_upload_api_reference)

```bash
var formdata = new FormData();
formdata.append("upload_preset", "<CLOUDINARY_UPLOAD_PRESET>");
formdata.append("file", fileInput.files[0], "Elis-Family.jpg");

var requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

fetch("https://api.cloudinary.com/v1_1/<CLOUDINARY_CLOUD_NAME>/upload", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
