import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Category from './src/screens/Category';
import Quizz from './src/screens/Quizz';
import Result from './src/screens/Result';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ 
        headerStyle: {
          backgroundColor: '#343C58',
        },
        headerTintColor: '#fff',
        headerBackTitleStyle: {
          fontWeight: 'bold'
        }
      }}>
          <Stack.Screen name="Dev Mobile" component={Category}></Stack.Screen>
          <Stack.Screen name="Quizz" component={Quizz}></Stack.Screen>
          <Stack.Screen name="Resultado" component={Result}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;