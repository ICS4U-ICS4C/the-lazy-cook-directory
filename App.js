import React from 'react';
<<<<<<< HEAD
import { StyleSheet, Text, View } from 'react-native';
=======
import {StyleSheet,View,Text,Image} from 'react-native';

import Home from '../the-lazy-cook-directory/src/screens/HomeComponents/Home'
>>>>>>> c216763993f61acbf54869f00a4dbe8f3e7ab457

import Home from "./src/screens/Home"

export default function App() {
  return (
    <View style={styles.container}>


      {/* <Text> Heyo</Text> */}
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