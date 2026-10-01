import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

export default function HomeScreen() {
  const [name, setName] = useState('');
  const [regNo, setRegNo] = useState('');
  const [cgpa, setCgpa] = useState(3.0);

  const increaseCgpa = () => {
    setCgpa((value) => Math.min(4.0, +(value + 0.1).toFixed(1)));
  };

  const decreaseCgpa = () => {
    setCgpa((value) => Math.max(0, +(value - 0.1).toFixed(1)));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Student Profile</Text>
        <Text style={styles.subtitle}>Expo Mobile Application</Text>

        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>Registration No.</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter registration number"
          value={regNo}
          onChangeText={setRegNo}
        />

        <Text style={styles.label}>CGPA</Text>

        <View style={styles.counter}>
          <View style={styles.button}>
            <Button title="−" onPress={decreaseCgpa} />
          </View>

          <Text style={styles.cgpa}>{cgpa.toFixed(1)}</Text>

          <View style={styles.button}>
            <Button title="+" onPress={increaseCgpa} />
          </View>
        </View>

        <View style={styles.submit}>
          <Button title="Submit" onPress={() => {}} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f5f9',
    justifyContent: 'center',
    padding: 20,
  },

  card: {
    backgroundColor: 'white',
    padding: 24,
    borderRadius: 18,
    elevation: 4,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 6,
  },

  subtitle: {
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 25,
    color: '#666',
  },

  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 7,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 12,
    marginBottom: 18,
    fontSize: 16,
  },

  counter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 25,
    marginBottom: 25,
  },

  button: {
    width: 55,
  },

  cgpa: {
    fontSize: 28,
    fontWeight: 'bold',
    minWidth: 60,
    textAlign: 'center',
  },

  submit: {
    marginTop: 5,
  },
});
