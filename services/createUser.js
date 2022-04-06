var admin = require('firebase-admin');
var serviceAccount = require('../firebase.json');
//var faker = require('faker');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const data = {
    id: 2,
    email : 'cmembreno1989@gmail.com',
    first_name: 'Carlos',
    last_name: 'Membreno',
    is_active: true
};

db.collection('users').doc(data.id.toString()).set(data);

/*
//create 10 records
for (let i=0; i<10;i++){
  db.collection('users').doc(i.toString()).set({
    id: i,
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    email: 'test@gmail.com',
    is_active: true
  })
}
*/