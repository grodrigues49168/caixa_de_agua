// screens/Login.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebaseConfig';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        Alert.alert('Sucesso', 'Logado com sucesso!');
        setTimeout(() => {
          navigation.navigate('Home');
        }, 5000);
      })
      .catch((error) => {
        Alert.alert('Erro', error.message);
      });
  };

  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <Text style={styles.logo}>LOGO</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
    screen: {
      flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5',
    },
    card: {
      width: '90%', padding: 20, backgroundColor: '#fff', borderRadius: 10,
      shadowColor: '#000', shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.2, shadowRadius: 10, elevation: 5, alignItems: 'center',
    },
    title: {
      fontSize: 24, fontWeight: 'bold', marginBottom: 20,
    },
    input: {
      width: '100%', height: 40, borderColor: '#ccc', borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginBottom: 10,
    },
    button: {
      width: '100%', padding: 15, backgroundColor: '#D616F3', borderRadius: 30, alignItems: 'center',
    },
    buttonText: {
      color: '#fff', fontSize: 16, fontWeight: 'bold',
    },
  });