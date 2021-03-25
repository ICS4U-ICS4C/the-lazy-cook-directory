/* creating our search bar */
import React, {Component} from 'react';
import {View, TextInput, StyleSheet, StatusBar, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SearchBar = () => {
    return(
        <View style={styles.container}>
            <TextInput placeholder = "Type in your Ingredients here... "/> 
            <TouchableOpacity style = {styles.addBtn} 
             onPress={() => {this.addCustomField()}}>

            </TouchableOpacity>
        </View>
    );
    

}


// import * as firebase from 'firebase';

// //initializing firebase
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyAgtQGskekbiYPKRxrm2BMYHMZhgv96-kc",
//     authDomain: "lazycookdirectory.firebaseapp.com",
//     databaseURL: "https://lazycookdirectory-default-rtdb.firebaseio.com",
//     projectId: "lazycookdirectory",
//     storageBucket: "lazycookdirectory.appspot.com",
//     messagingSenderId: "468616258749",
//     appId: "1:468616258749:web:05ba278d87a9a4db9403d4",
//     measurementId: "G-YSP97ZTR45"
//   };
//   firebase.initializeApp(firebaseConfig);

//styling components
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