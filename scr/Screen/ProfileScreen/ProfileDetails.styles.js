import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecaddeff',
    paddingHorizontal: 20,
  },

  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },

  icon: {
    fontSize: 22,
    color: '#111',
  },

  avatarWrapper: {
    alignItems: 'center',
    marginTop: 20,
  },

  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: '#fff',
  },

  name: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 12,
  },

  email: {
    fontSize: 14,
    color: '#9CA3AF',
    textAlign: 'center',
    marginTop: 4,
  },

  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },

  statBox: {
    width: '30%',
    backgroundColor: '#b69efcff',
    borderRadius: 20,
    paddingVertical: 18,
    alignItems: 'center',
  },

  activeBox: {
   backgroundColor: '#b69efcff',
  },

  statNumber: {
    fontSize: 22,
    fontWeight: '700',
  color: '#960165ff',
  },

  statLabel: {
    fontSize: 13,
    marginTop: 4,
    fontWeight: 'bold',
    color: '#e911a1ff',
  },

  settingsCard: {
    backgroundColor: '#fff',
    borderRadius: 24,
    marginTop: 30,
    paddingHorizontal: 20,
  },

  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F1F1',
  },

  settingTitle: {
    fontSize: 16,
    fontWeight: '600',
  },

  settingSub: {
    fontSize: 13,
    color: '#9CA3AF',
    marginTop: 2,
  },

  arrow: {
    fontSize: 22,
    color: '#9CA3AF',
  },
});

export default styles;
