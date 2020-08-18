import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const ResultPerLevel = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.label}>Fácil</Text>
        <Text style={styles.text}>Acertos: {props.totalEasyHits}</Text>
        <Text style={styles.text}>Erros: {props.totalEasyError}</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.label}>Médio</Text>
        <Text style={styles.text}>Acertos: {props.totalMediumHits}</Text>
        <Text style={styles.text}>Erros: {props.totalMediumError}</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.label}>Difícil</Text>
        <Text style={styles.text}>Acertos: {props.totalHardHits}</Text>
        <Text style={styles.text}>Erros: {props.totalHardError}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({ 
  container: {
    width: Dimensions.get('window').width - 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'center',
    marginBottom: 25
  }, 
  box: {
    alignItems: 'flex-start',
  },
  text: {
    color: '#343C58',
    fontSize: 14,
  },
  label: {
    color: '#343C58',
    fontSize: 14,
    fontWeight: 'bold'
  }
});

export default ResultPerLevel;