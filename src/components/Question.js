import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Question = (props) => {
  return (
    <>
      <Text style={styles.text}>{props.question}</Text>
    </>
  );
};

const styles = StyleSheet.create({ 
  text: {
    color: '#000',
    fontSize: 16,
    marginVertical: 30,
    paddingHorizontal: 16,
    lineHeight: 22,
  }
});

export default Question;