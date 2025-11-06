import { View, Text, StyleSheet } from 'react-native';

export default function Partners() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find a Partner</Text>
      <Text style={styles.text}>Here you’ll see a list of language partners (mock data).</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  text: { color: '#555' },
});
