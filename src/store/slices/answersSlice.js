import { createSlice } from '@reduxjs/toolkit'

const answersSlice = createSlice({
    name: 'answers',
    initialState: [],
    reducers: {
        addAnswer: (state, action) => {
            state.push(action.payload)
        },
    }
});

export const { addAnswer } = answersSlice.actions
export default answersSlice.reducer
