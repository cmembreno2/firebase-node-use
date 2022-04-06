var admin = require('firebase-admin');
var serviceAccount = require('../firebase.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

db.collection('users').doc('2').delete().then(res=>{
    console.log('User deleted succesffuly')
})