import { createSlice } from '@reduxjs/toolkit'
import questionsMock from '../../data/questionsMock';

const questionsSlice = createSlice({
    name: 'questions',
    initialState: questionsMock,
    reducers: {
        changeFirstCategoryName: (state, action) => {
            state[0].category = action.payload;
        },
    }
});

export const { changeFirstCategoryName } = questionsSlice.actions;
export default questionsSlice.reducer