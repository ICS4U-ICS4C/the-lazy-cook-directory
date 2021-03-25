/* creating our search bar */
import React, {Component, useEffect, useState} from 'react';
import {View, TextInput, StyleSheet, StatusBar, Text, Button, ScrollView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SearchBar = () => {
    return(
        <View style={styles.container}>
            <TextInput placeholder = "Type in your Ingredients here... "/> 
        </View>
    );
}

class MyClass extends Component {
    constructor(props){
        super(props);
        this.state ={
            textInput : [],
            inputData : []
        }
    }
}
// function for adding textinput when clicking a button
addTextInput = (index) => {
    let textInput = this.state.textInput;
    textInput.push(<TextInput style={styles.textInput}
      onChangeText={(text) => this.addValues(text, index)} />);
    this.setState({ textInput });
  }

//function for removing text input when clicking a button
removeTextInput =() => {
    let TextInput = this.state.textInput;
    let inputData = this.state.inputData;
    textInput.pop();
    inputData.pop();
    this.setState({textInput, inputData});
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
    },
})

export default SearchBar;