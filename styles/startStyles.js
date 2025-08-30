import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

const vw = (pct) => (width * pct) / 100;
const vh = (pct) => (height * pct) / 100;
const isSmall = width < 360;

const CIRCLE_L = Math.round(width * 1.45);
const CIRCLE_S = Math.round(width * 1.05);
const CIRCLE_BR = Math.round(width * 1.55);

export default StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  /* ===== DECORAÇÕES GRANDES ===== */
  decTop1: {
    position: 'absolute',
    width: CIRCLE_L,
    height: CIRCLE_L,
    borderRadius: CIRCLE_L / 2,
    top: -CIRCLE_L * 0.58,
    left: -CIRCLE_L * 0.42,
    zIndex: -2,
    resizeMode: 'contain',
  },
  decTop2: {
    position: 'absolute',
    width: CIRCLE_S,
    height: CIRCLE_S,
    borderRadius: CIRCLE_S / 2,
    top: -CIRCLE_S * 0.63,
    left: -CIRCLE_S * 0.18,
    zIndex: -1,
    resizeMode: 'contain',
  },
  decBottom1: {
    position: 'absolute',
    width: CIRCLE_BR,
    height: CIRCLE_BR,
    borderRadius: CIRCLE_BR / 2,
    bottom: -CIRCLE_BR * 0.56,
    right: -CIRCLE_BR * 0.46,
    zIndex: -2,
    resizeMode: 'contain',
  },
  decBottom2: {
    position: 'absolute',
    width: Math.round(CIRCLE_BR * 0.86),
    height: Math.round(CIRCLE_BR * 0.86),
    borderRadius: Math.round(CIRCLE_BR * 0.86) / 2,
    bottom: -CIRCLE_BR * 0.46,
    right: -CIRCLE_BR * 0.30,
    zIndex: -1,
    resizeMode: 'contain',
  },

  /* ===== BOLINHAS ADICIONADAS ===== */
  decTopDot: {
    position: 'absolute',
    width: vw(10),
    height: vw(10),
    borderRadius: vw(10) / 2,
    backgroundColor: '#00AB74',
    top: vh(9),
    left: vw(16),
    zIndex: -1,
  },
  decBottomDot: {
    position: 'absolute',
    width: vw(10),
    height: vw(10),
    borderRadius: vw(10) / 2,
    backgroundColor: '#00C49A',
    bottom: vh(7.5),
    right: vw(14),
    zIndex: -1,
  },

  /* ===== CONTAINER ===== */
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 24,
    paddingBottom: vh(5),
  },
  rectangle: {
    display: 'none',
    width: 0,
    height: 0,
    opacity: 0,
  },
  content: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 12,
  },

  /* ===== LOGO ===== */
  iconBox: {
    width: vw(31),
    height: vw(31),
    borderRadius: 16,
    backgroundColor: '#00C399',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: vh(18),
    marginBottom: 8,
    ...(Platform.OS === 'android'
      ? { elevation: 8 }
      : {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 6 },
          shadowOpacity: 0.18,
          shadowRadius: 10,
        }),
  },
  iconLogo: {
    width: vw(24),
    height: vw(24),
    resizeMode: 'contain',
  },

  /* ===== TEXTO ===== */
  title: {
    fontSize: isSmall ? 26 : 32,
    fontWeight: '700',
    color: '#000',
    textAlign: 'center',
    marginTop: 6,
  },
  subtitle: {
    fontSize: 16,
    color: '#1E1E1E',
    textAlign: 'center',
    lineHeight: 22,
    marginTop: 8,
  },

  /* ===== BOTÕES ===== */
  primaryButton: {
    marginTop: 18,
    width: '100%',
    height: 48,
    borderRadius: 16,
    backgroundColor: '#00C399',
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButtonDisabled: {
    backgroundColor: '#9ADFCC',
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },

  loginLink: {
    marginTop: 14,
    fontSize: 16,
    color: '#1E1E1E',
    textAlign: 'center',
  },
  linkDisabled: {
    color: '#9E9E9E',
  },

  /* ===== TERMOS ===== */
  termsRow: {
    marginTop: 16,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 10,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#00C399',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxOn: {
    backgroundColor: '#00C399',
  },
  checkboxMark: {
    width: 12,
    height: 12,
    borderRadius: 3,
    backgroundColor: '#FFFFFF',
  },
  termsText: {
    flex: 1,
    fontSize: 13,
    color: '#1E1E1E',
    lineHeight: 18,
  },
  termsLink: {
    color: '#00C399',
    textDecorationLine: 'underline',
  },
});