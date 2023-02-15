import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/home";
import SignupPage from "../pages/signup";
import LoginPage from "../pages/login";

export default function Router() {
	return (
		<Routes>
			<Route path="/login" element={<LoginPage />} />
			<Route path="/signup" element={<SignupPage />} />
			<Route>
				<Route path="/" element={<HomePage />} />
			</Route>
		</Routes>
	);
}
