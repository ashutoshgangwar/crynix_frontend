import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './ResultScreen.styles';
import {useNavigation} from '@react-navigation/native';

const ResultScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Analysis Result</Text>
      <Text style={styles.subtitle}>
        Here’s what we detected from your baby’s cry
      </Text>

      {/* Result Card */}
      <View style={styles.resultCard}>
        <Text style={styles.resultLabel}>Cry Type</Text>
        <Text style={styles.resultValue}>Hungry</Text>

        <View style={styles.divider} />

        <Text style={styles.resultLabel}>Confidence</Text>
        <Text style={styles.confidenceValue}>87%</Text>
      </View>

      {/* Action Buttons */}
      <TouchableOpacity
        style={styles.secondaryButton}
        activeOpacity={0.85}
        onPress={() => navigation.navigate('RecordingScreen')}>
        <Text style={styles.secondaryButtonText}>Record Again</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.primaryButton}
        activeOpacity={0.85}
        onPress={() => navigation.navigate('FeedBack')}>
        <Text style={styles.primaryButtonText}>Share Feedback</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ResultScreen;
