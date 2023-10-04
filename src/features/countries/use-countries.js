import { useDispatch, useSelector } from "react-redux";
import {
	loadCountries,
	selectCountriesStatus,
	selectVisibleCountries,
} from "./countries-slice";
import { useEffect } from "react";
import { selectControls } from "../controls/controls-slice";
import { selectPagination } from "../pagination/pagination-slice";

export const useCountries = () => {
	const dispatch = useDispatch();

	const { search, region } = useSelector(selectControls);
	const countryAll = useSelector((state) =>
		selectVisibleCountries(state, { search, region })
	);

	const { pageSize, currentPage } = useSelector(selectPagination);

	const lastCountry = pageSize * currentPage;
	const firstCountry = lastCountry - pageSize;

	const countries = countryAll.slice(firstCountry, lastCountry);

	const totalCountries = countryAll.length;

	const { status, error, qty } = useSelector(selectCountriesStatus);

	useEffect(() => {
		if (!qty) {
			dispatch(loadCountries());
		}
	}, [qty, dispatch]);

	return [countries, totalCountries, { status, error }];
};
