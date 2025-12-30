import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './HomeScreen.styles';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const goToRecording = () => {
    navigation.navigate('RecordingScreen');
  };

  const goToProfile = () => {
    navigation.navigate('ProfileDetails');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={goToProfile}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/1077/1077114.png',
            }}
            style={styles.profileIcon}
          />
        </TouchableOpacity>
        <View>
          <Text style={styles.headerTitle}>CRYNIX</Text>
        </View>
      </View>

      {/* Hero Card */}
      <View style={styles.heroCard}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/822/822143.png',
          }}
          style={styles.heroIcon}
        />

        <Text style={styles.cardTitle}>Understand Your Baby</Text>

        <Text style={styles.cardSubtitle}>
          Our AI listens to your baby’s cry and helps you know what they need
        </Text>

        <TouchableOpacity
          style={styles.listenButton}
          activeOpacity={0.85}
          onPress={goToRecording}
        >
          <Text style={styles.listenText}>Start Listening</Text>
        </TouchableOpacity>
      </View>

      {/* Info Section */}
      <View style={styles.infoSection}>
        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Cry Type</Text>
          <Text style={styles.infoValue}>Not detected</Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Confidence</Text>
          <Text style={styles.infoValue}>— %</Text>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
