import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import SearchBar from '../components/searchBar'
import { useFonts } from 'expo-font';

export default class Recipes extends React.Component{
    render(){
        return(
            <View style={styles.container}>
              <Text style = {styles.title}> Welcome to Lazy Cooks Directory! </Text>
              <SearchBar/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuBotton:{
    color:"black",
    fontSize: 40,
    backgroundColor: null
  },
  title:{
    fontSize: 40,
    fontFamily: 'Montserrat',
    textDecorationLine: 'underline'
  }
});