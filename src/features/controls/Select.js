import React from "react";
import { CustomSelect } from "./../../components/CustomSelect";
import { useSelect } from "./use-select";

const optionsMap = {
	Africa: { value: "Africa", label: "Africa" },
	America: { value: "America", label: "America" },
	Asia: { value: "Asia", label: "Asia" },
	Europe: { value: "Europe", label: "Europe" },
	Oceania: { value: "Oceania", label: "Oceania" },
};
const options = Object.values(optionsMap);

function Select() {
	const [handleRegion, region] = useSelect();

	return (
		<CustomSelect
			options={options}
			placeholder="Filter by Region"
			isClearable
			isSearchable={false}
			value={optionsMap[region]}
			onChange={handleRegion}
		/>
	);
}

export default Select;
