import React from 'react';
import { StyleSheet, TouchableHighlight, Text, Dimensions } from 'react-native';

const Button = (props) => {
  return (
    <TouchableHighlight onPress={props.onClick} underlayColor="none">
        <Text style={getButtonStyles(props.backgroundColor, props.textColor, props.borderWidth)}>{props.label}</Text>
    </TouchableHighlight>
  );
};

const getButtonStyles = (backgroundColor, textColor, borderWidth) => ({
    width: Dimensions.get('window').width - 48, 
    paddingVertical: 11,
    paddingHorizontal: 24,
    textAlign: 'center',
    alignSelf: 'center',
    color: textColor,
    fontWeight: 'bold', 
    fontSize: 16,
    backgroundColor: backgroundColor, 
    borderRadius: 10,
    borderColor: '#78809A',
    borderWidth: borderWidth,
    shadowColor: '#ccc',
    shadowOpacity: 0.15,
    shadowOffset: { width: 1, height: 2 },
});

export default Button;