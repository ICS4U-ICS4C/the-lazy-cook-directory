/* creating our search bar */
import React, {Component, useEffect, useState} from 'react';
import { render } from 'react-dom';
import {View, TextInput, StyleSheet, StatusBar, Text, Button, ScrollView} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 

// import { TouchableOpacity } from 'react-native-gesture-handler';

//const SearchBar = () => {
  //  return(
    //    <View style={styles.container}>
    //        <TextInput placeholder = "Type in your Ingredients here... "/> 
     //   </View>
   // );
//}

export default class SearchBar extends Component {

  constructor(props){
    super(props);
    this.state = {
      textInput : [],
      inputData : []
    }
  }

  //function to add TextInput when clicking the add button
  addTextInput = (index) => {
    let textInput = this.state.textInput;
    textInput.push(<TextInput style={styles.textInput}
      placeholder = "Type in your Ingredients here... "
      onChangeText={(text) => this.addValues(text, index)} />);
    this.setState({ textInput });
  }

  //function to remove TextInput when clicking the remove button
  removeTextInput = () => {
    let textInput = this.state.textInput;
    let inputData = this.state.inputData;
    textInput.pop();
    inputData.pop();
    this.setState({ textInput,inputData });
  }

  //function to add text from TextInputs into single array
  addValues = (text, index) => {
    let dataArray = this.state.inputData;
    let checkBool = false;
    if (dataArray.length !== 0){
      dataArray.forEach(element => {
        if (element.index === index ){
          element.text = text;
          checkBool = true;
        }
      });
    }
    if (checkBool){
    this.setState({
      inputData: dataArray
    });
  }
  else {
    dataArray.push({'text':text,'index':index});
    this.setState({
      inputData: dataArray
    });
  }
  }

  //function for getting the values and doing something with it ??
  getValues = () => {
    
  }

 //displaying the buttons and search input
  render(){
    return(
      <View style ={styles.row}>
        <View style= {styles.row}>
        <TextInput placeholder = "Type in your Ingredients here... "/>
          <View style={{margin: 20}}>
            <Button title='Add' onPress={() => this.addTextInput(this.state.textInput.length)} />
        </View>

        <View style={{margin: 20}}>
          <Button title='Remove' onPress={() => this.removeTextInput()} />
        </View>
        </View>
        {this.state.textInput.map((value) => {
          return value
        })}
        <Button title='Enter' onPress={() => this.getValues()}/>
        {/* <FontAwesome5 name="search" size={24} color="black" /> */}
      </View>
    )
  }
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

    textInput: {
      height: 40,
      borderColor: 'black', 
      borderWidth: 1,
      margin: 20
    },
    row:{
      flexDirection: 'row',
      justifyContent: 'center'
      },
});

