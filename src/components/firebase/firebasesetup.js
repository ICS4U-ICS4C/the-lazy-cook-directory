import * as firebase from 'firebase';
import 'firebase/database';
import 'firebase/firestore';
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
//initializing app only if it hasnt already been initialized
if(firebase.apps.length == 0) {
  firebase.initializeApp(firebaseConfig);
}
/*^^ we need that to intialize firebase
 in order to use database */
export default firebaseConfig;
 //https://www.kaggle.com/kaggle/recipe-ingredients-dataset -> our dataset