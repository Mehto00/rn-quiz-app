import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    <View style={styles.headingContainer}>
      <Text style={styles.heading}>Kärppä Quiz</Text>
    </View>
    <View style={styles.buttonContainer}>
      <Button style={styles.startButton} title="Aloita peli" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingContainer: {
    flex: 1
  },
  heading:{
    fontSize: 36,
    fontWeight: "bold"
  }
});
