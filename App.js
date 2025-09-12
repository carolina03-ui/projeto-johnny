import React from 'react';
import AppNavigator from './AppNavigator';
import { useFonts } from 'expo-font';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({
    InterRegular: require('./assets/fonts/Inter_24pt-Regular.ttf'),
    InterMedium: require('./assets/fonts/Inter_24pt-SemiBold.ttf'),
    InterBold: require('./assets/fonts/Inter_24pt-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#00c89c" />
      </View>
    );
  }

  return <AppNavigator />;
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
