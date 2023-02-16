import { useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "../../store";
import { NasaApiData } from "../../types";
import { getImage } from "../../api/image";
import { authActions } from "../../store/authSlice";
import ImageCard from "./ImageCard";

export default function HomePage() {
	const dispatch = useAppDispatch();
	const [apiData, setApiData] = useState<NasaApiData | null>(null);
	const [error, setError] = useState<string | null>(null);
	const { token, email } = useAppSelector(state => state.auth);

	function handleLogout() {
		dispatch(authActions.logout());
	}

	useEffect(() => {
		async function getApiData() {
			try {
				setError(null);
				const data = await getImage({
					Authorization: `Bearer ${token}`
				});

				setApiData(data.data);
			} catch (err: any) {
				setError(err.message);
			}
		}

		getApiData();
	}, [token]);

	return (
		<main className="homepage">
			<div className="container">
				<h1 className="text-center font-bold">TODAY'S PLANETARY IMAGE</h1>
				{error ? (
					<div className="error mt-8 mb-8">
						<h1>{error}</h1>
					</div>
				) : apiData ? (
					<ImageCard {...apiData} />
				) : (
					<div className="loading text-center mt-6">
						<h3>LOADING...</h3>
					</div>
				)}
				<div className="logout flex items-center justify-center mt-8 gap-4">
					<h5>
						Logged in as <i>{email}</i>
					</h5>
					<button onClick={handleLogout}>LOG OUT</button>
				</div>
			</div>
		</main>
	);
}
