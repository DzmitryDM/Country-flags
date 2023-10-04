import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	pageSize: 8,
	currentPage: 1,
	portionNumber: 1,
	portionSize: 7,
};

const paginationSlice = createSlice({
	name: "@@pagination",
	initialState,
	reducers: {
		setPage: (state, action) => {
			state.currentPage = action.payload;
		},
		setRightPortionNumber: (state) => {
			state.portionNumber = state.portionNumber + 1;
		},
		setLeftPortionNumber: (state) => {
			state.portionNumber = state.portionNumber - 1;
		},
		setDefaultPortionNumber: (state) => {
			state.portionNumber = 1;
		},
	},
});

export const {
	setPage,
	setRightPortionNumber,
	setLeftPortionNumber,
	setDefaultPortionNumber,
} = paginationSlice.actions;
export const paginationReducer = paginationSlice.reducer;

//selectors
export const selectPagination = (state) => state.pagination;
