import { View, Text } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer'
import FirstPage from './pages/FirstPage'
import SecondPage from './pages/SecondPage'
import ThirdPage from './pages/ThirdPage'
import FirstScreenStack from './screens/FirstScreenStack';
import SecondScreenStack from './screens/SecondScreenStack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Drawer= createDrawerNavigator();
const Stack = createNativeStackNavigator();


function MyDrawer() {

  function FirstStack() {
    return ( <Stack.Navigator screenOptions={{headerStyle: {backgroundColor: '#A33e54'}}}>
      <Stack.Screen name = "first" component = {FirstPage} options={{title: 'First Page'}}/>
    </Stack.Navigator>)
  }

  function SecondStack() {
    return (<Stack.Navigator screenOptions={{headerStyle: {backgroundColor: '#A33e54'}}}>
      <Stack.Screen name = "second" component = {SecondPage}  options={{title: 'Second Page'}}/>
    </Stack.Navigator>)
  }


  return(
    <Drawer.Navigator
    screenOptions={{ headerStyle: {
      backgroundColor: "#111111",
    },
    headerTitleStyle: {
      fontWeight: "bold",
      color: "#fff",
    },
    drawerStyle: {
      backgroundColor: "#3C687A",
    },
    drawerActiveBackgroundColor: "#fff",
    drawerActiveTintColor: "#3C687A",
    drawerInactiveTintColor: "#fff"}}
    
    >
      <Drawer.Screen
      name = 'first' component={FirstStack} options={{title: 'First Stack'}}
      />
      <Drawer.Screen
      name = 'second' component={SecondStack} options={{title: 'Second Stack'}}
      />
    </Drawer.Navigator>
  )
}


const App = () => {
  return (
    <NavigationContainer>
      <MyDrawer/>
    </NavigationContainer>
  )
}

export default App