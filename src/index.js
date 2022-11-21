import './css/style.css';
import * as CRUD from './js/crud-provider';

CRUD.getUser(1).then(console.log);

CRUD.createUser({
  name: 'Elis',
  job: 'Engineer',
}).then(console.log);
