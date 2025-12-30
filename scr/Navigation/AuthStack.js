import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Screen/Login/Login';

const Stack = createNativeStackNavigator();

const AuthStack = ({ setIsLoggedIn }) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login">
        {(props) => (
          <Login {...props} setIsLoggedIn={setIsLoggedIn} />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default AuthStack;
