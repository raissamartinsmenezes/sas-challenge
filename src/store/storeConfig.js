import { configureStore, combineReducers } from "@reduxjs/toolkit"

import categories from "./slices/categoriesSlice"
import questions from "./slices/questionsSlice"
import answers from "./slices/answersSlice"

const reducer = combineReducers({
  categories,
  questions,
  answers,
})

const store = configureStore({
  reducer,
})

export default store
