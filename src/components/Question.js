import React, { useState } from "react";
import { StyleSheet, Text, ScrollView } from "react-native";
import Answer from "./Answer";

const Question = ({ question, onSelectAnswer }) => {
  const { description, answers = [], correctAnswer } = question;
  const [selectedAnswer, setSelectedAnswer] = useState();
  return (
    <>
      <Text style={styles.text}>{description}</Text>
      <ScrollView>
        {answers.map((answer) => (
          <Answer
            key={answer.id}
            answer={answer}
            isSelected={selectedAnswer === answer}
            onClick={() => {
              setSelectedAnswer(answer);
              const isCorrectAnswer = correctAnswer === answer;
              onSelectAnswer(isCorrectAnswer);
            }}
          />
        ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#000",
    fontSize: 16,
    marginVertical: 30,
    paddingHorizontal: 16,
    lineHeight: 22,
  },
});

export default Question;
