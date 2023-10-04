import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadCurrentCountry = createAsyncThunk(
	"load-current-country",
	(name, { extra: { client, api } }) => {
		return client.get(api.searchByCountry(name));
	}
);

export const loadNeighboursCountry = createAsyncThunk(
	"load-neighbours-country",
	async (code, { extra: { client, api } }) => {
		const data = await client.get(api.filterByCode(code));
		return data;
	}
);

const initialState = {
	status: "idle",
	error: null,
	currentCountry: null,
	neighbours: [],
};

export const detailsSlice = createSlice({
	name: "@@details",
	initialState,
	reducers: {
		clearCountry: () => initialState,
	},
	extraReducers: (builder) => {
		builder.addCase(loadCurrentCountry.pending, (state) => {
			state.status = "loading";
			state.error = null;
		});
		builder.addCase(loadCurrentCountry.rejected, (state, action) => {
			state.status = "rejected";
			state.error = action.payload || action.meta.error;
		});
		builder.addCase(loadCurrentCountry.fulfilled, (state, action) => {
			state.status = "received";
			state.currentCountry = action.payload.data[0];
		});

		builder.addCase(loadNeighboursCountry.fulfilled, (state, action) => {
			state.status = "received";
			state.neighbours = action.payload.data.map((b) => b.name);
		});
	},
});

export const { clearCountry } = detailsSlice.actions;
export const detailsReducer = detailsSlice.reducer;

//selectors
export const selectDetails = (state) => state.details;
