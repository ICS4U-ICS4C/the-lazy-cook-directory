import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default class RecipeScreen extends React.Component {

    // state = {
    //     Recipes:[],
    // };
          
    // componentDidMount() {
    // }
  
    render() {
      return (
        <View style={styles.container}>
            <Text> Heyoooo </Text>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      backgroundColor: '#e0e0e0',
      alignItems: 'center',
      justifyContent: 'center',
    }
    })



