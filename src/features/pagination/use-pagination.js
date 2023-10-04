import { useDispatch, useSelector } from "react-redux";
import {
	selectPagination,
	setPage,
	setLeftPortionNumber,
	setRightPortionNumber,
} from "./pagination-slice";

export const usePagination = (totalCountries) => {
	const dispatch = useDispatch(totalCountries);
	const { currentPage, portionNumber, pageSize, portionSize } =
		useSelector(selectPagination);

	const totalPages = Math.ceil(totalCountries / pageSize);
	const page = [];
	for (let i = 1; i <= totalPages; i++) {
		page.push(i);
	}

	const portionCount = Math.ceil(totalPages / portionSize);
	const leftPortionNumber = (portionNumber - 1) * portionSize + 1;
	const rightPortionNumber = portionNumber * portionSize;

	const setCurrentPage = (page) => {
		dispatch(setPage(page));
	};
	const setPortionNumberLeft = () => {
		dispatch(setLeftPortionNumber());
		setCurrentPage(leftPortionNumber - 7);
	};
	const setPortionNumberRight = () => {
		dispatch(setRightPortionNumber());
		setCurrentPage(leftPortionNumber + 7);
	};

	return [
		page,
		portionCount,
		leftPortionNumber,
		rightPortionNumber,
		setCurrentPage,
		setPortionNumberLeft,
		setPortionNumberRight,
		{ currentPage, portionNumber },
	];
};
