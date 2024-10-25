import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './Screens/WelcomeScreen';
import LoginScreen from './Screens/LoginScreen';
import SignupScreen from './Screens/SignupScreen';



const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='welcome'>
        <Stack.Screen name="welcome" component={WelcomeScreen}
        options={{
            headerShown:false,
        }} />
        <Stack.Screen name="login" component={LoginScreen}
        options={{
            headerShown:false,
        }}  />
        <Stack.Screen name="signup" component={SignupScreen}
        options={{
            headerShown:false,
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigation
