import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#343C58',
    height: 56,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginStart: 24,
  }
});

export default Header;