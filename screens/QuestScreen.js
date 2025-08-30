// src/screens/QuestionarioScreen.js
import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/questStyles';

const OPCOES = [
  { id: 'basico',   label: 'Quero aprender só o básico.',        icon: require('../assets/imagens/quest/basico.png') },
  { id: 'girias',   label: 'Quero me garantir nas gírias',       icon: require('../assets/imagens/quest/girias.png') },
  { id: 'familia',  label: 'Quero ver coisas de família',        icon: require('../assets/imagens/quest/familia.png') },
  { id: 'rotina',   label: 'Quero ver palavras para rotina',     icon: require('../assets/imagens/quest/rotina.png') },
  { id: 'trabalho', label: 'Quero ver palavras para trabalho',   icon: require('../assets/imagens/quest/trabalho.png') },
  { id: 'escola',   label: 'Quero ver para escola e estudo',     icon: require('../assets/imagens/quest/escola.png') },
  { id: 'outros',   label: 'Outros',                              icon: require('../assets/imagens/quest/outros.png') },
];

export default function QuestionarioScreen() {
  const navigation = useNavigation();

  const [preferencias, setPreferencias] = useState([]);

  const toggle = (id) => {
    setPreferencias((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  // Agora só depende de ter pelo menos 1 preferência
  const podeContinuar = useMemo(() => preferencias.length > 0, [preferencias]);

  // 👉 PULAR: navega imediatamente (ajuste 'Intro' para 'Home' se preferir)
  const onPular = () => {
    navigation.navigate('Intro');
  };

  const onContinuar = () => {
    if (!podeContinuar) return;
    navigation.navigate('Intro'); // ou 'Home'
  };

  return (
    <View style={styles.container}>
      {/* Topo */}
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>{'<'}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onPular} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Text style={styles.skipText}>Pular</Text>
        </TouchableOpacity>
      </View>

      {/* Pergunta */}
      <View style={styles.headerRow}>
        <Image
          source={require('../assets/imagens/quest/flu-mini.png')}
          style={styles.headerIcon}
          resizeMode="contain"
        />
        <Text style={styles.headerTitle}>
          Que tipo de palavra você espera encontrar aqui no Flu?
        </Text>
      </View>

      {/* Lista de chips */}
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {OPCOES.map((op) => {
          const on = preferencias.includes(op.id);
          return (
            <TouchableOpacity
              key={op.id}
              onPress={() => toggle(op.id)}
              style={[styles.chip, on && styles.chipOn]}
              activeOpacity={0.9}
            >
              <Image source={op.icon} style={[styles.chipIcon, on && styles.chipIconOn]} />
              <Text style={[styles.chipText, on && styles.chipTextOn]}>{op.label}</Text>
            </TouchableOpacity>
          );
        })}

        <View style={{ height: 16 }} />
      </ScrollView>

      {/* Botão Continuar */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.cta, !podeContinuar && styles.ctaDisabled]}
          disabled={!podeContinuar}
          onPress={onContinuar}
        >
          <Text style={styles.ctaText}>Continuar</Text>
        </TouchableOpacity>
      </View>

      {/* Ondas decorativas */}
      <View style={styles.waves}>
        <View style={[styles.wave, styles.wave1]} />
        <View style={[styles.wave, styles.wave2]} />
        <View style={[styles.wave, styles.wave3]} />
        <View style={[styles.wave, styles.wave4]} />
      </View>
    </View>
  );
}
