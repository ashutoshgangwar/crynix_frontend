import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BabyDetails from '../Screen/BabyDetails/BabyDetails';
import HomeScreen from '../Screen/HomeScreen/HomeScreen';


const Stack = createNativeStackNavigator();

export default function AppStackOnboarding({ setHasBaby }) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BabyDetails">
        {props => <BabyDetails {...props} setHasBaby={setHasBaby} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}