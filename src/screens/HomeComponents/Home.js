import React from 'react';
import {StyleSheet,View,Text,Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import SearchBar from "./src/components/searchBar"

export default function Home() {
    return(
    <View style={styles.container}>
      <SearchBar/>
      <Ionicons name="ios-menu-sharp" size={35} color="black" />
      <Text style={styles.Title}> Welcome to the Lazy Cook's Directory's </Text>
        <Text style = {styles.SubText}> Home Page  ~</Text>
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
  Title:{
    fontSize: 35,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
    borderColor: '#b4d12e',
    borderWidth: 8,
    borderRadius: 20,
    backgroundColor: '#bfde31',
  },
  SubText:{
    fontSize: 20,
    color: '#e5e059',
    alignItems: 'center',
    justifyContent: 'center'
  }
});