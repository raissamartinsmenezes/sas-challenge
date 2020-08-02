import React from 'react';
import { StyleSheet, Text } from 'react-native';

import Button from '../components/Button';

const Quizz = ({ navigation }) => {
  return (
      <>
        <Text style={styles.title}>Quizz</Text>
        <Button onClick={() => navigation.navigate('Result')} label="Responder"></Button>
      </>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#343C58',
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 24,
    marginVertical: 24
  }
});

export default Quizz;