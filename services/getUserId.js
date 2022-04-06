var admin = require('firebase-admin');
var serviceAccount = require('../firebase.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

db.collection('users').doc('2').get().then(doc=>{
    console.log(doc.data());
})