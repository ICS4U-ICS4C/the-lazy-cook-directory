import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import Home from '../screens/Home';
import Recipes from '../screens/Recipes';
import { StackRouter } from 'react-navigation';
import { DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeStack = createStackNavigator();
const RecipesStack = createStackNavigator(); 
const Drawer = createDrawerNavigator();
// const menuButton =     options={{
//   headerLeft:  () => (
//     <Icon.Button name="menu" 
//     size={25}
//     backgroundColor="#bd7b35"
//     onPress={() => navigation.openDrawer()}

const MenuButton = () => {
  return(
      <View style={styles.container}>
        <Icon.Button name="menu" 
        size={25}
        backgroundColor="#bd7b35"
        onPress={() => navigation.openDrawer()}/>
      </View>
  )

}

const HomeStackScreen  = ({navigation}) => (
  <HomeStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#bd7b35',
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
        <MenuButton/>
      )
    }}/>
  </HomeStack.Navigator>
);

const RecipesStackScreen  = ({navigation}) => (
  <RecipesStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#bd7b35',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  }}>
    <RecipesStack.Screen name='Recipes'component={Recipes}
    options={{
      headerLeft:  () => (
        <MenuButton/>
      )
    }}/>
  </RecipesStack.Navigator>
);

export default function Menu() {
  return ( 
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name ='Home' component={HomeStackScreen}/>
        <Drawer.Screen name ='Recipes' component={RecipesStackScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});