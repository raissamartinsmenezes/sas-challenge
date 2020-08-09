import React, { useEffect, useState } from 'react' 
import { useSelector, useDispatch } from 'react-redux'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Dimensions } from 'react-native'

// import Header from '../components/Header'
import Button from '../components/Button'

import { changeFirstCategoryName } from '../store/slices/categoriesSlice'

const Category = ({ navigation }) => {
  const categories = useSelector(state => state.categories)
  const dispatch = useDispatch()

  const changeName = () => {
    alert(JSON.stringify(changeFirstCategoryName('apple')))
    dispatch(changeFirstCategoryName('apple'))
  }

  return (
      <SafeAreaView>
          <StatusBar translucent barStyle="dark-content"/>
          {/* <Header title="Dev Mobile"/> */}
          <Text style={styles.title}>Categorias</Text>
          <View style={styles.buttons}>
            {categories.map((category) => (
              // <Button onClick={changeName} key={category.id} label={category.category}></Button>
              <Button onClick={() => navigation.navigate('Quizz', {categoryId: category.id})} key={category.id} label={category.category}></Button>
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

export default Category