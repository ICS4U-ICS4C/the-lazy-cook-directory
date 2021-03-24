import React from 'react';
import {View, TextInput, StyleSheet, StatusBar} from 'react-native';

const SearchBar = () => {
    return(
        <View style={styles.container}>
            <TextInput placeholder = "Insert Ingredients here... "/>
        </View>
    )

}


//importing firebase
//import * as firebase from 'firebase';

//initializing firebase
// For Firebase JS SDK v7.20.0 and later
// when we have firebase project, put info here
//const firebaseConfig = {
  //apiKey: "",
  //authDomain: "",
  //projectId: "",
  //storageBucket: "",
 // messagingSenderId: "",
 // appId: "",
//};

//firebase.initializeApp(firebaseConfig);

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 45,
        backgroundColor: '#f5f5f5',
        borderRadius: 18,
        marginTop: StatusBar.currentHeight,
        paddingHorizontal: 20

    },
    searchInput:{
        width: '100%',
        height: '100%',
        padding: 2,
        fontSize: 25
    }
})

export default SearchBar;