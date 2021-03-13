import React from 'react'
import {creatStackNavigator} from '@react-navigation/stack'
import Home from '../screens/Home'

const Stack = creatStackNavigator()
const screenOptionsStyle = {
    headerShown: false
}

const HomeStackNavigator= () => {
    return(
        <Stack.Navigator screenOptions= {screenOptionsStyle} >
            <Stack.Screen name = "Home" component = {Home}/>
        </Stack.Navigator>
    ) 
}

export default HomeStackNavigator;