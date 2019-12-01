import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const QuestionScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.question}>Tarjoillaanko tilaisuudessa punaviiniä?</Text>
      <View style={styles.answerOptionsContainer}>
        <View style={styles.answerRow}>
          <Text style={styles.answerText}>Kyllä</Text>
          <Button style={styles.answerButton} title="A" color='#FEE169'></Button>
          <Text style={styles.answerText}>Ei</Text>
          <Button style={styles.answerButton} title="B" color='#FEE169'></Button>
        </View>
        <View style={styles.answerRow}>
          <Text style={styles.answerText}>Ehkä</Text>
          <Button style={styles.answerButton} title="C" color='#FEE169'></Button>
          <Text style={styles.answerText}>Tuopista</Text>
          <Button style={styles.answerButton} title="D" color='#FEE169'></Button>
        </View>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  answerOptionsContainer: {
    flexDirection: 'column', 
    flexWrap: 'nowrap',
  },
  question: {
    marginBottom: 20
  },
  answerText: {
    marginTop: 10,
    marginBottom: 5
  },
});

export default QuestionScreen;
