import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  fundo: {
    flex: 1,
    width,
    height,
  },
  rectangle: {
    position: 'absolute',
    width: width,
    height: 728,
    top: 124,
    left: 0,
  },
  personagem: {
    position: 'absolute',
    width: 342,
    height: 284,
    top: 176,
    left: 25,
  },
  texto: {
    position: 'absolute',
    top: 468,
    left: 21,
    width: 351,
    fontSize: 20,
    fontFamily: 'InterMedium',
    color: '#000',
    textAlign: 'center',
  },
  subtexto: {
    position: 'absolute',
    top: 554,
    left: 43,
    fontSize: 20,
    fontFamily: 'InterMedium',
    color: '#000',
    textAlign: 'center',
  },
  dica: {
    position: 'absolute',
    top: 700,
    left: 83,
    width: 226,
    fontSize: 15,
    fontFamily: 'InterRegular',
    color: '#000',
    textAlign: 'center',
  },
  seta: {
    position: 'absolute',
    top: 737,
    left: 180,
    width: 32,
    height: 32,
  },
});
