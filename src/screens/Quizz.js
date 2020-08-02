import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import Button from '../components/Button';
import NumberQuestion from '../components/NumberQuestion';
import Question from '../components/Question';
import Level from '../components/Level';
import Answer from '../components/Answer';

const quest = 'Qual a alternativa que apresenta características das atividades do homem na fase neolítica?';

const questionsMock = [
  {
    category: 'Geography',
    type: 'multiple',
    difficulty: 'easy',
    question: 'What is the capital of Spain?',
    correct_answer: 'Madrid',
    incorrect_answers: ['Os homens praticavam uma economia coletora de alimentos.', 'Os homens fabricavam seus instrumentos para obtenção de alimentos e abrigo.', 'Os homens fabricavam seus instrumentos para obtenção de alimentos e abrigo.'],
  },
  {
    category: 'Geography',
    type: 'multiple',
    difficulty: 'medium',
    question: 'What is the capital of Estonia?',
    correct_answer: 'Tallinn',
    incorrect_answers: ['Os homens praticavam uma economia coletora de alimentos.', 'Tartu', 'Riga'],
  },
  {
    category: 'Geography',
    type: 'multiple',
    difficulty: 'hard',
    question: 'Which country is the Taedong River in?',
    correct_answer: 'North Korea',
    incorrect_answers: ['Os homens praticavam uma economia coletora de alimentos.', 'Japan', 'China'],
  },
  {
    category: 'Geography',
    type: 'multiple',
    difficulty: 'easy',
    question: 'What is the capital of Spain?',
    correct_answer: 'Madrid',
    incorrect_answers: ['Os homens praticavam uma economia coletora de alimentos.', 'Os homens fabricavam seus instrumentos para obtenção de alimentos e abrigo.', 'Os homens fabricavam seus instrumentos para obtenção de alimentos e abrigo.'],
  },
  {
    category: 'Geography',
    type: 'multiple',
    difficulty: 'medium',
    question: 'What is the capital of Estonia?',
    correct_answer: 'Tallinn',
    incorrect_answers: ['Os homens praticavam uma economia coletora de alimentos.', 'Tartu', 'Riga'],
  },
  {
    category: 'Geography',
    type: 'multiple',
    difficulty: 'hard',
    question: 'Which country is the Taedong River in?',
    correct_answer: 'North Korea',
    incorrect_answers: ['Os homens praticavam uma economia coletora de alimentos.', 'Japan', 'China'],
  }
]

const Quizz = ({ navigation }) => {
  return (
      <>
        <View style={styles.box}>
          <NumberQuestion number="1"></NumberQuestion>
          <Level level="Difícil"></Level>
        </View>
        <Question question={quest}></Question>
        <ScrollView>
          {questionsMock.map((a) => (
            <Answer answer={a.incorrect_answers[0]}></Answer>
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

export default Quizz;