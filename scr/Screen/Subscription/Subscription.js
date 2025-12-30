import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import styles from './Subscription.styles';

const PlanCard = ({title, price, features, highlighted}) => {
  return (
    <View style={[styles.planCard, highlighted && styles.highlightedCard]}>
      <Text style={styles.planTitle}>{title}</Text>
      <Text style={styles.price}>{price}</Text>

      {features.map((item, index) => (
        <Text key={index} style={styles.feature}>
          ✓ {item}
        </Text>
      ))}

      <TouchableOpacity
        style={[
          styles.selectButton,
          highlighted && styles.highlightedButton,
        ]}
        activeOpacity={0.85}>
        <Text
          style={[
            styles.selectButtonText,
            highlighted && styles.highlightedButtonText,
          ]}>
          Choose Plan
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const Subscription = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>Upgrade Your Plan</Text>
      <Text style={styles.subtitle}>
        Get deeper insights into your baby’s needs
      </Text>

      <PlanCard
        title="Free"
        price="$0 / month"
        features={[
          'Limited cry analysis',
          'Basic history',
          'Community support',
        ]}
      />

      <PlanCard
        title="Premium"
        price="$9.99 / month"
        highlighted
        features={[
          'Unlimited cry analysis',
          'Detailed baby history',
          'AI-powered insights',
          'Priority support',
        ]}
      />

      <PlanCard
        title="Family"
        price="$19.99 / month"
        features={[
          'Multiple baby profiles',
          'Advanced analytics',
          'Export history',
          '24/7 support',
        ]}
      />
    </ScrollView>
  );
};

export default Subscription;
