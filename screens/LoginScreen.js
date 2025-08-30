import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/loginStyles';

const emailValido = (value) => /\S+@\S+\.\S+/.test(value);

const LoginScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);

  // Habilita o botão apenas quando ambos os campos forem válidos
  const podeEntrar = useMemo(() => {
    const okEmail = emailValido(email.trim());
    const okSenha = senha.trim().length >= 6;
    return okEmail && okSenha;
  }, [email, senha]);

  const handleEntrar = () => {
    // Para apresentação: apenas navega quando válido
    if (podeEntrar) navigation.navigate('Intro');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/imagens/login/fundo.png')}
        style={styles.background}
        resizeMode="cover"
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={{ flex: 1 }}
        >
          <ScrollView
            contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-end' }}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            {/* Logo */}
            <View style={styles.logoWrapper}>
              <View style={styles.logoBox}>
                <Image
                  source={require('../assets/imagens/login/logo.png')}
                  style={styles.logo}
                  resizeMode="contain"
                />
              </View>
            </View>

            {/* Card branco */}
            <View style={styles.card}>
              <Text style={styles.title}>Fluenta</Text>

              {/* E-mail */}
              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Endereço de email</Text>
                <TextInput
                  style={styles.input}
                  placeholder="@mail.com"
                  placeholderTextColor="#999"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  value={email}
                  onChangeText={setEmail}
                  returnKeyType="next"
                />
              </View>

              {/* Senha + olhinho */}
              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Senha</Text>
                <View style={styles.passwordWrapper}>
                  <TextInput
                    style={[styles.input, styles.inputPassword]}
                    placeholder="********"
                    placeholderTextColor="#999"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry={!mostrarSenha}
                    returnKeyType="go"
                    onSubmitEditing={handleEntrar}
                  />
                  <TouchableOpacity
                    style={styles.eyeBtn}
                    onPress={() => setMostrarSenha((prev) => !prev)}
                    accessibilityRole="button"
                    accessibilityLabel={mostrarSenha ? 'Ocultar senha' : 'Mostrar senha'}
                  >
                    <Image
                      source={
                        mostrarSenha
                          ? require('../assets/imagens/login/eye-off.png')
                          : require('../assets/imagens/login/eye.png')
                      }
                      style={styles.eyeIcon}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              {/* Botão Login (só habilita quando válido) */}
              <TouchableOpacity
                style={[styles.button, !podeEntrar && styles.buttonDisabled]}
                onPress={handleEntrar}
                disabled={!podeEntrar}
                accessibilityRole="button"
                accessibilityState={{ disabled: !podeEntrar }}
              >
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>

              {/* Links */}
              <Text style={styles.infoText}>
                Esqueceu a senha? <Text style={styles.link}>Clique aqui</Text>
              </Text>
              <Text style={styles.infoText}>
                Não possui uma conta? <Text style={styles.link}>Crie sua conta</Text>
              </Text>

              <Text style={styles.ou}>-- Ou --</Text>

              {/* Google */}
              <View style={styles.googleRow}>
                <Image source={require('../assets/imagens/login/google-colorido.png')} style={styles.googleIcon} />
                <Image source={require('../assets/imagens/login/google-cinza.png')} style={styles.googleIcon} />
                <Image source={require('../assets/imagens/login/google-colorido.png')} style={styles.googleIcon} />
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;
