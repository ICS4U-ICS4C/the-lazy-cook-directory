import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import SearchBar from '../components/searchBar'

export default class Recipes extends React.Component{
    render(){
        return(
            <View style={styles.container}>
              <SearchBar/>
              <Text> Recipes </Text>
            </View>
        )
    }
}




// export default function Home() {
//   return (
//     <View style={styles.container}>
//       <SearchBar/>
//       <Text> Welcome to the Home of Lazy Cook's Directory! </Text>
//     </View>
//   );
// }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuBotton:{
    color:"black",
    fontSize: 40,
    backgroundColor: null

  }
});