import React from "react";
import { List } from "../../components/List";
import { Card } from "../../components/Card";
import { useNavigate } from "react-router-dom";
import { useCountries } from "./use-countries";
import Pagination from "../pagination/Pagination";

function CountriesList() {
	const navigate = useNavigate();

	const [countries, totalCountries, { status }] = useCountries();

	return (
		<>
			{status === "rejected" && <h2>Failed to load the list of countries !</h2>}
			{status === "loading" && <h2>Loading...</h2>}

			{status === "received" && (
				<List>
					{countries.map((c) => {
						const countryInfo = {
							img: c.flags.png,
							name: c.name,
							info: [
								{
									title: "Population",
									description: c.population.toLocaleString(),
								},
								{
									title: "Region",
									description: c.region,
								},
								{
									title: "Capital",
									description: c.capital,
								},
							],
						};

						return (
							<Card
								key={c.name}
								onClick={() => navigate(`/country/${c.name}`)}
								{...countryInfo}
							/>
						);
					})}
				</List>
			)}
			<Pagination totalCountries={totalCountries} />
		</>
	);
}

export default CountriesList;
