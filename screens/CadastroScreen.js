import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/cadastroStyles';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

export default function CadastroScreen() {
  const navigation = useNavigation();

  const [nome, setNome] = useState('');
  const [emailCadastro, setEmailCadastro] = useState('');
  const [senha1, setSenha1] = useState('');
  const [senha2, setSenha2] = useState('');
  const [mostrarSenha1, setMostrarSenha1] = useState(false);
  const [mostrarSenha2, setMostrarSenha2] = useState(false);

  // Gate para habilitar o botão (independe de exibir erro na tela)
  const podeContinuar = useMemo(() => {
    const nomeOk = nome.trim().length > 0;
    const emailOk =
      emailCadastro.trim().length > 0 && emailRegex.test(emailCadastro);
    const senha1Ok = senha1.length >= 6; // mínimo 6
    const senha2Ok = senha2 === senha1 && senha2.length >= 6;
    return nomeOk && emailOk && senha1Ok && senha2Ok;
  }, [nome, emailCadastro, senha1, senha2]);

  // Mensagens de erro (UI)
  const erros = useMemo(() => {
    const e = {};
    if (!nome.trim()) e.nome = 'Informe seu nome.';
    // E-mail: só mostra se digitou e ficou inválido
    if (emailCadastro.length > 0 && !emailRegex.test(emailCadastro)) {
      e.email = 'E-mail inválido.';
    }
    if (senha1.length < 6) e.senha1 = 'Mínimo de 6 caracteres.';
    if (senha2 !== senha1) e.senha2 = 'As senhas não conferem.';
    return e;
  }, [nome, emailCadastro, senha1, senha2]);

  // 👉 leva para a tela de Questionário
  const onContinuar = () => {
    if (!podeContinuar) return;
    navigation.navigate('Questionario');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.select({ ios: 'padding', android: undefined })}
    >
      {/* Topo */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={styles.backText}>{'<'}</Text>
        </TouchableOpacity>
      </View>

      {/* Card destaque com mascote */}
      <View style={styles.heroCard}>
        <View style={styles.heroTextBox}>
          <Text style={styles.heroTitle}>Queremos você aqui com a gente!</Text>
          <Text style={styles.heroSubtitle}>
            Faça seu cadastro e seja um membro bando
          </Text>
        </View>
        <Image
          source={require('../assets/imagens/cadastro/flu.png')}
          style={styles.heroOwl}
          resizeMode="contain"
        />
      </View>

      {/* Formulário */}
      <View style={styles.form}>
        {/* Nome */}
        <Text style={styles.label}>Nome</Text>
        <View style={styles.inputBox}>
          <TextInput
            style={styles.input}
            value={nome}
            onChangeText={setNome}
            placeholder=""
            placeholderTextColor="#999"
          />
        </View>
        {erros.nome ? <Text style={styles.error}>{erros.nome}</Text> : null}

        {/* E-mail */}
        <Text style={[styles.label, styles.mt12]}>Endereço de email</Text>
        <View style={styles.inputBox}>
          <TextInput
            style={styles.input}
            value={emailCadastro}
            onChangeText={setEmailCadastro}
            placeholder="@mail.com"
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="#999"
          />
        </View>
        {erros.email ? <Text style={styles.error}>{erros.email}</Text> : null}

        {/* Senha */}
        <Text style={[styles.label, styles.mt12]}>Senha</Text>
        <View style={styles.inputBox}>
          <TextInput
            style={styles.input}
            value={senha1}
            onChangeText={setSenha1}
            placeholder="**********"
            secureTextEntry={!mostrarSenha1}
            placeholderTextColor="#999"
          />
          <TouchableOpacity
            onPress={() => setMostrarSenha1(v => !v)}
            style={styles.eyeBtn}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Image
              source={
                mostrarSenha1
                  ? require('../assets/imagens/cadastro/eye.png')
                  : require('../assets/imagens/cadastro/eye-off.png')
              }
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
        </View>
        {erros.senha1 ? <Text style={styles.error}>{erros.senha1}</Text> : null}

        {/* Confirmar Senha */}
        <Text style={[styles.label, styles.mt12]}>Confirmar Senha</Text>
        <View style={styles.inputBox}>
          <TextInput
            style={styles.input}
            value={senha2}
            onChangeText={setSenha2}
            placeholder="**********"
            secureTextEntry={!mostrarSenha2}
            placeholderTextColor="#999"
          />
          <TouchableOpacity
            onPress={() => setMostrarSenha2(v => !v)}
            style={styles.eyeBtn}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Image
              source={
                mostrarSenha2
                  ? require('../assets/imagens/cadastro/eye.png')
                  : require('../assets/imagens/cadastro/eye-off.png')
              }
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
        </View>
        {erros.senha2 ? <Text style={styles.error}>{erros.senha2}</Text> : null}

        {/* CTA */}
        <TouchableOpacity
          style={[styles.cta, !podeContinuar && styles.ctaDisabled]}
          disabled={!podeContinuar}
          onPress={onContinuar}
        >
          <Text style={styles.ctaText}>Continuar</Text>
        </TouchableOpacity>

        {/* OU + ícones (layout) */}
        <View style={styles.orRow}>
          <View style={styles.hr} />
          <Text style={styles.orText}>Ou</Text>
          <View style={styles.hr} />
        </View>

        <View style={styles.socialRow}>
          <Image source={require('../assets/imagens/cadastro/google1.png')} style={styles.socialIcon} />
          <Image source={require('../assets/imagens/cadastro/google2.png')} style={styles.socialIcon} />
          <Image source={require('../assets/imagens/cadastro/google3.png')} style={styles.socialIcon} />
        </View>
      </View>

      {/* Rodapé decorativo */}
      <View style={styles.waves}>
        <View style={[styles.wave, styles.wave1]} />
        <View style={[styles.wave, styles.wave2]} />
        <View style={[styles.wave, styles.wave3]} />
        <View style={[styles.wave, styles.wave4]} />
      </View>
    </KeyboardAvoidingView>
  );
}
