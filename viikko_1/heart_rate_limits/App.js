import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, Button, Text, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [age, setAge] = useState("");
  const [result, setResult] = useState("");

  const calculate = () => {
    if (isNaN(age)) {
      setResult("Age must be a number");
    } else if (age < 0) {
      setResult("Age must be a non-negative number");
    } else if (age > 120) {
      setResult("Heart rate limits are only defined for people under 120 years old");
    } else {
      const maxHeartRate = 220 - age;
      const lowerLimit = Math.round(maxHeartRate * 0.65);
      const upperLimit = Math.round(maxHeartRate * 0.85);
      setResult(`${lowerLimit} - ${upperLimit}`);
    }
    
  }

  return (
    <View style={[styles.container, styles.textAndInput]}>
      <Text style={styles.textAndInput}>Age</Text>
      <TextInput
        style={[styles.textAndInput, styles.input]}
        onChangeText={text => setAge(text)}
        value={age}
      />
      <Text style={styles.textAndInput}>Limits</Text>
      <Text style={styles.textAndInput}>{result}</Text>
      <Button title="Calculate" onPress={() => calculate()}>Calculate</Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'left',
    justifyContent: 'top',
    margin: 20,
  },
  textAndInput: {
    fontSize: 20,
    marginBottom: 10
  },
  input: {
    backgroundColor: '#ddd',
    cursorColor: 'black',
  }
});


