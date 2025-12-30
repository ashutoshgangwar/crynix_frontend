import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import styles from './ProfileDetails.styles';

const BABY_API = 'http://192.168.1.8:4000/api/baby';

const ProfileDetails = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState(null);
  const [baby, setBaby] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUser();
    fetchBaby();
  }, []);

  // 🔹 Get logged-in user
  const fetchUser = async () => {
    const userData = await AsyncStorage.getItem('user');
    if (userData) setUser(JSON.parse(userData));
  };

  // 🔹 Get baby profile using AXIOS
  const fetchBaby = async () => {
    try {
      const token = await AsyncStorage.getItem('accessToken');

      const response = await axios.get(BABY_API, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: token ? `Bearer ${token}` : undefined,
        },
      });

      console.log('baby details', response.data);

      // ✅ API RETURNS ARRAY → TAKE FIRST ITEM
      if (Array.isArray(response.data) && response.data.length > 0) {
        setBaby(response.data[0]);
      } else {
        setBaby(null);
      }
    } catch (error) {
      console.log('Baby API error:', error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Calculate age in days
  const calculateAgeInDays = dob => {
    if (!dob) return '--';
    const birthDate = new Date(dob);
    const today = new Date();
    const diffTime = today - birthDate;
    return Math.floor(diffTime / (1000 * 60 * 60 * 24));
  };

  const formatDOB = dob => {
    if (!dob) return '--';

    const date = new Date(dob);

    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  };

  const handleLogout = () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      {text: 'Cancel', style: 'cancel'},
      {
        text: 'Logout',
        style: 'destructive',
        onPress: async () => {
          try {
            // ✅ Remove stored data
            await AsyncStorage.multiRemove(['accessToken', 'user', 'baby']);

            // ✅ Navigate to Login (reset stack)
            navigation.reset({
              index: 0,
              routes: [{name: 'Login'}],
            });
          } catch (error) {
            console.log('Logout error:', error);
          }
        },
      },
    ]);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Top Icons */}
      <View style={styles.topRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.icon}>←</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogout}>
          <Text style={styles.icon}>⤴</Text>
        </TouchableOpacity>
      </View>

      {/* Avatar */}
      <View style={styles.avatarWrapper}>
        <Image
          source={{uri: 'https://i.pravatar.cc/150?img=12'}}
          style={styles.avatar}
        />
      </View>

      {/* User Info */}
      <Text style={styles.name}>{baby?.name || '--'}</Text>

      {/* <Text style={styles.email}>{user?.email || 'cooper33@hotmail.com'}</Text> */}

      {/* Baby Stats */}
      <View style={styles.statsRow}>
        <View style={[styles.statBox, styles.activeBox]}>
          <Text style={styles.statNumber}>
            {loading ? '--' : `${calculateAgeInDays(baby?.dateOfBirth)} days`}
          </Text>
          <Text style={styles.statLabel}>Age</Text>
        </View>

        <View style={styles.statBox}>
          <Text style={styles.statNumber}>
            {loading ? '--' : `${baby?.currentWeight || '--'} Kg`}
          </Text>
          <Text style={styles.statLabel}>Current Weight</Text>
        </View>

        <View style={styles.statBox}>
          <Text style={styles.statNumber}>
            {loading ? '--' : baby?.gender || '--'}
          </Text>
          <Text style={styles.statLabel}>Gender</Text>
        </View>
      </View>

      {/* Settings */}
      <View style={styles.settingsCard}>
        <SettingItem
          title="Parent Name"
          subtitle={user?.name || 'Bessie Cooper'}
        />
        <SettingItem
          title="DOB"
          subtitle={baby?.dateOfBirth ? formatDOB(baby.dateOfBirth) : '--'}
        />

        <SettingItem title="Settings" subtitle="Security, Privacy" />
      </View>
    </ScrollView>
  );
};

const SettingItem = ({title, subtitle}) => (
  <TouchableOpacity style={styles.settingItem}>
    <View>
      <Text style={styles.settingTitle}>{title}</Text>
      <Text style={styles.settingSub}>{subtitle}</Text>
    </View>
    <Text style={styles.arrow}>›</Text>
  </TouchableOpacity>
);

export default ProfileDetails;
