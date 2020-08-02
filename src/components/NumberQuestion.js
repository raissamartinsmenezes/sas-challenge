import React from 'react';
import { StyleSheet, Text } from 'react-native';

const NumberQuestion = (props) => {
  return (
    <>
      <Text style={styles.text}>Questão {props.number}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#343C58',
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default NumberQuestion;