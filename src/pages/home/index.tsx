import { useEffect, useState } from "react";

import "./home.css";
import { NasaApiData } from "../../types";
import { getImage } from "../../api/image";

export default function HomePage() {
	const [apiData, setApiData] = useState<NasaApiData | null>(null);

	useEffect(() => {
		async function getApiData() {
			const data = await getImage({
				Authorization: `Bearer token`
			});

			setApiData(data.data);
		}

		// error handling should be implemented here, skipping it due to time constraints
		getApiData();
	}, []);

	return (
		<main className="homepage">
			<div className="container">
				<h1 className="text-center font-bold">TODAY'S PLANETARY IMAGE</h1>
				{apiData != null ? (
					<></>
				) : (
					<div className="loading text-center mt-6">LOADING...</div>
				)}
			</div>
		</main>
	);
}
