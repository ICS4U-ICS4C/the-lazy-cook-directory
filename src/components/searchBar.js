/* creating our search bar */
import React, {Component, useEffect, useState} from 'react';
import { render } from 'react-dom';
import {View, TextInput, StyleSheet, StatusBar, Text, Button, ScrollView} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { color } from 'react-native-reanimated';

// import { TouchableOpacity } from 'react-native-gesture-handler';

//const SearchBar = () => {
  //  return(
    //    <View style={styles.container}>
    //        <TextInput placeholder = "Type in your Ingredients here... "/> 
     //   </View>
   // );
//}

// jasmine suggests to delete the following code
// as it would be seeming disorganized for our purpose

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
      <View>
        <TextInput stlye = {styles.textInput} placeholder = "Type in your Ingredients here... "/>
        <View style ={styles.row}>
            <View style={styles.buttons}>
              <Button title='Add' onPress={() => this.addTextInput(this.state.textInput.length)} />
              </View>
              
          <View style={styles.buttons}>
            <Button title='Remove' onPress={() => this.removeTextInput()} />
            </View>
          
          {this.state.textInput.map((value) => {
            return value
          })}
          <View style={styles.buttons}>
            <Button title='Enter' onPress={() => this.getValues()}/>
            </View>
          </View>
        </View>
    )
  }
}


//styling components
const styles = StyleSheet.create({

    textInput: {
      height: '100%',
      borderColor: '#dbdbdb',
      backgroundColor: '#f2f2f2',
      borderWidth: 10,
      padding: 10
    },
    row:{
      flexDirection: 'row',
      justifyContent: 'center'
      },
    buttons:{
      padding: 5,
      margin: 5,
    }
});

