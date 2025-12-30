import React from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './scr/Navigation/MainNavigator';


export default function App() {
  GoogleSignin.configure({
  webClientId: '990025298376-cvc7jntu8969rvlpsaeuntiniu47dg7m.apps.googleusercontent.com',
  offlineAccess: true,
});

  console.log('App Loaded');
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}
