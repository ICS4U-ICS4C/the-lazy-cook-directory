import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import HomeStackNavigator from './src/navigations/Navigator'

const App = () => {
  return(
    <NavigationContainer>
      <HomeStackNavigator> Welcome to Lazy Cook Directory!</HomeStackNavigator>
    </NavigationContainer>
  )
}
export default App; 