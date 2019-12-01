import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const StartGameScreen = props => {
  return (
    <View style={styles.screen}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Kärppä Quiz</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.startButton}
          title="Aloita peli"
          onPress={() => props.startGameHandler(true)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
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

export default StartGameScreen;
