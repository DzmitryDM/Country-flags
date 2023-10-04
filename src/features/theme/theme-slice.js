import { createSlice } from "@reduxjs/toolkit";
import { loadState, saveState } from "../local-storage";

const persistTheme = loadState();

export const themeSlice = createSlice({
	name: "@@theme",
	initialState: { theme: persistTheme },
	reducers: {
		setTheme: (state, action) => {
			state.theme = action.payload;
			saveState(state.theme);
		},
	},
});

export const { setTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;

//selectors
export const selectTheme = (state) => state.theme.theme;
