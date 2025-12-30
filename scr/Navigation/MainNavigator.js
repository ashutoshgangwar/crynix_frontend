import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import AuthStack from './AuthStack';
import AppStackHome from './AppStackHome';
import AppStackOnboarding from './AppStackOnboarding';
import SplashScreen from '../Screen/SplaceScreen/SplaceScreen';

export default function MainNavigator() {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hasBaby, setHasBaby] = useState(false);

  const bootstrap = async () => {
    try {
      setLoading(true);

      const token = await AsyncStorage.getItem('accessToken');
      if (!token) {
        setIsLoggedIn(false);
        setHasBaby(false);
        return;
      }

      setIsLoggedIn(true);

      const res = await axios.get('http://192.168.1.8:4000/api/baby', {
        headers: {Authorization: `Bearer ${token}`},
        validateStatus: () => true,
      });

      // 🔥 CORRECT CHECK
      if (
        res.status === 200 &&
        res.data &&
        Array.isArray(res.data) &&
        res.data.length > 0
      ) {
        setHasBaby(true);
      } else {
        setHasBaby(false);
      }
      console.log('data eixt', res.status);
    } catch (e) {
      console.log('BOOTSTRAP ERROR:', e.message);
      setHasBaby(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    bootstrap();
  }, [isLoggedIn]); // 🔥 LOGIN KE BAAD AUTO CALL

  if (loading) return <SplashScreen />;

  if (!isLoggedIn) {
    return <AuthStack setIsLoggedIn={setIsLoggedIn} />;
  }

  return hasBaby ? (
    <AppStackHome />
  ) : (
    <AppStackOnboarding setHasBaby={setHasBaby} />
  );
}
