import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stash</Text>
      <Text style={styles.subtitle}>Everything you've saved, sorted.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF7F2',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: { fontSize: 40, fontWeight: '700', color: '#1F1B16' },
  subtitle: { fontSize: 16, color: '#6B6259', marginTop: 8 },
});
