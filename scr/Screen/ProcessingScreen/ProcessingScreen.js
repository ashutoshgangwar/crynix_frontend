import React, {useEffect} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import styles from './ProcessingScreen.styles';
import {useNavigation} from '@react-navigation/native';

const ProcessingScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('ResultScreen');
    }, 6500); // 6.5 seconds

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />

      <Text style={styles.title}>Analyzing Cry</Text>
      <Text style={styles.subtitle}>
        Our AI is understanding your baby’s needs
      </Text>

      <View style={styles.progressBox}>
        <Text style={styles.progressText}>Processing audio...</Text>
      </View>
    </View>
  );
};

export default ProcessingScreen;
