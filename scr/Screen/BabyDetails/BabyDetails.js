import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import styles from './BabyDetails.styles';
import {useNavigation} from '@react-navigation/native';

const BabyDetails = ({setHasBaby}) => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [gender, setGender] = useState(null);
  const [dob, setDob] = useState('');
  const [weight, setWeight] = useState('');
  const [currentWeight, setCurrentWeight] = useState('');
  const [feeding, setFeeding] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    if (!name || !gender || !dob || !weight || !currentWeight || !feeding) {
      Alert.alert('Incomplete', 'Please fill all fields');
      return;
    }

    try {
      setLoading(true);
      const token = await AsyncStorage.getItem('accessToken');
      if (!token) throw new Error('No access token found');

      const parts = dob.split('/');
      const dobFormatted = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);

      const genderMap = {'Boy 👦': 'Male', 'Girl 👧': 'Female'};
      const feedingMap = {
        'Breast 🍼': 'BreastMilk',
        'Formula 🧃': 'Formula',
        'Both 💕': 'Both',
      };

      const res = await axios.post(
        'http://192.168.1.8:4000/api/baby',
        {
          name,
          dateOfBirth: dobFormatted,
          birthWeight: weight,
          currentWeight,
          gender: genderMap[gender],
          feedingType: feedingMap[feeding],
        },
        {
          headers: {Authorization: `Bearer ${token}`},
          validateStatus: () => true,
        },
      );

      setLoading(false);

      if (res.status === 200 || res.status === 201) {
        // console.log('baby details uploade', res.data)
        const babyId = res.data.baby._id; // get babyId from response
        await AsyncStorage.setItem('babyId', babyId); // save to AsyncStorage
        // console.log('Baby ID saved:', babyId);
        Alert.alert(
          'Success',
          'Baby profile saved 🎉',
          [
            {
              text: 'OK',
              onPress: () => {
                setHasBaby(true);
              },
            },
          ],
          {cancelable: false},
        );
      } else {
        console.log('API ERROR:', res.data);
        Alert.alert('Error', 'Failed to save baby profile');
      }
    } catch (err) {
      setLoading(false);
      console.log('CATCH:', err.message);
      Alert.alert('Error', err.message);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView
        contentContainerStyle={{paddingBottom: 40}}
        keyboardShouldPersistTaps="handled">
        <Text style={styles.title}>👶 Baby Profile</Text>
        <Text style={styles.subtitle}>Tell us a little about your newborn</Text>

        <View style={styles.card}>
          <Text style={styles.label}>Baby’s name</Text>
          <TextInput
            placeholder="e.g. Aarav"
            placeholderTextColor="#94A3B8"
            value={name}
            onChangeText={setName}
            style={styles.input}
          />

          <Text style={styles.label}>Gender</Text>
          <View style={styles.row}>
            {['Boy 👦', 'Girl 👧'].map(item => (
              <TouchableOpacity
                key={item}
                onPress={() => setGender(item)}
                style={[styles.chip, gender === item && styles.chipActive]}>
                <Text
                  style={[
                    styles.chipText,
                    gender === item && styles.chipTextActive,
                  ]}>
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.label}>Date of birth</Text>
          <TextInput
            placeholder="DD / MM / YYYY"
            placeholderTextColor="#94A3B8"
            value={dob}
            onChangeText={setDob}
            style={styles.input}
          />

          <Text style={styles.label}>Birth weight (kg)</Text>
          <TextInput
            placeholder="e.g. 3.2"
            placeholderTextColor="#94A3B8"
            value={weight}
            onChangeText={setWeight}
            keyboardType="numeric"
            style={styles.input}
          />

          <Text style={styles.label}>Current weight (kg)</Text>
          <TextInput
            placeholder="e.g. 3.5"
            placeholderTextColor="#94A3B8"
            value={currentWeight}
            onChangeText={setCurrentWeight}
            keyboardType="numeric"
            style={styles.input}
          />

          <Text style={styles.label}>Feeding type</Text>
          <View style={styles.row}>
            {['Breast 🍼', 'Formula 🧃', 'Both 💕'].map(item => (
              <TouchableOpacity
                key={item}
                onPress={() => setFeeding(item)}
                style={[styles.chip, feeding === item && styles.chipActive]}>
                <Text
                  style={[
                    styles.chipText,
                    feeding === item && styles.chipTextActive,
                  ]}>
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {loading ? (
            <View style={{marginTop: 20, alignItems: 'center'}}>
              <ActivityIndicator size="large" color="#4285F4" />
              <Text style={{marginTop: 12}}>Saving your baby’s profile...</Text>
            </View>
          ) : (
            <TouchableOpacity style={styles.button} onPress={handleSave}>
              <Text style={styles.buttonText}>Save & Continue 🚀</Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity>
            <Text style={styles.skip}>Skip for now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default BabyDetails;
