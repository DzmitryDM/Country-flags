import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const loadCountries = createAsyncThunk(
	"@@counries/load-Countries",
	(_, { extra: { client, api } }) => {
		return client.get(api.ALL_COUNTRIES);
	}
);
const initialState = {
	status: "idle",
	error: null,
	list: [],
};
export const countriesSlice = createSlice({
	name: "@@counries",
	initialState,
	reducers: {
		clearCountries: () => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(loadCountries.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(loadCountries.rejected, (state, action) => {
				state.status = "rejected";
				state.error = action.payload || action.meta.error;
			})
			.addCase(loadCountries.fulfilled, (state, action) => {
				state.status = "received";
				state.list = action.payload.data;
			});
	},
});

export const { clearCountries } = countriesSlice.actions;
export const countriesReducer = countriesSlice.reducer;
//selector
export const selectAllCountries = (state) => state.countries.list;
export const selectCountriesStatus = (state) => ({
	status: state.countries.status,
	error: state.countries.error,
	qty: state.countries.list.length,
});
export const selectVisibleCountries = (state, { search = "", region = "" }) =>
	state.countries.list.filter(
		(c) =>
			c.name.toLowerCase().includes(search.toLowerCase()) &&
			c.region.includes(region)
	);
