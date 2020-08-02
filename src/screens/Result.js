import React from 'react';
import { StyleSheet, Text, Image, View, Dimensions, ScrollView } from 'react-native';

import Button from '../components/Button';
import TotalResult from '../components/TotalResult';
import ResultPerLevel from '../components/ResultPerLevel';

const Result = ({ navigation }) => {
  return (
      <ScrollView>
        <Image
          style={styles.image}
          source={require('../images/header.png')}
        ></Image>
        <View style={styles.box}>
          <Text style={styles.title}>Veja seu desempenho nas questões</Text>
        </View>
        <TotalResult hits='5' errors='3'></TotalResult>
        <ResultPerLevel></ResultPerLevel>
        <Button onClick={() => navigation.navigate('Dev Mobile')} label="Voltar ao início"></Button>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#343C58',
    fontSize: 14,
    fontWeight: 'bold',
    paddingVertical: 10,
    textAlign: 'center',
  },

  image: {
    width: Dimensions.get('window').width,
    height: 168,
    resizeMode: 'contain',
  },

  box: {
    width: Dimensions.get('window').width - 66, 
    marginTop: 12,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#343C58',
    alignSelf: 'center'
  }
});

export default Result;