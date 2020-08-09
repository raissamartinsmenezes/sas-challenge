import React, { useEffect } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import Button from '../components/Button'
import NumberQuestion from '../components/NumberQuestion'
import Question from '../components/Question'
import Level from '../components/Level'
import Answer from '../components/Answer'

import { addAnswer } from '../store/slices/answersSlice'

const Quizz = ({ route, navigation }) => {
  const { categoryId } = route.params
  const id = JSON.stringify(categoryId)

  const questions = useSelector(state => state.questions)
  const question = questions[0]
  const correctAnswer = questions[0].correct_answer
  const incorretAnswer = questions[0].incorrect_answers

  const answers = useSelector(state => state.answers)
  const dispatch = useDispatch()

  const addAnswerToList = () => {
    dispatch(addAnswer(correctAnswer))
    incorretAnswer.map((incorret) => dispatch(addAnswer(incorret)))
  }

  useEffect(() => {
    addAnswerToList()
  }, []);
 
  return (
      <>
        <View style={styles.box}>
          <NumberQuestion number="1"></NumberQuestion>
          <Level level={question.difficulty}></Level>
        </View>
        <Question question={question.question}></Question>
        <ScrollView>
          {answers.map((answer) => (
            <Answer answer={answer}></Answer>
          ))}
        </ScrollView>
        <View style={styles.footer}>
          <Button onClick={() => navigation.navigate('Resultado')} label="Responder"></Button>
        </View>
      </>
  );
};

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    alignItems: 'center',
    marginTop: 24,
  },
  
  title: {
    color: '#343C58',
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 24,
    marginVertical: 24
  },

  footer: {
    backgroundColor: '#fff',
    height: 76,
    justifyContent: 'center'
  }
});

export default Quizz