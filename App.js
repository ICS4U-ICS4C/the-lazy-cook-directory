import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import HomeStackNavigator from './src/navigations/Navigator'
import Home from "./src/screens/Home";
const App = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name = "Home" component = {Home}/>
    </Stack.Navigator>
  )
}
export default function App(){
  return (
    <NavigationContainer >
      <MyStack/>
    </NavigationContainer>
  )

} 