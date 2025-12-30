import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  Pressable,
  Platform,
  PermissionsAndroid,
  Alert,
  Animated,
  Easing,
  Modal,
  ActivityIndicator,
} from 'react-native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import RNFS from 'react-native-fs';
import LinearGradient from 'react-native-linear-gradient';
import styles from './RecordingScreen.styles';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const audioRecorderPlayer = new AudioRecorderPlayer();

const RecordingScreen = () => {
  const navigation = useNavigation();
  const [recording, setRecording] = useState(false);
  const [audioPath, setAudioPath] = useState(null);
  const [duration, setDuration] = useState('00:00');
  const [uploading, setUploading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const timerRef = useRef(null);

  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (recording) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, { toValue: 1.3, duration: 600, easing: Easing.inOut(Easing.ease), useNativeDriver: true }),
          Animated.timing(pulseAnim, { toValue: 1, duration: 600, easing: Easing.inOut(Easing.ease), useNativeDriver: true }),
        ])
      ).start();
    } else {
      pulseAnim.setValue(1);
    }
  }, [recording]);

  const requestAudioPermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        {
          title: 'Microphone Permission',
          message: 'App needs access to your microphone to record audio',
          buttonPositive: 'OK',
        }
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
    return true;
  };

  const resetRecordingState = () => {
    setRecording(false);
    setAudioPath(null);
    setDuration('00:00');
    setSeconds(0);
    setModalVisible(false);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const startRecording = async () => {
    try {
      const hasPermission = await requestAudioPermission();
      if (!hasPermission) {
        Alert.alert('Permission denied', 'Cannot record without microphone permission');
        return;
      }

      const path = Platform.select({
        android: `${RNFS.DocumentDirectoryPath}/baby_cry_${Date.now()}.mp3`,
        ios: `${RNFS.DocumentDirectoryPath}/baby_cry_${Date.now()}.m4a`,
      });

      setAudioPath(path);
      setRecording(true);
      setSeconds(0);
      setDuration('00:00');

      await audioRecorderPlayer.startRecorder(path);

      // Start timer
      timerRef.current = setInterval(() => {
        setSeconds(prev => {
          const newSec = prev + 1;
          const mm = String(Math.floor(newSec / 60)).padStart(2, '0');
          const ss = String(newSec % 60).padStart(2, '0');
          setDuration(`${mm}:${ss}`);
          return newSec;
        });
      }, 1000);
    } catch (err) {
      console.log('START ERROR:', err);
    }
  };

  const stopRecording = async () => {
    try {
      if (!recording) return;

      const result = await audioRecorderPlayer.stopRecorder();
      audioRecorderPlayer.removeRecordBackListener();
      setRecording(false);
      setAudioPath(result);
      setModalVisible(true);

      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }

      console.log('Recording saved at:', result, 'Duration:', duration);
    } catch (err) {
      console.log('STOP ERROR:', err);
    }
  };

  const uploadAudio = async () => {
    if (!audioPath) return;
    setUploading(true);

    try {
      const babyId = await AsyncStorage.getItem('babyId');
      const token = await AsyncStorage.getItem('accessToken');

      if (!babyId || !token) {
        Alert.alert('Error', 'No baby selected or access token missing.');
        setUploading(false);
        return;
      }

      const fileName = audioPath.split('/').pop();
      const fileType = Platform.OS === 'android' ? 'audio/mpeg' : 'audio/m4a';

      const formData = new FormData();
      formData.append('babyId', babyId);
      formData.append('duration', duration); // send as mm:ss
      formData.append('audio', {
        uri: Platform.OS === 'android' ? audioPath : audioPath.replace('file://', ''),
        type: fileType,
        name: fileName,
      });

      const response = await axios.post(
        'http://192.168.1.8:4000/api/baby-cry',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log('Upload Success:', response.data);
      Alert.alert('Success', 'Audio uploaded successfully!', [
        {
          text: 'OK',
          onPress: () => {
            resetRecordingState();
            navigation.navigate('ProcessingScreen'); // replace 'NextScreen' with your target screen
          },
        },
      ]);
    } catch (err) {
      console.log('Upload Error:', err.response?.data || err.message);
      Alert.alert('Error', 'Failed to upload audio');
      setUploading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Record Your Baby’s Cry</Text>
      <Text style={styles.subtitle}>Press the buttons below to start and stop recording</Text>

      <Animated.View style={{ transform: [{ scale: pulseAnim }] }}>
        <LinearGradient colors={['#6C63FF', '#4F46E5']} style={styles.micWrapper}>
          <Text style={styles.micIcon}>{recording ? '⏺️' : '🎤'}</Text>
        </LinearGradient>
      </Animated.View>

      <Text style={styles.duration}>{duration}</Text>

      <View style={styles.buttonsContainer}>
        <Pressable
          style={[styles.recordButton, recording && { backgroundColor: '#EF4444' }]}
          onPress={startRecording}
        >
          <Text style={styles.buttonText}>Start Recording</Text>
        </Pressable>

        <Pressable
          style={[styles.stopButton, { marginLeft: 20 }]}
          onPress={stopRecording}
        >
          <Text style={styles.buttonText}>Stop Recording</Text>
        </Pressable>
      </View>

      {audioPath && (
        <Text style={{ marginTop: 20, color: '#fff', fontSize: 12 }}>File path: {audioPath}</Text>
      )}

      <Modal transparent visible={modalVisible} animationType="fade">
        <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', justifyContent: 'center', alignItems: 'center', padding: 20 }}>
          <View style={{ backgroundColor: '#fff', borderRadius: 15, padding: 20, width: '100%', alignItems: 'center' }}>
            <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 15 }}>Upload Recording?</Text>
            {uploading ? (
              <ActivityIndicator size="large" color="#6C63FF" />
            ) : (
              <>
                <Pressable
                  style={[styles.recordButton, { width: '80%', marginBottom: 10 }]}
                  onPress={uploadAudio}
                >
                  <Text style={styles.buttonText}>Upload</Text>
                </Pressable>
                <Pressable
                  style={[styles.stopButton, { width: '80%' }]}
                  onPress={resetRecordingState}
                >
                  <Text style={styles.buttonText}>Cancel</Text>
                </Pressable>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default RecordingScreen;
