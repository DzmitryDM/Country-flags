import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadNeighboursCountry, selectDetails } from "./details-slice";

export const useNeighbours = (borders = []) => {
	const dispatch = useDispatch();
	const { neighbours, error } = useSelector(selectDetails);

	useEffect(() => {
		dispatch(loadNeighboursCountry(borders));
	}, [borders, dispatch]);

	return { neighbours, error };
};
