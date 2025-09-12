// screens/LoginTest.js
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, StyleSheet, Alert } from "react-native";
import { auth } from "../services/firebase/config"; // <- CONFERE o caminho!
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export default function LoginTest() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const guard = () => {
    if (!email || !pass) { Alert.alert("Ops", "Preencha e-mail e senha"); return false; }
    return true;
  };

  const signUp = async () => {
    if (!guard()) return;
    try {
      setLoading(true); setMsg("Cadastrando…"); console.log("signUp() email=", email);
      const { user } = await createUserWithEmailAndPassword(auth, email.trim(), pass);
      console.log("✅ signUp OK:", user.uid);
      setMsg("Cadastro OK: " + user.uid);
      Alert.alert("Cadastro OK", user.uid);
    } catch (e) {
      console.warn("❌ signUp erro:", e);
      Alert.alert("Erro cadastro", e?.code || e?.message || String(e));
      setMsg("Erro: " + (e?.code || e?.message));
    } finally { setLoading(false); }
  };

  const signIn = async () => {
    if (!guard()) return;
    try {
      setLoading(true); setMsg("Entrando…"); console.log("signIn() email=", email);
      const { user } = await signInWithEmailAndPassword(auth, email.trim(), pass);
      console.log("✅ signIn OK:", user.uid);
      setMsg("Login OK: " + user.uid);
      Alert.alert("Login OK", user.uid);
    } catch (e) {
      console.warn("❌ signIn erro:", e);
      Alert.alert("Erro login", e?.code || e?.message || String(e));
      setMsg("Erro: " + (e?.code || e?.message));
    } finally { setLoading(false); }
  };

  return (
    <View style={s.wrap}>
      <Text style={s.title}>Teste Firebase</Text>
      <TextInput style={s.input} placeholder="Email" autoCapitalize="none" keyboardType="email-address" value={email} onChangeText={setEmail}/>
      <TextInput style={s.input} placeholder="Senha" secureTextEntry value={pass} onChangeText={setPass}/>
      <View style={s.row}>
        <TouchableOpacity style={s.btn} onPress={signUp} disabled={loading}><Text style={s.btnTxt}>Cadastrar</Text></TouchableOpacity>
        <TouchableOpacity style={s.btn} onPress={signIn} disabled={loading}><Text style={s.btnTxt}>Entrar</Text></TouchableOpacity>
      </View>
      {loading && <ActivityIndicator style={{marginTop:10}}/>}
      {!!msg && <Text style={s.msg}>{msg}</Text>}
    </View>
  );
}

const s = StyleSheet.create({
  wrap:{flex:1,justifyContent:"center",alignItems:"center",padding:24,backgroundColor:"#0B0B0C"},
  title:{color:"#fff",fontSize:22,fontWeight:"700",marginBottom:8},
  input:{width:"100%",backgroundColor:"#1C1C1E",borderRadius:12,padding:14,color:"#fff",marginBottom:10},
  row:{flexDirection:"row",gap:10},
  btn:{backgroundColor:"#4F46E5",paddingVertical:12,paddingHorizontal:16,borderRadius:12},
  btnTxt:{color:"#fff",fontWeight:"600"},
  msg:{marginTop:10,color:"#9AE6B4"}
});
