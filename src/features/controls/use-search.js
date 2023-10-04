import { useDispatch, useSelector } from "react-redux";
import { selectControls, setSearch } from "./controls-slice";
import {
	selectPagination,
	setDefaultPortionNumber,
	setPage,
} from "../pagination/pagination-slice";

export const useSearch = () => {
	const dispatch = useDispatch();
	const { search } = useSelector(selectControls);
	const { currentPage } = useSelector(selectPagination);

	const handleSearch = (e) => {
		if (currentPage !== 1) {
			dispatch(setPage(1));
		}
		dispatch(setDefaultPortionNumber());
		dispatch(setSearch(e.target.value));
	};

	return [search, handleSearch];
};
