import React from 'react';
<<<<<<< HEAD
import { StyleSheet, Text, View } from 'react-native';
// import Home from "./src/screens/Home" 
import Menu from './src/components/navMenu'
=======
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import Home from "./src/screens/Home";
import Recipes from "./src/screens/Recipes";
import storeLocator from "./src/screens/storeLocator";
import { StackRouter } from 'react-navigation';
import { DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeStack = createStackNavigator();
const RecipesStack = createStackNavigator(); 
const storeLocatorStack = createStackNavigator();
const Drawer = createDrawerNavigator();

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
        <Icon.Button name="menu" 
        size={25}
        backgroundColor="#bd7b35"
        onPress={() => navigation.openDrawer()}></Icon.Button>
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
        <Icon.Button name="menu" 
        size={25}
        backgroundColor="#bd7b35"
        onPress={() => navigation.openDrawer()}></Icon.Button>
      )
    }}/>
  </RecipesStack.Navigator>
);
>>>>>>> ff036b4ed16f0184186ff60be38c093a807a58a7

const storeLocatorStackScreen  = ({navigation}) => (
  <storeLocatorStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#bd7b35',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  }}>
    <storeLocatorStack.Screen name='Store Locator'component={storeLocator}
    options={{
      headerLeft:  () => (
        <Icon.Button name="menu" 
        size={25}
        backgroundColor="#bd7b35"
        onPress={() => navigation.openDrawer()}></Icon.Button>
      )
    }}/>
  </storeLocatorStack.Navigator>
);



export default function App() {
  return ( 
<<<<<<< HEAD
    <View style={styles.container}>
      <Menu/>
    </View>
  );
}
=======
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name ='Home' component={HomeStackScreen}/>
        <Drawer.Screen name ='Recipes' component={RecipesStackScreen}/>
        <Drawer.Screen name ='Store Locator' component={storeLocatorStackScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )};

>>>>>>> ff036b4ed16f0184186ff60be38c093a807a58a7

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});