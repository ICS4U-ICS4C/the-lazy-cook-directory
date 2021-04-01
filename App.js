import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';
import Recipes from './src/screens/Recipes';
import { StackRouter } from 'react-navigation';
import { DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeStack = createStackNavigator();
const RecipesStack = createStackNavigator(); 
const Drawer = createDrawerNavigator();

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

const RecipesStackScreen  = ({navigation}) => (
  <RecipesStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#8bc225',
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
        backgroundColor="#8bc225"
        onPress={() => navigation.openDrawer()}/>
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
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// // import Home from "./src/screens/Home" 
// import Menu from './src/components/navMenu'



// export default function App() {
//   return ( 
//     <View style={styles.container}>
//       <Menu/>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });