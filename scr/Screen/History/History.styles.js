import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
  },
  content: {
    padding: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  subtitle: {
    marginTop: 6,
    fontSize: 14,
    color: '#94A3B8',
    textAlign: 'center',
    marginBottom: 30,
  },
  card: {
    backgroundColor: '#1E293B',
    borderRadius: 16,
    padding: 18,
    marginBottom: 16,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  dateText: {
    fontSize: 12,
    color: '#94A3B8',
  },
  confidence: {
    fontSize: 13,
    color: '#38BDF8',
    fontWeight: '600',
  },
  cryType: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 14,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  label: {
    fontSize: 13,
    color: '#94A3B8',
  },
  value: {
    fontSize: 13,
    color: '#E5E7EB',
    maxWidth: '60%',
    textAlign: 'right',
  },
  feedbackGiven: {
    color: '#22C55E',
    fontWeight: '600',
  },
  bottomButton: {
  position: 'absolute',
  bottom: 20,
  left: 20,
  right: 20,
  backgroundColor: '#EF4444',
  paddingVertical: 16,
  borderRadius: 14,
  alignItems: 'center',
  justifyContent: 'center',
  elevation: 5,
},
bottomButtonText: {
  color: '#FFFFFF',
  fontSize: 16,
  fontWeight: '600',
},

});
