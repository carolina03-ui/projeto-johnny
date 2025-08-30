import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const P = width * 0.06; // padding responsivo

export default StyleSheet.create({
  // base
  container: {
    flex: 1,
    backgroundColor: '#FBFFFD',
  },

  // topo
  topBar: {
    height: 56,
    paddingHorizontal: P,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backBtn: { padding: 4 },
  backText: { fontSize: 18, color: '#1E1E1E' },
  skipText: { fontSize: 18, color: '#000', opacity: 0.65 },

  // pergunta + ícone
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: P,
    marginTop: 4,
    marginBottom: 12,
  },
  headerIcon: { width: 28, height: 28, marginRight: 10 },
  headerTitle: { flex: 1, fontSize: 17, fontWeight: '600', color: '#1E1E1E' },

  // lista de opções
  scroll: { flex: 1 },
  scrollContent: { paddingHorizontal: P, paddingTop: 12 },

  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 44,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#9C9C9C',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 14,
    marginBottom: 12,
  },
  chipOn: {
    borderColor: '#00C399',
    backgroundColor: '#EAF9F5',
  },
  chipIcon: { width: 28, height: 28, marginRight: 12, tintColor: '#09A099' },
  chipIconOn: { tintColor: '#00C399' },
  chipText: { fontSize: 15, color: '#1E1E1E', fontWeight: '500' },
  chipTextOn: { color: '#00C399' },

  // footer / CTA
  footer: {
    paddingHorizontal: P,
    paddingTop: 8,
    paddingBottom: Math.max(32, height * 0.30),
  },
  cta: {
    height: 48,
    borderRadius: 16,
    backgroundColor: '#00C399',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ctaDisabled: { backgroundColor: '#A4E6D8' },
  ctaText: { color: '#FFFFFF', fontSize: 14, fontWeight: '700' },

  // ondas decorativas (rodapé)
  waves: {
    position: 'absolute',
    bottom: 0,
    width,
    height: Math.max(100, height * 0.12),
    flexDirection: 'row',
  },
  wave: {
    width: width / 4,
    height: '100%',
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
  },
  wave1: { backgroundColor: '#00AB74' },
  wave2: { backgroundColor: '#00C49A' },
  wave3: { backgroundColor: '#00AB74' },
  wave4: { backgroundColor: '#00C49A' },
});
