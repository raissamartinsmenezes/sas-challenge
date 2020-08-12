import React, { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import Button from "../components/Button";
import NumberQuestion from "../components/NumberQuestion";
import Question from "../components/Question";
import Level from "../components/Level";
import Answer from "../components/Answer";

// import { addAnswer } from '../store/slices/answersSlice'
import { addQuestion } from "../store/slices/questionSlice";

const usedQuestionsIds = [];
const getQuestionByDifficulty = (questions, difficulty = "medium") => {
  const questionFiltered = questions.find(
    (question) =>
      question.difficulty === difficulty &&
      !usedQuestionsIds.includes(question.id)
  );

  if(questionFiltered === undefined) {
    //  faltou questoes
    alert(" there are no questions available anymore for this criteria")
    return undefined;
  }

  usedQuestionsIds.push(questionFiltered.id);
  return questionFiltered;
};

const getNextQuestion = (questions) => {
  // aqui vai ter uma logica pra definir a prox questao
  return getQuestionByDifficulty(questions);
};

const MAX_QUESTIONS = 10;

const Quizz = ({ route, navigation }) => {
  // 1. category id
  const { categoryId } = route.params;
  const id = JSON.stringify(categoryId);

  // 2. getQuestions by id - API

  const questions = useSelector((state) => state.questions);
  const [currentQuestion, setCurrentQuestion] = useState();
  const [isCurrentAnswerCorrect, setIsCurrentAnswerCorrect] = useState();
  const [questionIndex, setQuestionIndex] = useState(1);
  // const dispatch = useDispatch();

  useEffect(() => {
    if (questions) {
      const initialQuestion = getNextQuestion(questions);
      setCurrentQuestion(initialQuestion);
    }
  }, [questions]);

  const onQuestionAnswered = () => {
    //  checar se a resposta esta correta
    const result = isCurrentAnswerCorrect === true ? "acertou" : " errou";
    // apresetnar feedback pro usuario
    alert("Voce " + result + " mizeravi!!!");
    // checa se chegamos na ultima pergunta
    if (questionIndex === MAX_QUESTIONS) {
      //  SIM => vai pra resultados
      navigation.navigate("Resultado");
    } else {
      //  NAO => soma contador, pedir proxima pergunta
      const nextQuestion = getNextQuestion(questions);
      setCurrentQuestion(nextQuestion);
      setIsCurrentAnswerCorrect(undefined);
      // adicionar currentQuestion + isCorrect + new Date() timestamp da hora que respondeu no records
      setQuestionIndex(questionIndex + 1);
    }
  };

  const Loading = () => (
    <View style={styles.box}>
      <Text>Loading quizz...</Text>
    </View>
  );

  if (!currentQuestion) {
    return <Loading />;
  }

  return (
    <>
      <View style={styles.box}>
        <NumberQuestion number={questionIndex} />
        <Level level={currentQuestion.difficulty} />
      </View>

      <Question
        question={currentQuestion}
        onSelectAnswer={setIsCurrentAnswerCorrect}
      />
      <View style={styles.footer}>
        <Button onClick={onQuestionAnswered} label="Responder" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  box: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    alignItems: "center",
    marginTop: 24,
  },

  title: {
    color: "#343C58",
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 24,
    marginVertical: 24,
  },

  footer: {
    backgroundColor: "#fff",
    height: 76,
    justifyContent: "center",
  },
});

export default Quizz;
