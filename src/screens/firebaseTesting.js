import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firestore from '@react-native-firebase/firestore';

const recipeDocument = firestore().collection("Recipes").doc("1").get()

export default function FbTester(){
    return (
      <View style={styles.container}>
        <Text> Tester </Text>
      </View>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
}); 

