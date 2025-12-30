import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4F46E5', // deep gradient-like base
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 6,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#D1D5DB', // subtle grey
    textAlign: 'center',
    marginBottom: 40,
  },
micWrapper: {
  width: 160,
  height: 160,
  borderRadius: 80,
  backgroundColor: '#6C63FF',
  alignItems: 'center',
  justifyContent: 'center',
  elevation: 10, // Android shadow
  shadowColor: '#000', // iOS shadow
  shadowOpacity: 0.25,
  shadowRadius: 15,
  shadowOffset: { width: 0, height: 8 },
  overflow: 'hidden', // This keeps it perfectly circular
},
  micGlow: {
    position: 'absolute',
    width: 220,
    height: 220,
    borderRadius: 110,
    borderWidth: 4,
    borderColor: '#EF4444',
    opacity: 0.3,
  },
  micIcon: {
    fontSize: 60,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  duration: {
    marginTop: 20,
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '700',
    letterSpacing: 1,
  },
  recordButton: {
    paddingVertical: 16,
    paddingHorizontal: 30,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    backgroundColor: '#EF4444',
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  stopButton: {
    paddingVertical: 16,
    paddingHorizontal: 30,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    backgroundColor: '#10B981',
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 40,
  },
});
