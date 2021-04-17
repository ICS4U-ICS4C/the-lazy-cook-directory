import React from 'react';
import {StyleSheet,
    View,
    Text,
    Image,
    FlatList} from 'react-native';
// import { firebase, firestore, storage } from "./firebase";
// import * as firestore from 'firebase';

// /**
//  * bltFav.js, poutineFav.js and pastaFav.js are the pages
//  * for the creator's fav section in the home page
//  * 
//  * se we're designing the recipe page for them
//  * 
//  * by coding this seperatley, we're experimenting how we could design
//  * the recipe pages with the knowledge we have
//  */

// // get information from collection, then do this
//     //(exectute the function in () when data retrieved)
//         //retriving a snapshot of the database back
// db.collection('Recipes').get().then((snapshot) => {
//     console.log(snapshot.docs);

// })

// const firestore = firebase.firestore(); //calling firestore
// const fbCollection = firestore.collection('Recipes').doc("42"); 
// //calling firebase collection Recipe, and then calling docuement
//     //42, where the BLT Sandwich recipe is stored

export default function sResults() {
//     // const firestore = firebase.firestore();
//     // const fbCollection = firestore.collection('Recipes').doc('42');
//     //     fbCollection.get().then((doc) => {
//     //         if(doc.exists) {
//     //             console.log("document data", doc.data());
//     //         }
//     //         else{
//     //             console.log("document doesnt exist);
//     //         }
//     //     })
    return(

            <View>
                <Text> Hai </Text>
            </View>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Title:{
    fontSize: 35,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
    borderColor: '#b4d12e',
    borderWidth: 8,
    borderRadius: 20,
    backgroundColor: '#bfde31',
  },
  SubText:{
    fontSize: 20,
    color: '#e5e059',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
