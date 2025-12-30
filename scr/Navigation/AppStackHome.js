import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BabyDetails from '../Screen/BabyDetails/BabyDetails';
import HomeScreen from '../Screen/HomeScreen/HomeScreen';
import RecordingScreen from '../Screen/RecordingScreen/RecordingScreen';
import ProcessingScreen from '../Screen/ProcessingScreen/ProcessingScreen';
import ResultScreen from '../Screen/ResultScreen/ResultScreen';
import FeedBack from '../Screen/FeedBack/FeedBack';
import History from '../Screen/History/History';
import Subscription from '../Screen/Subscription/Subscription';
import ProfileDetails from '../Screen/ProfileScreen/ProfileDetails';

const Stack = createNativeStackNavigator();

export default function AppStackHome() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="RecordingScreen" component={RecordingScreen} />
      <Stack.Screen name="ProcessingScreen" component={ProcessingScreen} />
      <Stack.Screen name="ResultScreen" component={ResultScreen} />
      <Stack.Screen name="FeedBack" component={FeedBack} />
      <Stack.Screen name="History" component={History} />
      <Stack.Screen name="Subscription" component={Subscription} />
      <Stack.Screen name="ProfileDetails" component={ProfileDetails} />
    </Stack.Navigator>
  );
}
