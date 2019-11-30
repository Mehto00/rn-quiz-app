import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [startGameView, setStartGameView] = useState(true);
  const [playerNameView, setplayerNameView] = useState(true);
  const [value, onChangeText] = useState('Useless Placeholder');


  const startGameViewHandler = () => {
    setStartGameView(false);
  };

  const setplayerNameViewHandler = () => {
    setplayerNameView(false);
  };

  return (
    <View style={styles.container}>
      {startGameView ? (
        <View>
          <View style={styles.headingContainer}>
            <Text style={styles.heading}>Kärppä Quiz</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              style={styles.startButton}
              title="Aloita peli"
              onPress={startGameViewHandler}
            />
          </View>
        </View>
      ) : (
        <View>
          <Text style={styles.heading}>Anna pelaajan nimi</Text>
          <TextInput
            style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
            onChangeText={text => onChangeText(text)}
            value={value}
          />
           <Button
              style={styles.startButton}
              title="Pelaamaan"
              onPress={setplayerNameView}
            />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  headingContainer: {
    marginBottom: 20
  },
  heading: {
    fontSize: 36,
    fontWeight: "bold"
  },
  buttonContainer: {}
});
