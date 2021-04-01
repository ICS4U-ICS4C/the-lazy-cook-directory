import React from 'react';
import ReactDOM from 'react-dom';

import { StyleSheet, Text, View } from 'react-native';
<<<<<<< Updated upstream
import Home from "./src/screens/Home" 
=======

import Home from './src/screens/HomeScreen/HomeScreen'
import storeLocator from "./src/screens/storeLocator/"
>>>>>>> Stashed changes

export default function App() {
  return ( 
    <View style={styles.container}>
      <Home/>
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
});