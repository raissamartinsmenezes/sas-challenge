import React from 'react';
import { StyleSheet, TouchableHighlight, Text, Dimensions } from 'react-native';

const Answer = (props) => {
  return (
    <TouchableHighlight onPress={props.onClick}>
        <Text style={styles.button}>{props.answer}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    width: Dimensions.get('window').width - 48, 
    padding: 19,
    marginBottom: 16,
    textAlign: 'left',
    alignSelf: 'center',
    color: '#000',
    fontSize: 14,
    backgroundColor: '#fff', 
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    },
});

export default Answer;