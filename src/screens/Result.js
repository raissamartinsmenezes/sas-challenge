import React, { useEffect, useState, useCallback } from "react";
import { StyleSheet, Text, Image, View, Dimensions, ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { BackHandler } from 'react-native';

import Button from "../components/Button";
import TotalResult from "../components/TotalResult";
import ResultPerLevel from "../components/ResultPerLevel";
import { resetAnswersList } from "../store/slices/answersSlice";

const Result = ({ navigation }) => {
  const answers = useSelector((state) => state.answers);
  const [total, setTotal] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      return true
    }); 
    
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', () => {
        return true
      });
    }
  }, []);

  const totalValue = React.useMemo(() => {
    const getAnswersCount = (difficulty, correct) => {
      console.warn(answers)
      return answers.filter(answer => answer.difficulty === difficulty && answer.correct === correct).length;
    };
  
    return {
      error: answers.filter(({ correct }) => correct === false).length,
      hits: answers.filter(({ correct }) => correct === true).length,
      easyHits: getAnswersCount("easy", true),
      easyError: getAnswersCount("easy", false),
      mediumHits: getAnswersCount("medium", true),
      mediumError: getAnswersCount("medium", false),
      hardHits: getAnswersCount("hard", true),
      hardError: getAnswersCount("hard", false),
    };

  }, [answers]);

  useEffect(() => {
    if (answers) {
      setTotal(totalValue);
    }
  }, [answers]);

  const goToCategories = useCallback(() => {
    dispatch(resetAnswersList());
    navigation.navigate("Dev Mobile");
  }, [dispatch]);

  return (
    <ScrollView>
      <Image
        style={styles.image}
        source={require("../images/header.png")}
      ></Image>
      <View style={styles.box}>
        <Text style={styles.title}>Veja seu desempenho nas questões</Text>
      </View>
      <TotalResult hits={total.hits} errors={total.error}></TotalResult>
      <ResultPerLevel
        totalEasyHits={total.easyHits}
        totalEasyError={total.easyError}
        totalMediumHits={total.mediumHits}
        totalMediumError={total.mediumError}
        totalHardHits={total.hardHits}
        totalHardError={total.hardError}
      ></ResultPerLevel>
      <Button
        onClick={goToCategories}
        label="Voltar ao início"
        backgroundColor="#fff"
        textColor="#78809A"
        borderWidth={1}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "#343C58",
    fontSize: 14,
    fontWeight: "bold",
    paddingVertical: 10,
    textAlign: "center",
  },

  image: {
    width: Dimensions.get("window").width,
    height: 168,
    resizeMode: "contain",
  },

  box: {
    width: Dimensions.get("window").width - 66,
    marginTop: 12,
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#343C58",
    alignSelf: "center",
  },
});

export default Result;
