import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
    padding: 24,
    justifyContent: 'center',
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
    marginBottom: 40,
  },
  resultCard: {
    backgroundColor: '#1E293B',
    borderRadius: 16,
    padding: 24,
    marginBottom: 40,
    alignItems: 'center',
  },
  resultLabel: {
    fontSize: 14,
    color: '#94A3B8',
  },
  resultValue: {
    fontSize: 28,
    fontWeight: '700',
    color: '#22C55E',
    marginTop: 6,
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: '#334155',
    marginVertical: 20,
  },
  confidenceValue: {
    fontSize: 36,
    fontWeight: '700',
    color: '#38BDF8',
    marginTop: 6,
  },
  primaryButton: {
    backgroundColor: '#6f44efff',
    paddingVertical: 14,
    borderRadius: 12,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: '#475569',
    paddingVertical: 14,
    borderRadius: 12,
    marginBottom: 14,
  },
  secondaryButtonText: {
    color: '#CBD5E1',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
});
