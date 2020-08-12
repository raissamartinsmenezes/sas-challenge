import { createSlice } from "@reduxjs/toolkit";
import questionsMock from "../../data/questionsMock";

const transformQuestions = (questions) => {
  const transformedQuestions = questions.map((originalQuestion, index) => {
    const { correct_answer, question, incorrect_answers, ...otherProperties } = originalQuestion;

    const answers = [correct_answer, ...incorrect_answers].sort();

    return {
      id: index,
      answers,
      correctAnswer: correct_answer,
      description: question,
      ...otherProperties,
    };
  });

  // retornar shuffled transformedQuestions
  return transformedQuestions;
};

const questionsSlice = createSlice({
  name: "questions",
  initialState: transformQuestions(questionsMock),
  reducers: {},
});

export default questionsSlice.reducer;
