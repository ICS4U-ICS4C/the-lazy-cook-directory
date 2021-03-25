import React from 'react';
import ReactDOM from 'react-dom';
import Demo from './demo';

ReactDOM.render(<Demo />, document.querySelector('#root'));

import { StyleSheet, Text, View } from 'react-native';

import Home from "./src/screens/Home"

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