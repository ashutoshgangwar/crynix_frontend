import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import styles from './Login.styles';

GoogleSignin.configure({
  webClientId:
    '990025298376-cvc7jntu8969rvlpsaeuntiniu47dg7m.apps.googleusercontent.com',
  offlineAccess: true,
});

const Login = ({setIsLoggedIn}) => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      const idToken = userInfo.data?.idToken;
      if (!idToken) {
        Alert.alert('Login failed', 'No ID token received');
        return;
      }

      const res = await axios.post(
        'http://192.168.1.8:4000/api/auth/google-login',
        {tokenId: idToken},
      );

      const {accessToken, user} = res.data;

      await AsyncStorage.setItem('accessToken', accessToken);
      await AsyncStorage.setItem('user', JSON.stringify(user));

      console.log('accesstoken from login', accessToken);

      setTimeout(() => {
        setIsLoggedIn(true);
      }, 1200);
    } catch (err) {
      console.log('Google login error', err);
      Alert.alert('Login failed', err.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CRYNIX</Text>
      <Text style={styles.subtitle}>AI-powered baby cry understanding</Text>
      {loading ? (
        <>
          <ActivityIndicator size="large" color="#4285F4" />
          <Text style={{marginTop: 12, fontSize: 16}}>Login successful 🎉</Text>
          <Text style={{marginTop: 6, color: '#666'}}>
            Setting up your account...
          </Text>
        </>
      ) : (
        <TouchableOpacity
          style={styles.googleButton}
          onPress={handleGoogleLogin}
          activeOpacity={0.8}>
          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg',
            }}
            style={styles.googleIcon}
          />
          <Text style={styles.googleText}>Continue with Google</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Login;
