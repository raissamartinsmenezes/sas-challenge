import React from 'react';
import { StyleSheet, Text } from 'react-native';

import Button from '../components/Button';

const Result = ({ navigation }) => {
  return (
      <>
        <Text style={styles.title}>Result</Text>
        <Button onClick={() => navigation.navigate('Category')} label="Voltar para Categorias"></Button>
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

export default Result;