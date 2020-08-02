import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const TotalResult = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.number}>{props.hits}</Text>
        <Text style={styles.text}>acertos</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.number}>{props.errors}</Text>
        <Text style={styles.text}>erros</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({ 
  container: {
    width: Dimensions.get('window').width - 120,
    backgroundColor: '#D6D8DE',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'center',
    marginVertical: 34
  }, 
  box: {
    alignItems: 'center',
    marginVertical: 9
  },
  text: {
    color: '#343C58',
    fontSize: 13,
  },
  number: {
    color: '#343C58',
    fontSize: 28,
    fontWeight: 'bold'
  },
});

export default TotalResult;