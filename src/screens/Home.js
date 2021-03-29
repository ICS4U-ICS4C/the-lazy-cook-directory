import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import SearchBar from "../components/searchBar";
import { SimpleLineIcons } from '@expo/vector-icons'; 
// import {Header} from 'react-native-elements';
import {Menu} from '../components/navMenu'

export default function Home() {
  return (
    <View style={styles.container}>
      {/* <Header
        placement="left"
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      /> */}
      <SearchBar/>
      {/* <AntDesign name="search1" size={24} color="black" onPress = {self.addTextInput} /> */}
      <Text> Welcome to Home of Lazy Cook's Direcotry </Text>
    </View>
  );
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

  }
});