import { Routes, Route } from "react-router-dom";

export default function Router() {
	return (
		<Routes>
			<Route path="/login" />
			<Route path="signup" />
			<Route>
				<Route path="/" />
			</Route>
		</Routes>
	);
}
