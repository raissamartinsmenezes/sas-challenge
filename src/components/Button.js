import React from 'react';
import { StyleSheet, TouchableHighlight, Text, Dimensions } from 'react-native';

const Button = (props) => {
  return (
    <TouchableHighlight onPress={props.onClick}>
        <Text style={styles.button}>{props.label}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    width: Dimensions.get('window').width - 48, 
    paddingVertical: 11,
    paddingHorizontal: 24,
    textAlign: 'center',
    alignSelf: 'center',
    color: '#78809A',
    fontWeight: 'bold', 
    fontSize: 16,
    backgroundColor: '#fff', 
    borderRadius: 10,
    borderColor: '#78809A',
    borderWidth: 1,
    shadowColor: '#ccc',
    shadowOpacity: 0.15,
    shadowOffset: { width: 1, height: 2 },
  },
});

export default Button;