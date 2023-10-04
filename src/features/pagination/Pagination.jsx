import React from "react";
import styled from "styled-components";
import { usePagination } from "./use-pagination";

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const LinkPage = styled.a`
	font-weight: 800;
	margin: 0 1.4rem;
	@media (max-width: 700px) {
		margin: 0 0.8rem;
		font-size: 0.9rem;
	}
	@media (max-width: 480px) {
		margin: 0 0.5rem;
		font-size: 0.9rem;
	}
`;

const ButtonStyled = styled.button`
	font-size: 1rem;
	letter-spacing: 0.1rem;
	color: var(--colors-text);
	border-radius: 2rem;
	border: 0rem black solid;
	padding: 0.4rem 1.5rem;
	font-weight: 600;
	box-shadow: var(--shadow);
	background-color: var(--colors-ui-base);
	cursor: pointer;
	@media (max-width: 700px) {
		padding: 0.3rem 0.7rem;
		margin: 0 rem;
		font-size: 0.9rem;
	}
	@media (max-width: 480px) {
		padding: 0rem;
		margin: 0 rem;
		font-size: 0.9rem;
	}
`;

function Pagination({ totalCountries }) {
	const [
		page,
		portionCount,
		leftPortionNumber,
		rightPortionNumber,
		setCurrentPage,
		setPortionNumberLeft,
		setPortionNumberRight,
		{ currentPage, portionNumber },
	] = usePagination(totalCountries);

	return (
		<Wrapper>
			{portionNumber > 1 && (
				<ButtonStyled onClick={setPortionNumberLeft}>prev</ButtonStyled>
			)}
			{page
				.filter(
					(page) => page >= leftPortionNumber && page <= rightPortionNumber
				)
				.map((page, index) => (
					<LinkPage
						className={page === currentPage ? "active" : "pageNumber"}
						onClick={() => setCurrentPage(page)}
						key={index}
					>
						{page}
					</LinkPage>
				))}
			{portionCount > portionNumber && (
				<ButtonStyled onClick={setPortionNumberRight}>next</ButtonStyled>
			)}
		</Wrapper>
	);
}

export default Pagination;
