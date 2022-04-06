var admin = require('firebase-admin');
var serviceAccount = require('../firebase.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

db.collection('users').get().then(snapshot=>{
  snapshot.forEach(element => {
    console.log(element.data());
  });
})

/*
//other method
let customerRef=db.collection('users');
customerRef.get().then((querySnapshot)=>{
  querySnapshot.forEach(document=>{
    console.log(document.data());
  })
})
*/

/*
//get the first 5 users ordered by id
db.collection('users').orderBy('id').startAt(0).limit(5).get().then(snapshot=>{
  snapshot.forEach(element=>{
    console.log(element.data().first_name)
  })
})
*/

