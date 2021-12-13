import { initializeApp, applicationDefault } from 'firebase-admin/app';

const app = initializeApp({
  credential: applicationDefault(),
  databaseURL: 'https://db_name.firebaseio.com'
});

console.log(app);