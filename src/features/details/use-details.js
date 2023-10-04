import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	clearCountry,
	loadCurrentCountry,
	selectDetails,
} from "./details-slice";

export const useDetails = (name) => {
	const dispatch = useDispatch();
	const details = useSelector(selectDetails);

	useEffect(() => {
		dispatch(loadCurrentCountry(name));
		return () => {
			dispatch(clearCountry());
		};
	}, [dispatch, name]);

	return details;
};
