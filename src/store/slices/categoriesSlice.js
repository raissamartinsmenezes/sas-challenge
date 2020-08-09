import { createSlice } from '@reduxjs/toolkit'

const categoriesSlice = createSlice({
    name: 'categories',
    initialState:  [
        { id: 23, category: 'Historia' },
        { id: 22, category: 'Geografia' },
        { id: 20, category: 'Mitologia' },
        { id: 21, category: 'Esportes' },
        { id: 24, category: 'Politica' },
        { id: 9, category: 'Conhecimentos gerais' },
    ],
    reducers: {
        changeFirstCategoryName: (state, action) => {
            state[0].category = action.payload
        },
    }
});

export const { changeFirstCategoryName } = categoriesSlice.actions
export default categoriesSlice.reducer