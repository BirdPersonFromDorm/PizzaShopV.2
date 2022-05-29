import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    categoryId: 0,
    currentPage: 1,
    sort: {
        name: 'популярности',
        sort: 'rating'
    },
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryId: (state, action) => {
            state.categoryId = action.payload;
        },
        setSort: (state, actions) => {
            state.sort = actions.payload
        },
        setCurrentPage: (state, actions) => {
            state.currentPage = actions.payload
        }
    },
})

export const {setCategoryId, setSort, setCurrentPage} = filterSlice.actions

export default filterSlice.reducer
