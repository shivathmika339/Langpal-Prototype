import { Link } from 'expo-router';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Page() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>LangPal</Text>
      <Text style={styles.subtitle}>
        Connect with people worldwide and practice languages in real conversations!
      </Text>

      <TouchableOpacity style={styles.button}>
        <Link href="/partners" style={styles.buttonText}>Find a Partner</Link>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Link href="/profile" style={styles.buttonText}>Go to Profile</Link>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 30, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { textAlign: 'center', color: '#666', marginBottom: 20 },
  button: {
    backgroundColor: '#3ecf8e',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 12,
    marginTop: 10,
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
});
