import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFF',
    padding: 20,
  },

  /* Header */
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },

  headerTitle: {
    fontSize: 30,
    fontWeight: '800',
    color: '#2D2D2D',
  },

  profileIcon: {
    width: 38,
    height: 38,
    tintColor: '#2D2D2D',
  },

  /* Hero Card */
  heroCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 26,
    alignItems: 'center',
    marginBottom: 30,

    // Shadow (iOS)
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },

    // Elevation (Android)
    elevation: 6,
  },

  heroIcon: {
    width: 64,
    height: 64,
    marginBottom: 16,
  },

  cardTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 8,
  },

  cardSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 24,
  },

  listenButton: {
    backgroundColor: '#4F46E5',
    paddingVertical: 14,
    paddingHorizontal: 46,
    borderRadius: 30,
  },

  listenText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },

  /* Info Section */
  infoSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  infoCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 18,
    alignItems: 'center',

    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },

  infoTitle: {
    fontSize: 13,
    color: '#9CA3AF',
    marginBottom: 6,
  },

  infoValue: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
  },
});

export default styles;
