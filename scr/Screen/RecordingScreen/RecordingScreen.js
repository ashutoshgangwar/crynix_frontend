import { View, Text, Pressable } from 'react-native'
import React from 'react'
import styles from './RecordingScreen.styles'
import { useNavigation } from '@react-navigation/native'

const RecordingScreen = () => {
  const navigation = useNavigation()

  const handleRecordPress = () => {
    // later you can start recording here
    navigation.navigate('ProcessingScreen')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Record Your Voice</Text>
      <Text style={styles.subtitle}>
        Tap the button below to start recording
      </Text>

      <Pressable
        style={styles.micButton}
        onPress={handleRecordPress}
      >
        <View style={styles.innerCircle}>
          <Text style={styles.micIcon}>🎤</Text>
        </View>
      </Pressable>

      <Text style={styles.hint}>Press and hold to record</Text>
    </View>
  )
}

export default RecordingScreen
