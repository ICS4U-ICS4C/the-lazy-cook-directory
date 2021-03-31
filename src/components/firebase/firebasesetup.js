import * as firebase from 'firebase';
import "firebase/database";
//all the firebase services
//import "firebase/functions";
//import "firebase/storage";
//import "firebase/auth";
//import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAgtQGskekbiYPKRxrm2BMYHMZhgv96-kc",
    authDomain: "lazycookdirectory.firebaseapp.com",
    databaseURL: "https://lazycookdirectory-default-rtdb.firebaseio.com",
    projectId: "lazycookdirectory",
    storageBucket: "lazycookdirectory.appspot.com",
    messagingSenderId: "468616258749",
    appId: "1:468616258749:web:05ba278d87a9a4db9403d4",
    measurementId: "G-YSP97ZTR45"
  };
  firebase.initializeApp(firebaseConfig);

  //database connection
  const dbh = firebase.firestore();

  export default dbh;




/*^^ we need that to intialize firebase
 in order to use database */