import styled from "styled-components";

import { Search } from "./../features/controls/Search";
import Select from "../features/controls/Select";

const optionsMap = {
	Africa: { value: "Africa", label: "Africa" },
	America: { value: "America", label: "America" },
	Asia: { value: "Asia", label: "Asia" },
	Europe: { value: "Europe", label: "Europe" },
	Oceania: { value: "Oceania", label: "Oceania" },
};
const options = Object.values(optionsMap);

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	@media (min-width: 767px) {
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
`;

export const Controls = () => {
	return (
		<Wrapper>
			<Search />
			<Select />
		</Wrapper>
	);
};
