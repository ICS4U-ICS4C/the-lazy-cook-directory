import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firestore from '@react-native-firebase/firestore';

class FbTester extends Component{

  state = {
    theRecipe:{
      name:" "
    }
  }
  
  constructor(props) {
    super(props);
    this.getRecipe();
    this.thingy = firestore().collection("Recipes").doc("1").onSnapshot(doc => {
      this.setState({
        theRecipe:{
          name: doc.data().name
        }
      })
    })

  }

  getRecipe = async () => {
    const recipeDocument = await firestore().collection("Recipes").doc("1").get()
    console.log(recipeDocument)
  }

  render(){
    return (
      <View style={styles.container}>
        <Text> {this.state.theRecipe.name} </Text>
      </View>
    );

  }
    
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
}); 

