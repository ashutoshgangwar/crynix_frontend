import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Linking } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './HomeScreen.styles';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const goToRecording = () => navigation.navigate('RecordingScreen');
  const goToProfile = () => navigation.navigate('ProfileDetails');

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>CRYNIX</Text>
        <TouchableOpacity onPress={goToProfile}>
          <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1077/1077114.png' }} style={styles.profileIcon} />
        </TouchableOpacity>
      </View>

      {/* Hero Card with Gradient */}
      <LinearGradient colors={['#4F46E5', '#6D28D9']} style={styles.heroCard}>
        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/822/822143.png' }} style={styles.heroIcon} />
        <Text style={styles.cardTitle}>Understand Your Baby</Text>
        <Text style={styles.cardSubtitle}>
          Our AI listens to your baby’s cry and helps you know what they need
        </Text>
        <TouchableOpacity style={styles.listenButton} onPress={goToRecording}>
          <Text style={styles.listenText}>🎤 Start Listening</Text>
        </TouchableOpacity>
      </LinearGradient>

      {/* Info Cards */}
      <View style={styles.infoSection}>
        <View style={styles.infoCard}>
          <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/727/727399.png' }} style={styles.infoIcon} />
          <Text style={styles.infoTitle}>Last Recording</Text>
          <Text style={styles.infoValue}>2 minutes ago</Text>
        </View>
        <View style={styles.infoCard}>
          <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1087/1087816.png' }} style={styles.infoIcon} />
          <Text style={styles.infoTitle}>Confidence</Text>
          <Text style={styles.infoValue}>98 %</Text>
        </View>
      </View>

      {/* Tips & Insights */}
      <View style={styles.extraSection}>
        <Text style={styles.extraTitle}>Tips & Insights</Text>
        <View style={styles.extraCard}>
          <Text style={styles.extraText}>If your baby cries 10 mins, check diaper 🧷</Text>
        </View>
        <View style={styles.extraCard}>
          <Text style={styles.extraText}>Feed baby every 2-3 hours 🍼</Text>
        </View>
      </View>

      {/* Bottom CTA */}
      <View style={styles.bottomSection}>
        <Text style={styles.bottomTitle}>Upgrade for more features</Text>
        <LinearGradient colors={['#F59E0B', '#EF4444']} style={styles.upgradeButton}>
          <TouchableOpacity>
            <Text style={styles.upgradeText}>Go Premium 🚀</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
