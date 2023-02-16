import { useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "../../store";
import "./home.css";
import { NasaApiData } from "../../types";
import { getImage } from "../../api/image";
import { authActions } from "../../store/authSlice";

export default function HomePage() {
	const dispatch = useAppDispatch();
	const [apiData, setApiData] = useState<NasaApiData | null>(null);
	const [error, setError] = useState<string | null>(null);
	const token = useAppSelector(state => state.auth.token);

	function handleLogout() {
		dispatch(authActions.logout());
	}

	useEffect(() => {
		async function getApiData() {
			try {
				const data = await getImage({
					Authorization: `Bearer ${token}`
				});

				setApiData(data.data);
			} catch (err: any) {
				setError(err.message);
			}
		}

		// error handling should be implemented here, skipping it due to time constraints
		getApiData();
	}, [token]);

	return (
		<main className="homepage">
			<div className="container">
				<h1 className="text-center font-bold">TODAY'S PLANETARY IMAGE</h1>
				{error ? (
					<div className="error mt-8">
						<h1>{error}</h1>
					</div>
				) : apiData != null ? (
					<></>
				) : (
					<div className="loading text-center mt-6">LOADING...</div>
				)}
				<div className="logout flex items-center justify-center mt-8">
					<button onClick={handleLogout}>LOG OUT</button>
				</div>
			</div>
		</main>
	);
}
