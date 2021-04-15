import * as firebase from 'firebase';
import "firebase/firestore";

// this file is to connect our code to the firestore database
const configuration = {
    apiKey: "AIzaSyAgtQGskekbiYPKRxrm2BMYHMZhgv96-kc",
    authDomain: "lazycookdirectory.firebaseapp.com",
    databaseURL: "https://lazycookdirectory-default-rtdb.firebaseio.com",
    projectId: "lazycookdirectory",
    storageBucket: "lazycookdirectory.appspot.com",
    messagingSenderId: "468616258749",
    appId: "1:468616258749:web:20ec6ce9a815e3dd9403d4",
    measurementId: "G-Q0BJ5NF3WX"
}

const initt = firebase.initializeApp(configuration);

const db = firebase.firestore(initt); // database

//export const theRecipes = db.collection('Recipes');

export {firebase};
