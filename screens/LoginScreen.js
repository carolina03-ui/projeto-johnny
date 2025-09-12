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
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/loginStyles';

// Firebase
import { auth } from '../services/firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';

const emailValido = (value) => /\S+@\S+\.\S+/.test(value);

const LoginScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const podeEntrar = useMemo(() => {
    const okEmail = emailValido(email.trim());
    const okSenha = senha.trim().length >= 6;
    return okEmail && okSenha;
  }, [email, senha]);

  const handleEntrar = async () => {
    if (!podeEntrar) return;

    try {
      const { user } = await signInWithEmailAndPassword(
        auth,
        email.trim(),
        senha
      );
      console.log('✅ Login OK:', user.uid);
      Alert.alert('Login OK', 'Bem-vindo de volta!');
      navigation.navigate('Intro');
    } catch (e) {
      console.log('❌ Erro login:', e.code, e.message);
      Alert.alert('Erro no login', e.message || 'Erro desconhecido');
    }
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
                  value={email}
                  onChangeText={setEmail}
                />
              </View>

              {/* Senha */}
              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Senha</Text>
                <View style={styles.passwordWrapper}>
                  <TextInput
                    style={[styles.input, styles.inputPassword]}
                    placeholder="********"
                    placeholderTextColor="#999"
                    autoCapitalize="none"
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry={!mostrarSenha}
                    onSubmitEditing={handleEntrar}
                  />
                  <TouchableOpacity
                    style={styles.eyeBtn}
                    onPress={() => setMostrarSenha((prev) => !prev)}
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

              {/* Botão Login */}
              <TouchableOpacity
                style={[styles.button, !podeEntrar && styles.buttonDisabled]}
                onPress={handleEntrar}
                disabled={!podeEntrar}
              >
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;
