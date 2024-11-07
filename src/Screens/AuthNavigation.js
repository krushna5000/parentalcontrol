import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './WelcomeScreen';
import SignupScreen from './SignupScreen';
import LoginScreen from './LoginScreen';


const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
   
      <Stack.Navigator>
        <Stack.Screen name="WelCome" component={WelcomeScreen} />
        <Stack.Screen name="SignUP" component={SignupScreen} />
        <Stack.Screen name="LogIn" component={LoginScreen} />

      </Stack.Navigator>
    
  )
}

export default AuthNavigation
