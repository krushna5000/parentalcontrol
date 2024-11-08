import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './src/Screens/WelcomeScreen';
import HomeScreen from './src/Screens/HomeScreen';
import SignupScreen from './src/Screens/SignupScreen';
import LoginScreen from './src/Screens/LoginScreen';
import ScreenTime from './src/Screens/ScreenTimeTrackerPage';
import LocationTracking from './src/Screens/LocationTracking';
import Profile from './src/Screens/Profile';
import ActivityPage from './src/Screens/ActivityPage';



export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='welcomepage'>
        <Stack.Screen name="welcomepage" component={WelcomeScreen}
          options={{
            headerShown: false,
          }}/>
         <Stack.Screen name="signup" component={SignupScreen}
          options={{
            headerShown: false,
          }}/>
         <Stack.Screen name="login" component={LoginScreen}
          options={{
            headerShown: false,
          }} />
         <Stack.Screen name="Profile" component={Profile}
          options={{
            headerShown: false,
          }} />
        
           <Stack.Screen name="ScreenTime" component={ScreenTime}
         options={{
          headerShown: false,
            }} />
            <Stack.Screen name="ActivityPage" component={ActivityPage}
         options={{
          headerShown: false,
            }} />
            <Stack.Screen name="HomeScreen" component={HomeScreen}
         options={{
          headerShown: false,
            }} />
        <Stack.Screen name="LocationTracking" component={LocationTracking}
         options={{
          headerShown: false,
            }} />
        
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
