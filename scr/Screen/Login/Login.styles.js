import {StyleSheet} from 'react-native';
import Colors from '../../Utils/Colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg_color,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },

  logoContainer: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: '#1E293B',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },

  logoEmoji: {
    fontSize: 42,
  },

  title: {
    fontSize: 34,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: 2,
  },

  subtitle: {
    fontSize: 15,
    color: '#94A3B8',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 36,
    lineHeight: 22,
    maxWidth: 280,
  },

  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 24,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 8,
  },

  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F8FAFC',
    paddingVertical: 14,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },

  googleIcon: {
    width: 22,
    height: 22,
    marginRight: 12,
  },

  googleText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0F172A',
  },

  loadingBox: {
    alignItems: 'center',
    paddingVertical: 20,
  },

  successText: {
    marginTop: 16,
    fontSize: 17,
    fontWeight: '700',
    color: '#16A34A',
  },

  loadingText: {
    marginTop: 6,
    fontSize: 14,
    color: '#64748B',
  },

  footerText: {
    marginTop: 28,
    fontSize: 12,
    color: '#64748B',
    textAlign: 'center',
    maxWidth: 280,
  },
});


export default styles;
