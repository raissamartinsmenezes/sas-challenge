import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import Button from "../components/Button";
import NumberQuestion from "../components/NumberQuestion";
import Question from "../components/Question";
import Level from "../components/Level";

import { fetchQuestions, resetQuestions } from "../store/slices/questionsSlice";
import { addQuestionToAnswersList } from "../store/slices/answersSlice";

const usedQuestionsIds = [];
const getNextQuestion = (questions, difficulty = "medium") => {
  const questionFiltered = questions.find(
    (question) =>
      question.difficulty === difficulty &&
      !usedQuestionsIds.includes(question.id)
  );

  if(questionFiltered === undefined) {
    alert(" there are no questions available anymore for this criteria")
    return undefined;
  }

  usedQuestionsIds.push(questionFiltered.id);
  return questionFiltered;
};

const MAX_QUESTIONS = 10;

const getNextDifficulty = (currentQuestion, lastAnsweredQuestion) => {
  if(!lastAnsweredQuestion) {
    return 'medium'
  }
 
  const questionsHaveSameDifficulty = currentQuestion.difficulty === lastAnsweredQuestion.difficulty
  if (currentQuestion.correct) {
    if (questionsHaveSameDifficulty && lastAnsweredQuestion.correct) {
      // incrementDifficulty()
      return 'hard'
    }
  } else {
    if (questionsHaveSameDifficulty && !lastAnsweredQuestion.correct) {
      // decrementDifficulty()
      return 'easy'
    }
  }
}

const Quizz = ({ route, navigation }) => {
  const { categoryId } = route.params;
  const id = JSON.stringify(categoryId);

  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questions.list);
  const [currentQuestion, setCurrentQuestion] = useState();
  const [lastAnsweredQuestion, setLastAnsweredQuestion] = useState(); 
  const [isCurrentAnswerCorrect, setIsCurrentAnswerCorrect] = useState();
  const [questionIndex, setQuestionIndex] = useState(1);

  useEffect(() => {
    if(id) {
      dispatch(fetchQuestions(id))
    }
  }, [dispatch, id])

  useEffect(() => {
    if (questions.length > 0) {
      const initialQuestion = getNextQuestion(questions);
      setCurrentQuestion(initialQuestion);
    }
  }, [questions]);

  const onQuestionAnswered = () => {
    const result = isCurrentAnswerCorrect === true ? "acertou" : "errou";
    alert("Você " + result);
    
    const questionAnswered = {
      difficulty: currentQuestion.difficulty,
      correct: isCurrentAnswerCorrect,
      date: new Date().toISOString()   
    }

    let difficulty = getNextDifficulty(questionAnswered, lastAnsweredQuestion);

    dispatch(addQuestionToAnswersList(questionAnswered));

    if (questionIndex === MAX_QUESTIONS) {
      dispatch(resetQuestions())
      navigation.navigate("Resultado");
    } else {
      const nextQuestion = getNextQuestion(questions, difficulty);
      setCurrentQuestion(nextQuestion);
      setLastAnsweredQuestion(questionAnswered);
      setIsCurrentAnswerCorrect(undefined);

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
        <Button 
          onClick={onQuestionAnswered} 
          label="Responder" 
          backgroundColor='#5A8AE9' 
          textColor='#fff'
          borderWidth={0}
        />
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
