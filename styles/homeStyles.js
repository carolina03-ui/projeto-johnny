import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    width: 393,
    height: 852,
    backgroundColor: '#FFFFFF',
    position: 'relative',
  },

  configIcon: {
    position: 'absolute',
    top: 41,
    left: 31,
    width: 26,
    height: 26,
    resizeMode: 'contain',
  },

  perfilIcon: {
    position: 'absolute',
    top: 41,
    left: 337,
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },

  progressWrapper: {
    position: 'absolute',
    top: 53,
    left: 99,
    width: 195,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  progressBar: {
    width: 195,
    height: 30,
    resizeMode: 'contain',
  },

  progressFill: {
    position: 'absolute',
    width: 121,
    height: 11,
    top: 9,
    left: 57,
    resizeMode: 'contain',
  },

  progressText: {
    position: 'absolute',
    top: 6,
    left: 29,
    fontSize: 13,
    color: '#000',
    fontFamily: 'Inter-Regular',
  },

  character: {
    position: 'absolute',
    top: 204,
    left: 94,
    width: 205,
    height: 212,
    resizeMode: 'contain',
  },

  word: {
    position: 'absolute',
    top: 447,
    left: 144,
    fontSize: 26,
    fontFamily: 'Inter-Medium',
    color: '#000',
  },

  pronunciationBox: {
    position: 'absolute',
    top: 492,
    left: 142,
    width: 119,
    height: 21,
    backgroundColor: '#d2f5e4',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  pronunciation: {
    fontSize: 13,
    fontFamily: 'Inter-Regular',
    color: '#000',
  },

  translation: {
    position: 'absolute',
    top: 519,
    left: 93,
    fontSize: 17,
    fontFamily: 'Inter-Regular',
    color: '#000',
    textAlign: 'center',
  },

  definition: {
    position: 'absolute',
    top: 548,
    left: 39,
    fontSize: 15,
    fontFamily: 'Inter-Light',
    color: '#000',
    textAlign: 'center',
  },

  example: {
    position: 'absolute',
    top: 574,
    left: 119,
    fontSize: 15,
    fontFamily: 'Inter-Light',
    color: '#000',
    textAlign: 'center',
  },

  compartilharIcon: {
    position: 'absolute',
    top: 643,
    left: 123,
    width: 33,
    height: 33,
    resizeMode: 'contain',
  },

  salvarIcon: {
    position: 'absolute',
    top: 643,
    left: 234,
    width: 33,
    height: 33,
    resizeMode: 'contain',
  },

  swipe: {
    position: 'absolute',
    top: 717,
    left: 135,
    fontSize: 15,
    fontFamily: 'Inter-Light',
    color: '#000000cc',
  },

  setaIcon: {
    position: 'absolute',
    top: 737,
    left: 187,
    width: 32,
    height: 32,
    resizeMode: 'contain',
  },
});
