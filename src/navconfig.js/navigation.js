import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import SearchBar from '../components/searchBar';
import sResults from '../screens/sResults';

const RecipeStack = createStackNavigator();
const RecipesStackScreen = () =>{
    <RecipeStack.Navigator>
        <RecipeStack.Screen name = 'home' component = {Home}/>
        <RecipeStack.Screen name = 'RecipeList' component = {sResults}/>

    </RecipeStack.Navigator>

}
export default () =>{
    <NavigationContainer>
        <RecipesStackScreen/>
    </NavigationContainer>
}