import React from 'react';
import { View, Text, TouchableOpacity, Image, Switch, StyleSheet } from 'react-native';

export default function HomeScreen({ darkMode, setDarkMode }) {
  return (
    <View style={[styles.container, darkMode && { backgroundColor: '#222' }]}>
      <Image
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Duolingo_logo.png' }}
        style={styles.logo}
      />
      <Text style={[styles.title, darkMode && { color: '#fff' }]}>Welcome to LangPal</Text>
      <Text style={[styles.subtitle, darkMode && { color: '#bbb' }]}>
        Connect with people and practice languages together!
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Find a Partner</Text>
      </TouchableOpacity>

      <View style={styles.toggleRow}>
        <Text style={[styles.toggleText, darkMode && { color: '#fff' }]}>Dark Mode</Text>
        <Switch value={darkMode} onValueChange={() => setDarkMode(!darkMode)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  logo: { width: 100, height: 100, marginBottom: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 16, textAlign: 'center', marginBottom: 30 },
  button: { backgroundColor: '#4CAF50', padding: 15, borderRadius: 10 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  toggleRow: { flexDirection: 'row', alignItems: 'center', marginTop: 30 },
  toggleText: { fontSize: 16, marginRight: 10 },
});
