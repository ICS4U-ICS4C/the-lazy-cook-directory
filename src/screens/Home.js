import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import SearchBar from '../components/searchBar'
import { useFonts } from 'expo-font';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Home extends React.Component{
    render(){
        return(
            <View style={styles.container}>
              {/* <SafeAreaView style = {{flex:1}}>
                <TouchableOpacity 
                  style = {styles.TouchableOpacity}
                  onPress = {this.props.navigation.openDrawer}>

                </TouchableOpacity>
              </SafeAreaView> */}
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
  },
  title:{
    fontSize: 40,
    // fontFamily: 'Montserrat',
    textDecorationLine: 'underline'
  },
  TouchableOpacity:{
    alignItems: "flex-end",
    margin: 15
  }
});