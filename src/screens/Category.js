import React from 'react'; 
import { useSelector } from 'react-redux';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Dimensions } from 'react-native';

import Button from '../components/Button';

const Category = ({ navigation }) => {
  const categories = useSelector(state => state.categories);

  return (
      <SafeAreaView>
          <StatusBar translucent barStyle="dark-content"/>
          <Text style={styles.title}>Categorias</Text>
          <View style={styles.buttons}>
            {categories.map((category) => (
              <Button 
                onClick={() => navigation.navigate('Quizz', {categoryId: category.id})} 
                key={category.id} 
                label={category.category}
                backgroundColor='#fff' 
                textColor='#78809A'
                borderWidth={1}
              />
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