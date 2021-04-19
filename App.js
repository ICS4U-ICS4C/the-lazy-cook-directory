import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View,Button } from 'react-native';
import Home from './src/screens/Home';
import storeLocator from './src/screens/storeLocator';
import sResults from './src/screens/sResults';
// import { StackRouter } from 'react-navigation';
// import { DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
//import Navigation from './src/navconfig.js/navigation'; 
// import Stack from './src/components/searchBar';
// import Screenss from './src/components/searchBar';

// header + menu code, route home page (as in home page is desplayed)
const HomeStack = createStackNavigator();
//const RecipesStack = createStackNavigator(); 
const LocatorStack = createStackNavigator();
const Drawer = createDrawerNavigator();


// Home screen tab, aka default tab
const HomeStackScreen  = ({navigation}) => (
  <HomeStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#f5df62',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <HomeStack.Screen name="Home" component={Home}
    //creating screen for when the drawer is opened
    options={{
      title:'Home Of Lazy Cooks',
        
      
      headerLeft:  () => (
        //what the header will hold; menu icon on top that will open drawer
        <Icon.Button name="menu" 
        size={25}
        backgroundColor="#f5df62"
        onPress={() => navigation.openDrawer()}></Icon.Button>
      )
    }}/>
  </HomeStack.Navigator>
);

// Recipes Tab
//const RecipesStackScreen  = ({navigation}) => (
  //<RecipesStack.Navigator screenOptions={{
   // headerStyle: {
     // backgroundColor: '#8bc225',
   // },
    //headerTintColor: '#fff',
   // headerTitleStyle: {
     // fontWeight: 'bold',
   // }
 // }}>
   //<RecipesStack.Screen name='Recipes'component={Recipes}
  // options={{
    //  headerLeft:  () => (
     //   <Icon.Button name="menu" 
     //   size={25}
      //  backgroundColor="#8bc225"
      //  onPress={() => navigation.openDrawer()}/>
    //  )
   // }}/>
 // </RecipesStack.Navigator>
//);

// Store Locator tab
const LocatorStackScreen  = ({navigation}) => (
  <LocatorStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#f5df62',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  }}>
  <LocatorStack.Screen name='Store Locator'component={storeLocator}
    options={{
      headerLeft:  () => (
        <Icon.Button name="menu" 
        size={25}
        backgroundColor="#f5df62"
        onPress={() => navigation.openDrawer()}/>
      )
    }}/>
  </LocatorStack.Navigator>
);

{/* <Drawer.Screen name = 'Search' component={sResults}/> */}



// class SearchBootan extends React.Component {  
//   render() {  
//       return (  
//           <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>  
//               <Button  
//                   title="Search"  
//                   onPress={() => this.props.navigation.navigate('sResults')}  
//               />  
//           </View>  
//       );  
//   }  
// }  

export default function Menu() {
  return ( 

    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name ='Home' component={HomeStackScreen}/>
        <Drawer.Screen name = 'Store Locator' component={LocatorStackScreen }/>
      </Drawer.Navigator>
    </NavigationContainer>


  )};



//<Drawer.Screen name ='Recipes' component={RecipesStackScreen}/>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
