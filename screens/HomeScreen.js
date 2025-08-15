import React from 'react';
import styles from '../styles/homeStyles';
import { View, Text, Image, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* ÍCONES TOPO */}
      <Image source={require('../assets/imagens/home/config.png')} style={styles.configIcon} />
      <Image source={require('../assets/imagens/home/perfil.png')} style={styles.perfilIcon} />

      {/* BARRA DE PROGRESSO */}
      <View style={styles.progressWrapper}>
        <Image source={require('../assets/imagens/home/barraverde.png')} style={styles.progressBar} />
        <Image source={require('../assets/imagens/home/barramenor.png')} style={styles.progressFill} />
        <Text style={styles.progressText}>0/5</Text>
      </View>

      {/* PERSONAGEM */}
      <Image source={require('../assets/imagens/home/personagem.png')} style={styles.character} />

      {/* PALAVRA */}
      <Text style={styles.word}>Mischief</Text>

      {/* PRONÚNCIA */}
      <View style={styles.pronunciationBox}>
        <Text style={styles.pronunciation}>mɪs.tʃɪf</Text>
      </View>

      {/* TRADUÇÃO */}
      <Text style={styles.translation}>(n.) travessura, arte, dano</Text>

      {/* DEFINIÇÃO */}
      <Text style={styles.definition}>Ato ou comportamento brincalhão e travesso</Text>

      {/* FRASE EXTRA */}
      <Text style={styles.example}>(Just a bit of mischief)</Text>

      {/* AÇÕES */}
      <Image source={require('../assets/imagens/home/compartilhar.png')} style={styles.compartilharIcon} />
      <Image source={require('../assets/imagens/home/salvar.png')} style={styles.salvarIcon} />

      {/* SWIPE */}
      <Text style={styles.swipe}>Deslize para cima</Text>
      <Image source={require('../assets/imagens/home/setacima.png')} style={styles.setaIcon} />
    </View>
  );
};

export default HomeScreen;
