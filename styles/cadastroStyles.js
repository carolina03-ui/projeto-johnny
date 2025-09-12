import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const P = width * 0.06; // padding base responsivo

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  topBar: {
    height: 48,
    justifyContent: 'center',
    paddingHorizontal: P,
  },
  backBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backText: { fontSize: 18, color: '#1E1E1E' },

  heroCard: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#C4EAD9',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    paddingVertical: 18,
    paddingHorizontal: 16,
    width: width - P * 2,
  },
  heroTextBox: { flex: 1, paddingRight: 8 },
  heroTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1E1E1E',
    marginBottom: 4,
  },
  heroSubtitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1E1E1E',
  },
  heroOwl: {
    width: 70,
    height: 72,
  },

  form: {
    flex: 1,
    paddingHorizontal: P,
    paddingTop: 16,
  },

  label: {
    fontSize: 12,
    color: '#1E1E1E',
    marginBottom: 6,
  },
  mt12: { marginTop: 12 },

  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#1E1E1E',
    height: 44,
    paddingHorizontal: 14,
    backgroundColor: '#FFFFFF',
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#1E1E1E',
  },
  eyeBtn: {
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  eyeIcon: { width: 20, height: 20 },

  error: {
    marginTop: 6,
    color: '#D64545',
    fontSize: 12,
  },

  cta: {
    marginTop: 18,
    height: 48,
    borderRadius: 16,
    backgroundColor: '#00C399',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ctaDisabled: { backgroundColor: '#A4E6D8' },
  ctaText: { color: '#FFF', fontSize: 14, fontWeight: '700' },

  orRow: {
    marginTop: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  hr: { height: 1, backgroundColor: '#1E1E1E', width: 48, opacity: 0.8 },
  orText: { fontSize: 12, color: '#1E1E1E' },

  socialRow: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: width * 0.18,
  },
  socialIcon: { width: 40, height: 40, borderRadius: 20 },

  // ondas decorativas (baseado no seu HTML)
  waves: {
    position: 'absolute',
    bottom: 0,
    width,
    height: Math.max(100, height * 0.12),
    flexDirection: 'row',
  },
  wave: {
    width: width / 4,
    height: '100%',
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
  },
  wave1: { backgroundColor: '#00AB74' },
  wave2: { backgroundColor: '#00C49A' },
  wave3: { backgroundColor: '#00AB74' },
  wave4: { backgroundColor: '#00C49A' },
});
