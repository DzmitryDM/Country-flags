import { useDispatch, useSelector } from "react-redux";
import { selectControls, setRegion } from "./controls-slice";
import {
	setDefaultPortionNumber,
	setPage,
} from "../pagination/pagination-slice";

export const useSelect = () => {
	const dispatch = useDispatch();
	const { region } = useSelector(selectControls);

	const handleRegion = (reg) => {
		dispatch(setPage(1));
		dispatch(setDefaultPortionNumber());
		dispatch(setRegion(reg?.value || ""));
	};

	return [handleRegion, region];
};
