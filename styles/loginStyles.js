import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    width,
    height,
    justifyContent: 'flex-end',
  },
  logoWrapper: {
    position: 'absolute',
    top: height * 0.13,
    width: '100%',
    alignItems: 'center',
    zIndex: 10,
  },
  logoBox: {
    width: 90,
    height: 90,
    backgroundColor: '#fff',
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  logo: {
    width: 68,
    height: 68,
  },
  card: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 100,
    width: '100%',
    paddingTop: 70,
    paddingHorizontal: 36,
    paddingBottom: 40,
    minHeight: height * 0.75,
    alignItems: 'center',
    position: 'relative',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'InterBold',
    marginBottom: 30,
  },
  inputGroup: {
    width: '100%',
    marginBottom: 16,
    fontFamily: 'InterRegular',
  },
  inputLabel: {
    fontSize: 12,
    color: '#000',
    marginBottom: 4,
  },
  input: {
    width: '100%',
    height: 42,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#000',
    paddingHorizontal: 15,
    fontSize: 13,
    color: '#000',
    backgroundColor: '#fff',
  },

  // --- campo de senha ---
  passwordWrapper: {
    position: 'relative',
    justifyContent: 'center',
  },
  inputPassword: {
    paddingRight: 44,
  },
  eyeBtn: {
    position: 'absolute',
    right: 12,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  eyeIcon: {
    width: 20,
    height: 20,
    tintColor: '#666',
  },

  // --- botão login ---
  button: {
    width: 291,
    height: 42,
    backgroundColor: '#00c399',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 16,
  },
  buttonDisabled: {
    opacity: 0.5, // feedback visual quando desabilitado
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },

  // --- textos auxiliares ---
  infoText: {
    fontSize: 12,
    color: '#000',
    marginBottom: 4,
  },
  link: {
    color: '#00c399',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  ou: {
    marginVertical: 16,
    color: '#000',
    fontSize: 12,
  },

  // --- Google login ---
  googleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 240,
  },
  googleIcon: {
    width: 48,
    height: 48,
  },
});
