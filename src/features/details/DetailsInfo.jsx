import React from "react";
import { useDetails } from "./use-details";
import { useNavigate, useParams } from "react-router-dom";
import { Info } from "../../components/Info";

function DetailsInfo() {
	const navigate = useNavigate();
	const { name } = useParams();
	const { currentCountry, status } = useDetails(name);

	return (
		<>
			{status === "loading" && <h2>Loading...</h2>}
			{status === "rejected" && <h2>Failed to load the current country !</h2>}
			{currentCountry && <Info push={navigate} {...currentCountry} />}
		</>
	);
}

export default DetailsInfo;
