import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: 90,
    height: 90,
    marginBottom: 20,
  },

  title: {
    fontSize: 38,
    fontWeight: '800',
    color: '#000',
    letterSpacing: 1,
  },

  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,
    textAlign: 'center',
    paddingHorizontal: 40,
  },
});

export default styles;
