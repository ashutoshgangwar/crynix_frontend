import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './SplaceScreen.styles';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/822/822143.png' }}
        style={styles.logo}
      />
      <Text style={styles.title}>CRYNIX</Text>
      <Text style={styles.subtitle}>
        Understanding your baby’s needs
      </Text>
    </View>
  );
};

export default SplashScreen;
