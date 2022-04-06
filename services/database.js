const { initializeApp } = require('firebase-admin/app');
const { getFirestore, collection, getDocs } = require('firebase/firestore');
require('dotenv').config();

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "userslist-76c95.firebaseapp.com",
  databaseURL: "https://userslist-76c95-default-rtdb.firebaseio.com",
  projectId: "userslist-76c95",
  storageBucket: "userslist-76c95.appspot.com",
  messagingSenderId: "20657560160",
  appId: "1:20657560160:web:f7916b3063697777d48105",
  measurementId: "G-8VZZZ7DW0P"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getUsers(db){
  const usersCol = collection(db,'users');
  const usersSnapshot = await getDocs(usersCol);
  const usersList = usersSnapshot.docs.map(doc=>doc.data());
  return usersList;
}

const usersDbList=getUsers(db);

module.exports = usersDbList;