import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import StartGameScreen from './screens/StartGameScreen'
import QuestionScreen from './screens/QuestionScreen'

export default function App() {
  const [gameStarted, setGameStarted] = useState(false);

  const startGameHandler = (boolean) => {
    setGameStarted(boolean);
  };
  let content = <StartGameScreen startGameHandler={startGameHandler}/>

  if (gameStarted === true) {
    content = <QuestionScreen />
  }

  return (
    <View style={styles.container}>
      {content}
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
  }
});
