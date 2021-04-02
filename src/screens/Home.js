import {StyleSheet, View, Text} from 'react-native'
import SearchBar from '../components/searchBar'
import * as React from 'react';
import { Card, Title, Paragraph } from 'react-native-paper';

const MyComponent = () => (
  <View style = {styles.container}>
    <Card style={styles.introCard}>
      <Card.Content>
        <Title>Welcome to the Lazy Cooks' Directory</Title>
        <Paragraph>Input the ingredients you want to cook with and we'll give you a recipe you thought was never possible with minimal ingredients</Paragraph>
        <SearchBar/>
      </Card.Content>
  </Card>

  </View>

);

export default MyComponent;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  introCard:{
    borderBottomRightRadius: 35,
    borderBottomLeftRadius: 35
  }
});