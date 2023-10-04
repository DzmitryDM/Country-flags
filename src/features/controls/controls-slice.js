import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	search: "",
	region: "",
};

export const controlsSlice = createSlice({
	name: "@@controls",
	initialState,
	reducers: {
		setSearch: (state, action) => {
			state.search = action.payload;
		},
		setRegion: (state, action) => {
			state.region = action.payload;
		},
		cleanUp: () => initialState,
	},
});

export const { setSearch, setRegion, cleanUp } = controlsSlice.actions;
export const controlsReducer = controlsSlice.reducer;

//selectors

export const selectControls = (state) => state.controls;
