// services/firebase/config.js
import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyCrJVhKlatATOqUfDWx5FP3CWONVUhdxDQ",
  authDomain: "fluenta-fb.firebaseapp.com",
  projectId: "fluenta-fb",
  storageBucket: "fluenta-fb.appspot.com",   // 👈 corrigido
  messagingSenderId: "513106294079",
  appId: "1:513106294079:web:8c2c89cbf15eb9d7028f8a",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

let auth;
try {
  auth = getAuth();
  if (!auth.app) throw new Error("no-auth");
} catch {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
}

export { app, auth };
