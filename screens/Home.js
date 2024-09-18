// screens/Home.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { ref, onValue } from 'firebase/database';
import { database } from '../config/firebaseConfig'

export default function HomeScreen() {
  const [sensorData, setSensorData] = useState(null);
  const [relayStatus, setRelayStatus] = useState(null);

  useEffect(() => {
    const sensorRef = ref(database, 'sensor');
    const relayRef = ref(database, 'relay');

    const unsubscribeSensor = onValue(sensorRef, (snapshot) => {
      setSensorData(snapshot.val());
    });

    const unsubscribeRelay = onValue(relayRef, (snapshot) => {
      setRelayStatus(snapshot.val());
    });

    return () => {
      unsubscribeSensor();
      unsubscribeRelay();
    };
  }, []);

  if (!sensorData || relayStatus === null) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Nível de Água</Text>
        <Text style={styles.value}>{sensorData} m</Text>

        <Text style={styles.title}>Status da Bomba</Text>
        <View style={[styles.circle, relayStatus ? styles.active : styles.inactive]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5',
  },
  card: {
    width: '90%', padding: 20, backgroundColor: '#fff', borderRadius: 10,
    shadowColor: '#000', shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2, shadowRadius: 10, elevation: 5, alignItems: 'center',
  },
  title: {
    fontSize: 20, fontWeight: 'bold', marginBottom: 10,
  },
  value: {
    fontSize: 18, marginBottom: 20,
  },
  circle: {
    width: 30, height: 30, borderRadius: 15, marginTop: 10,
  },
  active: {
    backgroundColor: 'green',
  },
  inactive: {
    backgroundColor: 'red',
  },
});
