import React from 'react';
import {StyleSheet,View,Text,Image} from 'react-native';

import Home from '../the-lazy-cook-directory/src/screens/HomeComponents/Home'


export default function App() {
    return(
      <View>
        <Home/>;
      </View> 
  )
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