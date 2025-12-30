import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 20,
  },

  /* Header */
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#111827',
  },
  profileIcon: {
    width: 42,
    height: 42,
    borderRadius: 21,
  },

  /* Hero Card */
  heroCard: {
    borderRadius: 28,
    padding: 30,
    alignItems: 'center',
    marginBottom: 30,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 15,
    shadowOffset: {width: 0, height: 8},
    elevation: 10,
  },
  heroIcon: {
    width: 70,
    height: 70,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#FFF',
    marginBottom: 10,
    textAlign: 'center',
  },
  cardSubtitle: {
    fontSize: 15,
    color: '#E0E7FF',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 20,
  },
  listenButton: {
    backgroundColor: '#FFF',
    paddingVertical: 14,
    paddingHorizontal: 50,
    borderRadius: 30,
  },
  listenText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#4F46E5',
  },

  /* Info Cards */
  infoSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  infoCard: {
    width: '48%',
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 18,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: {width: 0, height: 6},
    elevation: 6,
  },
  infoIcon: {
    width: 28,
    height: 28,
    marginBottom: 6,
  },
  infoTitle: {fontSize: 13, color: '#9CA3AF', marginBottom: 6},
  infoValue: {fontSize: 18, fontWeight: '700', color: '#111827'},

  /* Extra Tips Section */
  extraSection: {marginBottom: 30},
  extraTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 12,
  },
  extraCard: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 14,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 6,
    shadowOffset: {width: 0, height: 4},
    elevation: 3,
  },
  extraText: {fontSize: 14, color: '#374151'},

  /* Brands */
  brandSection: {marginBottom: 30},
  brandTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 12,
  },
  brandCard: {alignItems: 'center', marginRight: 12},
  brandCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  brandLogo: {width: 40, height: 40, resizeMode: 'contain'},
  brandName: {
    fontSize: 12,
    color: '#4B5563',
    textAlign: 'center',
    marginTop: 6,
  },

  /* Bottom CTA */
  bottomSection: {marginBottom: 40, alignItems: 'center'},
  bottomTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 12,
  },
  upgradeButton: {
    borderRadius: 30,
    paddingVertical: 14,
    paddingHorizontal: 50,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: {width: 0, height: 6},
  },
  upgradeText: {color: '#FFF', fontSize: 16, fontWeight: '700'},
});

export default styles;
