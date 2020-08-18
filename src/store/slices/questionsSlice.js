import { createSlice } from "@reduxjs/toolkit";
import unescape from "lodash/unescape";

const baseUrl = "https://opentdb.com/api.php";

const transformQuestions = (questions) => {
  const transformedQuestions = questions.map((originalQuestion) => {
    const {
      correct_answer,
      question,
      incorrect_answers,
      ...otherProperties
    } = originalQuestion;

    const escapedAnswers = [correct_answer, ...incorrect_answers].sort();
    const answers = escapedAnswers.map(unescape);
    const description = unescape(question);

    return {
      id: correct_answer,
      answers,
      description,
      correctAnswer: correct_answer,
      ...otherProperties,
    };
  });

  return transformedQuestions;
};

const initialState = {
  list: [],
  isLoading: true,
  error: null,
};

const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    getQuestions: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    getQuestionsSuccess: (state, actions) => {
      state.list = transformQuestions(actions.payload);
      state.isLoading = false;
      state.error = null;
    },
    getQuestionsFailure: (state, actions) => {
      state.isLoading = false;
      state.error = actions.payload;
    },
    resetQuestions: (state) => {
      state.list = [];
    },
  },
});

export const {
  getQuestions,
  getQuestionsSuccess,
  getQuestionsFailure,
  resetQuestions,
} = questionsSlice.actions;

export const fetchQuestions = (categoryId) => async (dispatch) => {
  dispatch(getQuestions());
  try {
    const request = await fetch(
      `${baseUrl}?amount=50&category=${categoryId}&type=multiple`
    );
    const requestResult = await request.json();
    dispatch(getQuestionsSuccess(requestResult.results));
  } catch (err) {
    dispatch(getQuestionsFailure(err.toString()));
  }
};

export default questionsSlice.reducer;
