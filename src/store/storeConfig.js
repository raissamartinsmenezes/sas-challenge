import { configureStore, combineReducers } from "@reduxjs/toolkit"

import categories from "./slices/categoriesSlice"
import questions from "./slices/questionsSlice"

const reducer = combineReducers({
  categories,
  questions,
})

const store = configureStore({
  reducer,
})

export default store
