import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import styles from './FeedBack.styles';
import {useNavigation} from '@react-navigation/native';

const CheckBox = ({label, checked, onPress}) => {
  return (
    <TouchableOpacity style={styles.optionRow} onPress={onPress}>
      <View style={[styles.checkbox, checked && styles.checkboxChecked]}>
        {checked && <Text style={styles.checkmark}>✓</Text>}
      </View>
      <Text style={styles.optionText}>{label}</Text>
    </TouchableOpacity>
  );
};

const FeedBack = () => {
  const navigation = useNavigation();

  const [ageGroup, setAgeGroup] = useState(null);
  const [cryType, setCryType] = useState(null);
  const [accuracy, setAccuracy] = useState(null);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>Baby Feedback</Text>
      <Text style={styles.subtitle}>
        Select options that best describe your baby
      </Text>

      {/* AGE GROUP */}
      <Text style={styles.sectionTitle}>Baby Age Group</Text>
      <CheckBox label="0 – 3 months" checked={ageGroup === '0-3'} onPress={() => setAgeGroup('0-3')} />
      <CheckBox label="3 – 6 months" checked={ageGroup === '3-6'} onPress={() => setAgeGroup('3-6')} />
      <CheckBox label="6 – 9 months" checked={ageGroup === '6-9'} onPress={() => setAgeGroup('6-9')} />
      <CheckBox label="9 – 12 months" checked={ageGroup === '9-12'} onPress={() => setAgeGroup('9-12')} />
      <CheckBox label="1 – 2 years" checked={ageGroup === '1-2'} onPress={() => setAgeGroup('1-2')} />
      <CheckBox label="2 – 3 years (before speaking)" checked={ageGroup === '2-3'} onPress={() => setAgeGroup('2-3')} />

      {/* CRY TYPE */}
      <Text style={styles.sectionTitle}>Cry Type Observed</Text>
      <CheckBox label="Hungry" checked={cryType === 'hungry'} onPress={() => setCryType('hungry')} />
      <CheckBox label="Sleepy" checked={cryType === 'sleepy'} onPress={() => setCryType('sleepy')} />
      <CheckBox label="Pain / Discomfort" checked={cryType === 'pain'} onPress={() => setCryType('pain')} />
      <CheckBox label="Needs Attention" checked={cryType === 'attention'} onPress={() => setCryType('attention')} />

      {/* ACCURACY */}
      <Text style={styles.sectionTitle}>Was the AI prediction accurate?</Text>
      <CheckBox label="Yes" checked={accuracy === 'yes'} onPress={() => setAccuracy('yes')} />
      <CheckBox label="Somewhat" checked={accuracy === 'somewhat'} onPress={() => setAccuracy('somewhat')} />
      <CheckBox label="No" checked={accuracy === 'no'} onPress={() => setAccuracy('no')} />

      {/* ACTIONS */}
      <TouchableOpacity style={styles.primaryButton}
         onPress={() => navigation.navigate('History')}>
        <Text style={styles.primaryButtonText}>Submit Feedback</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.secondaryButton}
        onPress={() => navigation.goBack()}>
        <Text style={styles.secondaryButtonText}>Cancel</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default FeedBack;
