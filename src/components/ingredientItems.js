import React from 'react';
import {View, StyleSheet, TouchableOpacity,Text} from 'react-native';

export default function IngredientItem ({item}){
  return(
    <TouchableOpacity>
    <Text style={styles.item}>{item.Ingredient}</Text>
    </TouchableOpacity>
  )
  
}
//change the style
const styles = StyleSheet.create({
  item:{
    padding: 10,
    marginTop: 10,
    borderColor: 'black',

  }

})