import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons'; 
import SearchBar from '../components/searchBar';
// import {Menu} from '../components/navMenu'

export default function Home() {
  return (
    <View style={styles.container}>
      <SearchBar/>
      <SimpleLineIcons name="menu" style = {styles.menuBotton} onPress={() => Menu()} />
      <Text> Welcome to Home of Lazy Cook's Direcotry </Text>
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
  menuBotton:{
    color:"black",
    fontSize: 40,
    backgroundColor: null

  }
});