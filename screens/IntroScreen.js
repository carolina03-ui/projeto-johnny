import React, { useRef } from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  Animated,
  PanResponder,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/introStyles';

const IntroScreen = () => {
  const navigation = useNavigation();
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) => {
        // Ativa se o gesto é vertical e puxando pra cima
        return Math.abs(gestureState.dy) > 20;
      },
      onPanResponderRelease: (_, gesture) => {
        if (gesture.dy < -80) {
          navigation.navigate('Home'); // deslizou pra cima → vai pra Home
        }
      },
    })
  ).current;

  return (
    <View style={styles.container} {...panResponder.panHandlers}>
      <ImageBackground
        source={require('../assets/imagens/intro/fundo.png')}
        style={styles.fundo}
        resizeMode="cover"
      >
        <Image source={require('../assets/imagens/intro/Rectangle7.png')} style={styles.rectangle} />
        <Image source={require('../assets/imagens/intro/flubalao.png')} style={styles.personagem} />

        <Text style={styles.texto}>
          Eu sou a Flu! Estou aqui para enriquecer seu vocabulário e te ajudar a praticar Inglês.
        </Text>

        <Text style={styles.subtexto}>Inicie esse aprendizado comigo!</Text>

        <Text style={styles.dica}>Deslize para cima para começar</Text>

        <Image source={require('../assets/imagens/intro/setacima.png')} style={styles.seta} />
      </ImageBackground>
    </View>
  );
};

export default IntroScreen;
