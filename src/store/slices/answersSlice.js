import { createSlice } from '@reduxjs/toolkit'

const answersSlice = createSlice({
    name: 'answers',
    initialState: [],
    reducers: {
        addQuestionToAnswersList: (state, action) => {
            state.push(action.payload)
        },
        resetAnswersList: (state) => {
            state.length = 0
        }
    }
});

export const { 
    addQuestionToAnswersList,
    resetAnswersList
} = answersSlice.actions

export default answersSlice.reducer

