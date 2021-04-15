import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';
//import Recipes from './src/screens/Recipes';
import storeLocator from './src/screens/storeLocator';
import FbTester from './src/screens/firebaseTesting';
// import { StackRouter } from 'react-navigation';
// import { DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';


// header + menu code
const HomeStack = createStackNavigator();
//const RecipesStack = createStackNavigator(); 
const LocatorStack = createStackNavigator();
const TesterStack = createDrawerNavigator();
const Drawer = createDrawerNavigator();


// Home screen tab, aka default tab
const HomeStackScreen  = ({navigation}) => (
  <HomeStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#8bc225',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <HomeStack.Screen name="Home" component={Home}
    options={{
      title:'Home Of Lazy Cooks',
      headerLeft:  () => (
        <Icon.Button name="menu" 
        size={25}
        backgroundColor="#8bc225"
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
      backgroundColor: '#8bc225',
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
        backgroundColor="#8bc225"
        onPress={() => navigation.openDrawer()}/>
      )
    }}/>
  </LocatorStack.Navigator>
);
//Fb tester tab
const TesterStackScreen  = ({navigation}) => (
  <TesterStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#8bc225',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  }}>
    <TesterStack.Screen name='Firestore Tester'component={FbTester}
    options={{
      headerLeft:  () => (
        <Icon.Button name="menu" 
        size={25}
        backgroundColor="#8bc225"
        onPress={() => navigation.openDrawer()}/>
      )
    }}/>
  </TesterStack.Navigator>
)

export default function Menu() {
  return ( 
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name ='Home' component={HomeStackScreen}/>
        <Drawer.Screen name = 'Store Locator' component={LocatorStackScreen }/>
        <Drawer.Screen name = 'Firestore Tester' component={TesterStackScreen}/>
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
