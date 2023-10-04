import { configureStore } from "@reduxjs/toolkit";
import * as api from "./../config";
import axios from "axios";
import { themeReducer } from "../features/theme/theme-slice";
import { countriesReducer } from "../features/countries/countries-slice";
import { controlsReducer } from "../features/controls/controls-slice";
import { detailsReducer } from "../features/details/details-slice";
import { paginationReducer } from "../features/pagination/pagination-slice";

export const store = configureStore({
	reducer: {
		theme: themeReducer,
		countries: countriesReducer,
		controls: controlsReducer,
		details: detailsReducer,
		pagination: paginationReducer,
	},
	devTools: true,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			thunk: {
				extraArgument: {
					client: axios,
					api,
				},
			},
			serializableCheck: false,
		}),
});
