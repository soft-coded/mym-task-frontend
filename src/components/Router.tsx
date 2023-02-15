import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/home";

export default function Router() {
	return (
		<Routes>
			<Route path="/login" />
			<Route path="signup" />
			<Route>
				<Route path="/" element={<HomePage />} />
			</Route>
		</Routes>
	);
}
