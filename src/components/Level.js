import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Level = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.level}</Text>
    </View>
  );
};

const styles = StyleSheet.create({ 
  container: {
    backgroundColor: '#D6D8DE',
    borderRadius: 14,
  }, 

  text: {
    color: '#343C58',
    fontSize: 12,
    paddingVertical: 3,
    paddingHorizontal: 14
  }
});

export default Level;