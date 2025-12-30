import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import styles from './History.styles';
import {useNavigation} from '@react-navigation/native';

const DATA = [
  {
    id: '1',
    date: 'Today',
    time: '10:30 AM',
    ageGroup: '3 – 6 months',
    cryType: 'Hungry',
    confidence: 87,
    meaning: 'Baby may need feeding',
    feedback: 'Given',
  },
  {
    id: '2',
    date: 'Yesterday',
    time: '08:15 PM',
    ageGroup: '6 – 9 months',
    cryType: 'Sleepy',
    confidence: 92,
    meaning: 'Baby is tired and needs sleep',
    feedback: 'Not given',
  },
  {
    id: '3',
    date: '20 Aug',
    time: '06:40 AM',
    ageGroup: '1 – 2 years',
    cryType: 'Pain / Discomfort',
    confidence: 79,
    meaning: 'Possible discomfort or pain',
    feedback: 'Given',
  },
];

const HistoryCard = ({item}) => {
  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <Text style={styles.dateText}>
          {item.date} · {item.time}
        </Text>
        <Text style={styles.confidence}>{item.confidence}%</Text>
      </View>

      <Text style={styles.cryType}>{item.cryType}</Text>

      <View style={styles.detailRow}>
        <Text style={styles.label}>Baby Age</Text>
        <Text style={styles.value}>{item.ageGroup}</Text>
      </View>

      <View style={styles.detailRow}>
        <Text style={styles.label}>Meaning</Text>
        <Text style={styles.value}>{item.meaning}</Text>
      </View>

      <View style={styles.detailRow}>
        <Text style={styles.label}>Feedback</Text>
        <Text
          style={[
            styles.value,
            item.feedback === 'Given' && styles.feedbackGiven,
          ]}>
          {item.feedback}
        </Text>
      </View>
    </View>
  );
};

const History = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
        ListHeaderComponent={
          <>
            <Text style={styles.title}>Baby History</Text>
            <Text style={styles.subtitle}>
              Detailed cry analysis records
            </Text>
          </>
        }
        renderItem={({item}) => <HistoryCard item={item} />}
      />

      {/* Fixed Bottom Button */}
      <TouchableOpacity
        style={styles.bottomButton}
        activeOpacity={0.9}
        onPress={() => navigation.navigate('Subscription')}>
        <Text style={styles.bottomButtonText}>Upgrade Plan</Text>
      </TouchableOpacity>
    </View>
  );
};

export default History;
