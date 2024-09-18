import React from 'react';
import { View, Text, Linking, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function AboutScreen() {
  const scale = new Animated.Value(1);

  const animateButton = () => {
    Animated.sequence([
      Animated.timing(scale, { toValue: 1.1, duration: 100, useNativeDriver: true }),
      Animated.timing(scale, { toValue: 1, duration: 100, useNativeDriver: true }),
    ]).start();
  };

  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <Text style={styles.title}>Sobre o App</Text>
        <Text style={styles.description}>App para monitorar o nível de caixas d'água.</Text>
        <Animated.View style={{ transform: [{ scale }] }}>
          <TouchableOpacity
            onPress={() => {
              animateButton();
              Linking.openURL('https://github.com/seu-github');
            }}
            style={styles.button}
          >
            <FontAwesome name="github" size={40} color="blue" />
            <Text style={styles.buttonText}>GitHub</Text>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View style={{ transform: [{ scale }] }}>
          <TouchableOpacity
            onPress={() => {
              animateButton();
              Linking.openURL('https://linkedin.com/in/seu-linkedin');
            }}
            style={styles.button}
          >
            <FontAwesome name="linkedin" size={40} color="blue" />
            <Text style={styles.buttonText}>LinkedIn</Text>
          </TouchableOpacity>
        </Animated.View>
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
    fontSize: 24, marginBottom: 20,
  },
  description: {
    fontSize: 16, textAlign: 'center', marginBottom: 20,
  },
  button: {
    flexDirection: 'row', alignItems: 'center', marginVertical: 10,
  },
  buttonText: {
    fontSize: 18, color: 'blue', marginLeft: 10,
  },
});
