// AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StartScreen from './screens/StartScreen';
import CadastroScreen from './screens/CadastroScreen';
import QuestScreen from './screens/QuestScreen';
import LoginScreen from './screens/LoginScreen';
import IntroScreen from './screens/IntroScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start" screenOptions={{ headerShown: false }}>
<<<<<<< HEAD
        {/* 🚪 Acesso */}
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />

        {/* 🔐 Pós-login/cadastro */}
        <Stack.Screen name="Questionario" component={QuestScreen} />
=======
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="Questionario" component={QuestScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
>>>>>>> ec6c550825214122c4ddf862fb04fadb604f4d32
        <Stack.Screen name="Intro" component={IntroScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
