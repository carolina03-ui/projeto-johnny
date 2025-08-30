import React, { useMemo, useState } from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/startStyles';

const StartScreen = () => {
  const navigation = useNavigation();
  const [aceitouTermos, setAceitouTermos] = useState(false);

  const podeAvancar = useMemo(() => !!aceitouTermos, [aceitouTermos]);

  // 👉 Agora vai para a tela "Cadastro"
  const handleComecar = () => {
    if (!podeAvancar) return;
    navigation.navigate('Cadastro');
  };

  // 👉 "Já tenho uma conta" continua indo para "Login"
  const handleLogin = () => {
    if (!podeAvancar) return;
    navigation.navigate('Login');
  };

  return (
    <View style={styles.root}>
      {/* Decorações do topo */}
      <Image source={require('../assets/imagens/start/circulo-3.png')} style={styles.decTop1} />
      <Image source={require('../assets/imagens/start/circulo-4.png')} style={styles.decTop2} />

      {/* Área central */}
      <View style={styles.container}>
        {/* Rectangle verde (fundo) */}
        <Image
          source={require('../assets/imagens/start/balao-fundo.png')}
          style={styles.rectangle}
        />

        {/* Conteúdo */}
        <View style={styles.content}>
          {/* Ícone do app */}
          <View style={styles.iconBox}>
            {/* Se puder, renomeie o arquivo para 'logo-1.png' para evitar espaços no caminho */}
            <Image source={require('../assets/imagens/start/logo 1.png')} style={styles.iconLogo} />
          </View>

          {/* Título e subtítulo */}
          <Text style={styles.title}>Fluenta</Text>
          <Text style={styles.subtitle}>
            O seu app #1 quando o assunto é{'\n'}fluencia
          </Text>

          {/* Botão "Começar" → Cadastro */}
          <TouchableOpacity
            style={[styles.primaryButton, !podeAvancar && styles.primaryButtonDisabled]}
            onPress={handleComecar}
            disabled={!podeAvancar}
            accessibilityRole="button"
            accessibilityState={{ disabled: !podeAvancar }}
          >
            <Text style={styles.primaryButtonText}>Começar</Text>
          </TouchableOpacity>

          {/* "Já tenho uma conta" → Login */}
          <TouchableOpacity
            onPress={handleLogin}
            disabled={!podeAvancar}
            accessibilityRole="button"
            accessibilityState={{ disabled: !podeAvancar }}
          >
            <Text style={[styles.loginLink, !podeAvancar && styles.linkDisabled]}>
              Já tenho uma conta
            </Text>
          </TouchableOpacity>

          {/* Termos + checkbox */}
          <View style={styles.termsRow}>
            <TouchableOpacity
              style={[styles.checkbox, aceitouTermos && styles.checkboxOn]}
              onPress={() => setAceitouTermos(v => !v)}
              accessibilityRole="checkbox"
              accessibilityState={{ checked: aceitouTermos }}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              {aceitouTermos && <View style={styles.checkboxMark} />}
            </TouchableOpacity>

            <Text style={styles.termsText}>
              Eu aceito os{' '}
              <Text
                style={styles.termsLink}
                onPress={() => Linking.openURL('https://example.com/termos')}
              >
                Termos de Serviço
              </Text>{' '}
              e a{' '}
              <Text
                style={styles.termsLink}
                onPress={() => Linking.openURL('https://example.com/privacidade')}
              >
                Política de Privacidade
              </Text>
              .
            </Text>
          </View>
        </View>
      </View>

      {/* Decorações de base */}
      <Image source={require('../assets/imagens/start/circulo-1.png')} style={styles.decBottom1} />
      <Image source={require('../assets/imagens/start/circulo-2.png')} style={styles.decBottom2} />
    </View>
  );
};

export default StartScreen;
