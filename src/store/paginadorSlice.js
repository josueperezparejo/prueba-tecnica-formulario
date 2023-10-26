import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    page: 1
}

export const paginadorSlice = createSlice({
    name: 'paginador',
    initialState,
    reducers: {
        handlePage: (state, action) => {
            state.page = action.payload
        },
        nextPage: (state) => {
            if (state.page < 5) return {page: state.page + 1}
        },
        previousPage: (state) => {
            if (state.page > 1) return {page: state.page - 1}
        }

    }
});

export const { handlePage, nextPage, previousPage } = paginadorSlice.actions;
export default paginadorSlice.reducer