import React from 'react'; 
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Dimensions } from 'react-native';

// import Header from '../components/Header'
import Button from '../components/Button';

const categoriesMock = [
  { id: 23, category: 'Historia' },
  { id: 22, category: 'Geografia' },
  { id: 20, category: 'Mitologia' },
  { id: 21, category: 'Esportes' },
  { id: 24, category: 'Politica' },
  { id: 9, category: 'Conhecimentos gerais' },
]

const Category = ({ navigation }) => {
  return (
      <SafeAreaView>
          <StatusBar translucent barStyle="dark-content"/>
          {/* <Header title="Dev Mobile"/> */}
          <Text style={styles.title}>Categorias</Text>
          <View style={styles.buttons}>
            {categoriesMock.map((c) => (
              <Button onClick={() => navigation.navigate('Quizz')} key={c.id} label={c.category}></Button>
            ))}
          </View>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#343C58',
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 24,
    marginVertical: 24
  },
  buttons: {
    height: Dimensions.get('window').height - 220, 
    justifyContent: 'space-between',
  }
});

export default Category;