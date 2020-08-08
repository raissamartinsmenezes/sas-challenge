import { configureStore, combineReducers } from "@reduxjs/toolkit";

import categories from "./slicers/categoriesSlice";
// import questions from "./slicers/questionsSlice";
// import quizz from "./slicers/quizzSlice";
// import records from "./slicers/recordsSlice";

const reducer = combineReducers({
  categories,
//   questions,
//   quizz,
//   records,
});

const store = configureStore({
  reducer,
});

export default store;
