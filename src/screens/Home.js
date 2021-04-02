import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import SearchBar from '../components/searchBar'


export default class Home extends React.Component{
    render(){
        return(
            <View style={styles.container}>
              <Text style = {styles.title}> Welcome to Lazy Cooks Directory! </Text>
              <SearchBar/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '-90%',
    padding: '10%'
  },
  title:{
    fontSize: 36,
    // fontFamily: 'Montserrat',
    textDecorationLine: 'underline',
    textAlign: 'center'
  },
  TouchableOpacity:{
    alignItems: "flex-end",
    margin: 15
  }
});