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
    marginTop: 8,
    fontSize: 14,
    color: '#94A3B8',
    textAlign: 'center',
    marginBottom: 30,
  },
  planCard: {
    backgroundColor: '#1E293B',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
  },
  highlightedCard: {
    borderWidth: 2,
    borderColor: '#EF4444',
  },
  planTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 6,
  },
  price: {
    fontSize: 18,
    fontWeight: '700',
    color: '#38BDF8',
    marginBottom: 14,
  },
  feature: {
    fontSize: 14,
    color: '#CBD5E1',
    marginBottom: 8,
  },
  selectButton: {
    marginTop: 16,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#475569',
  },
  highlightedButton: {
    backgroundColor: '#EF4444',
    borderColor: '#EF4444',
  },
  selectButtonText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: '#CBD5E1',
  },
  highlightedButtonText: {
    color: '#FFFFFF',
  },
});
