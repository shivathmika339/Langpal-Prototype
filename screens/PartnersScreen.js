import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const partners = [
  { id: '1', name: 'Ana', language: 'Spanish' },
  { id: '2', name: 'Kenji', language: 'Japanese' },
  { id: '3', name: 'Marie', language: 'French' },
  { id: '4', name: 'Luca', language: 'Italian' },
];

export default function PartnersScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Available Language Partners</Text>
      <FlatList
        data={partners}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.lang}>{item.language}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 20, fontWeight: 'bold', marginBottom: 15 },
  card: {
    backgroundColor: '#E8F5E9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: { fontSize: 18, fontWeight: 'bold' },
  lang: { fontSize: 16, color: 'gray' },
});
