import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  Text,
  Image} from 'react-native';
  import { Ionicons } from '@expo/vector-icons';

  import SearchBar from "./src/components/searchBar"

export default function App() {
    return(
    <View style={styles.container}>
      <SearchBar/>
      <Ionicons name="ios-menu-sharp" size={24} color="black" />
      <Text style={styles.Title}>
      Welcome to Lazy Cook's Directory
        </Text>
        <Text style = {styles.SubText}>
        For All of Our Lazy Cooks ~
        </Text>
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